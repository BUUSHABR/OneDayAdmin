import axios from "axios";
 export const BaseUrl=process.env.REACT_APP_DEV_URL;

export async function GetMenu() {
    let token = localStorage.getItem("USERKEY");
    let Url = `${BaseUrl}/menu/list`;
    console.log("iii",process.env.DEV_URL)
    try {
        const response = await axios.get(Url, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        return response.data?.result;
    } catch (error) {
        console.error("Error fetching menu:", error);
        return [];
    }
}

export async function PostMenu(data) {
    let token = localStorage.getItem("USERKEY");
    let Url = `${BaseUrl}/menu/create`;
    
    try {
        const response = await axios.post(Url,data, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        return response.data?.result;
    } catch (error) {
        console.error("Error fetching menu:", error);
        return [];
    }
}



export async function PatchMenu(data,id) {
    let token = localStorage.getItem("USERKEY");
    let Url = `${BaseUrl}/menu/edit/${id}`;
    
    try {
        const response = await axios.put(Url,data, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        return response.data?.result;
    } catch (error) {
        console.error("Error fetching menu:", error);
        return false;
    }
}


export async function RemoveMenu(id) {
    let token = localStorage.getItem("USERKEY");
    let Url = `${BaseUrl}/menu/remove?menuId=${id}`;
    
    try {
        const response = await axios.post(Url,"",{
            headers: { "Authorization": `Bearer ${token}` }
        });
        return response;
    } catch (error) {
        console.error("Error Deleting menu:", error);
        return false;
    }
}
