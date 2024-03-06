import axios from 'axios';
const BaseUrl=process.env.REACT_APP_DEV_UPLOAD
export async function UploadImage(file) {
  try {
    const formData = new FormData();
    formData.append('image', file); // 'file' should match the key used on the server side (req.file)

    const response = await axios.post(BaseUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
// console.log("resss",response);
    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}
