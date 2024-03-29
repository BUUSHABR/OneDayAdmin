import { useLocation, useNavigate, } from "react-router-dom"
import OneDay from '../../assets/icons/OneDayBlack.svg';
import { useFormik } from "formik";
import Input from "../../components/Input";
import { PrimaryButton } from "../../components/Button";
import { useState } from "react";
import { UploadImage } from "../../service/UploadImage";
import { PatchMenu, RemoveMenu } from "../../service/MenuService";
import { toast } from "react-toastify";
import * as Yup from 'yup';

export default function EditMenu() {
    const location = useLocation();
    const navigation=useNavigate();
    const { data } = location.state;
    const [showOverlay, setShowOverlay] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            previewImage(file);
            // Handle file upload logic here
            console.log(file);
        }
    };
    const previewImage = (file) => {
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const initialValues = {
        item_name: data.item_name,
        category: data.category,
        cuisine: data.cuisine,
        item_description: data.item_description,
        food_type: data.food_type,
        food_taste: data.food_taste,
        food_fact: data.food_fact,
        price: data.price,
        item_url: data.item_url,
        active:data?.active
    };
    const validationSchema = Yup.object().shape({
        item_name: Yup.string().required('Item name is required'),
        category: Yup.string().required('Category is required'),
        cuisine: Yup.string().required('Cuisine is required'),
        item_description: Yup.string(),
        food_taste: Yup.string().max(50, 'Food taste must be at most 50 characters'),
        food_fact: Yup.string(),
        price: Yup.number().required('Price is required').positive('Price must be a positive number'),
      });


    const onSubmit = async (values) => {
        if (selectedFile) {
            const Upload = await UploadImage(selectedFile).then(res=>{
                values.item_url=res.imageUrl;
        }).catch(err=>{
            console.log("Err",err);
        })
            
        }
        const EditReq=await PatchMenu(values,data._id);
        console.log("EditReq",EditReq,values)
        if(EditReq){
            toast.success("Successfuly Saved the Changes")
            navigation("/menu");
        }else{
            toast.error("Error While Updating")
        }
        console.log("EditReq",EditReq)
        console.log("val", values);

    }


    const DeleteMenu=async()=>{
        const DeleteReq=await RemoveMenu(data._id);
        if(DeleteReq){
            toast.success("Successfuly Deleted")
            navigation("/menu");
        }
        else{
            toast.error("Delete Failed!")
        }
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    return (
        <div className="bg-black h-full flex flex-col items-center text-primary  py-20">
            <div className="lg:text-[60px] md:text-[30px] sm:text-[20px] xs:text-[20px] text-primary font-LuxuriousScript">{data && data.item_name}</div>
            <div className="my-4 cursor-pointer" onMouseEnter={() => setShowOverlay(true)} onMouseLeave={() => setShowOverlay(false)}>
                {showOverlay && (
                    <div className="absolute flex justify-center items-end bg-int-red bg-opacity-50 p-4 w-40 h-40 rounded">
                        <label htmlFor="fileInput" className="cursor-pointer flex justify-center items-center h-full font-bold text-white">
                            {selectedFile ? selectedFile.name : "Select File"}
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </div>
                )}
                <img src={selectedFile ? previewUrl : data?.item_url?data?.item_url: OneDay} className="w-40 h-40 rounded hover:shadow-sm hover:shadow-primary rounded p-2" />
            </div>
            {data && <form onSubmit={formik.handleSubmit} className="max-w-[80%] min-w-[80%] " >
                <div className=" grid grid-cols-1  xxs:grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 gap-y-8 px-5">
                    <Input
                        label="Item Name"
                        type="text"
                        id="item_name"
                        name="item_name"
                        placeholder="Enter Item Name"
                        field={formik.getFieldProps('item_name')}
                        className="w-full "
                        text="[100%]"
                        error={formik.errors.item_name}
                        errorMessage={formik.errors.item_name}
                    />
                    <Input
                        label="Category"
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter Category"
                        field={formik.getFieldProps('category')}
                        className="w-full h-10"
                        text="[100%]"
                        error={formik.errors.category}
                        errorMessage={formik.errors.category}
                    />

                    <Input
                        label="Cuisine"
                        type="text"
                        id="cuisine"
                        name="cuisine"
                        placeholder="Enter Cuisine Name"
                        field={formik.getFieldProps('cuisine')}
                        className="w-full h-10"
                        text="[100%]"
                        error={formik.errors.cuisine}
                        errorMessage={formik.errors.cuisine}
                    />
                    <Input
                        label="Description"
                        type="text"
                        id="item_description"
                        name="item_description"
                        placeholder="Description of Food"
                        field={formik.getFieldProps('item_description')}
                        className="w-full h-10"
                        text="[100%]"
                        error={formik.errors.item_description}
                        errorMessage={formik.errors.item_description}
                        
                    />
                    <Input
                        label="Food Fact"
                        type="text"
                        id="food_fact"
                        name="food_fact"
                        placeholder="Inresting Fact of the Food"
                        field={formik.getFieldProps('food_fact')}
                        className="w-full h-10 mb-2 "
                        text="[100%]"
                        error={formik.errors.food_fact}
                        errorMessage={formik.errors.food_fact}
                    />
                    <Input
                        label="Food Taste"
                        type="text"
                        id="food_taste"
                        name="food_taste"
                        maxLength={10}
                        placeholder="Food taste (Max 50 characters)"
                        field={formik.getFieldProps('food_taste')}
                        className="w-full h-10"
                        text="[100%]"
                        error={formik.errors.food_taste}
                    errorMessage={formik.errors.food_taste}
                    />
                    <Input
                        label="Price"
                        type="number"
                        id="price"
                        name="price"
                        maxLength={10}
                        placeholder="Price in INR"
                        field={formik.getFieldProps('price')}
                        className="w-full h-10"
                        text="[100%]"
                        error={formik.errors.price}
                        errorMessage={formik.errors.price}
                    />
                    <div className="text-white flex flex-col">
                        <div className="text-primary">Food Type</div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="foodTypeToggle"
                                className="sr-only"
                                checked={formik.getFieldProps('food_type').value == 0} // Assuming isVeg is a state variable indicating whether the food is Veg or NonVeg
                                onChange={() => formik.setFieldValue("food_type", formik.getFieldProps('food_type').value == 0 ? 1 : 0)}
                            />
                            <label
                                htmlFor="foodTypeToggle"
                                className={`relative block w-10 h-5 rounded-full bg-gray-400 transition duration-300 ease-in-out ${formik.getFieldProps('food_type').value == 0 ? 'shadow-int-green shadow-md ' : 'shadow-int-red shadow-md'}`}
                            >
                                <span
                                    className={`absolute left-0 inline-block w-5 h-5 rounded-full  ${formik.getFieldProps('food_type').value == 0 ? 'bg-int-success ' : 'bg-int-danger'}  transform duration-300 ease-in-out ${formik.getFieldProps('food_type').value == 0 ? 'translate-x-5' : ''}`}
                                ></span>
                            </label>
                            <span className={`ml-2 ${formik.getFieldProps('food_type').value == 0 ? 'text-int-success' : 'text-int-danger'}`}>{formik.getFieldProps('food_type').value == 0 ? 'Veg' : 'NonVeg'}</span>
                        </div>

                    </div>
                    <div className="text-white flex flex-col">
                        <div className="text-primary">Availability</div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="statusToggle"
                                className="sr-only"
                                checked={formik.getFieldProps('active').value === true} // Assuming isVeg is a state variable indicating whether the food is Veg or NonVeg
                                onChange={() => formik.setFieldValue("active", formik.getFieldProps('active').value == true? false :true)}
                            />
                            <label
                                htmlFor="statusToggle"
                                className={`relative block w-10 h-5 rounded-full bg-gray-400 transition duration-300 ease-in-out ${formik.getFieldProps('active').value == true ? 'shadow-int-green shadow-md ' : 'shadow-int-red shadow-md'}`}
                            >
                                <span
                                    className={`absolute left-0 inline-block w-5 h-5 rounded-full  ${formik.getFieldProps('active').value == true ? 'bg-int-success ' : 'bg-int-danger'}  transform duration-300 ease-in-out ${formik.getFieldProps('food_type').value == 0 ? 'translate-x-5' : ''}`}
                                ></span>
                            </label>
                            <span className={`ml-2 ${formik.getFieldProps('active').value == true ? 'text-int-success' : 'text-int-danger'}`}>{formik.getFieldProps('active').value == true ? 'Available' : 'N/A'}</span>
                        </div>

                    </div>
                </div>
                <div className="flex   justify-center items-center  my-5 gap-x-4 ">
                    <PrimaryButton  red type="button" onClick={()=>DeleteMenu()}>Delete</PrimaryButton>
                    <PrimaryButton type="submit" dark  >Save</PrimaryButton>
                </div>
            </form>}

        </div>
    )
}