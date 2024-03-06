import axios from "axios";
const BaseUrl=process.env.REACT_APP_DEV_URL;

export async function LoginRequest(body) {
    let Url=`${BaseUrl}/user/signIn`;
    return axios.post(Url, body)
        .then(res => {
            console.log(res);
            return res?.data;
        })
        .catch(error => {
            console.log("error", error);
            return false;
        });
}

