import { ReactComponent as OnedayIcon } from '../../assets/icons/OneDayBlack.svg';
import { PrimaryButton } from '../../components/Button';
import Input from '../../components/Input';
import { useFormik } from 'formik';
import { LoginRequest } from '../../service/UserService';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigation=useNavigate();
    const initialValues = {
        email: "",
        password: "",
    };

    const onSubmit = async(values) => {
        console.log(values); // Handle form submission logic here
        const Response=await LoginRequest(values);
        if(Response){
            localStorage.setItem("USERKEY",Response?.data?.token);
            let Data=JSON.stringify(Response?.data)
            localStorage.setItem("USERINFO",Data);
            navigation("menu")

        }
    };

    const validate = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = "Invalid email address";
        }

        if (!values.password) {
            errors.password = "Password is required";
        }

        return errors;
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate, // Add the validate function
    });

    return (
        <div className="text-white text-[40px] flex flex-col justify-center items-center">
            <OnedayIcon className='w-25 h-25 align-center' />
            <div className='w-full flex justify-center items-center mt-20'>
                <div className='w-[30%] border shadow-lg shadow-primary p-5 rounded'>
                    <form onSubmit={formik.handleSubmit}>
                        <Input
                            label="Email"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your Email"
                            error={formik.touched.email && formik.errors.email}
                            errorMessage={formik.errors.email}
                            className=""
                            field={formik.getFieldProps('email')}
                        />
                        <Input
                            label="Password"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your Password"
                            error={formik.touched.password && formik.errors.password}
                            errorMessage={formik.errors.password}
                            className="w-full h-10"
                            field={formik.getFieldProps('password')}
                        />
                        <PrimaryButton type="submit" block disabled={!formik.isValid}>Submit</PrimaryButton>
                    </form>
                </div>
            </div>
        </div>
    );
}
