import Logo from "../assets/icons/OneDayBlack.svg";
import Phone from "../assets/icons/telephone.png";
import Email from "../assets/icons/email.png";
import Location from "../assets/icons/location.png";
import GaImg1 from "../assets/images/Ga1.jpeg";

import GaImg2 from "../assets/images/Ga2.jpg";
import GaImg3 from "../assets/images/ga3.jpg";
import GaImg4 from "../assets/images/Ga4.jpg";
import GaImg5 from "../assets/images/Ga5.jpg";
import GaImg6 from "../assets/images/Ga6.png";

function Footer() {
    const GaImg=[GaImg1,GaImg2,GaImg3,GaImg4,GaImg5,GaImg6];
    return (
        <div className=" flex flex-row h-[500px] bg-black justify-between text-white font-bold  px-20 pt-10">
            <div><img src={Logo} className="h-30 w-40" /></div>
            <div className="flex flex-col  w-[30%]">
                <div className="text-3xl font-bold ">Working Hours</div>
                <ul className="list-disc w-[80%] mx-[10%]">
                    <li className="py-5">
                        <div className="text-md">Monday-Friday</div>
                        <div className="text-[#b99271] text-sm">11.30 am-11.00 pm</div>
                    </li>
                    <li className="py-5">
                        <div className="text-md">Saturday-Sunday</div>
                        <div className="text-[#b99271] text-sm">11.00 am-11.00 pm</div>
                    </li>
                </ul>

            </div>
            <div className="flex flex-col  w-[40%]">
                <div className="text-3xl font-bold text-left ms-5 ">Contact Us</div>
                <div className="flex mt-5 text-left items-center   w-[50%] cursor-pointer " onClick={() => window.location.href = "https://maps.app.goo.gl/5jGnow46uea7HFta7"}>
                    <img src={Location} className="h-11 w-11 mx-2" />
                    <div className="flex-col">
                        <div className=" mb-1 text-[#b99271] text-md font-bold">Location</div>
                        <div className="font-bold text-sm">11, kuppusamy pillai street, beside Sivan Kovil, Parasakthi Colony, Sivakasi, Tamil Nadu 626123</div>
                    </div>
                </div>
                <div className="flex mt-5 text-left items-center w-[50%]">
                    <a href="mailto:theoneday238@gmail.com" className="flex items-center cursor-pointer">
                        <img src={Email} className="h-11 w-11 mx-2" alt="Email icon" />
                        <div className="flex flex-col">
                            <div className="text-[#b99271] text-md font-bold">Email Address</div>
                            <div className="font-bold text-sm">theoneday238@gmail.com</div>
                        </div>
                    </a>
                </div>

                <div className="flex mt-5 text-left items-center w-[50%]">
                    <a href="tel:+916382353793" className="flex items-center cursor-pointer">
                        <img src={Phone} className="h-9 w-10 mx-3" alt="Phone icon" />
                        <div className="flex flex-col">
                            <div className="text-[#b99271] text-md font-bold">Phone Number</div>
                            <div className="font-bold text-sm">+91 63823-53793</div>
                        </div>
                    </a>
                </div>

            </div>
            <div class="flex flex-col  p-1 w-[30%]">
                <div class="text-3xl font-bold my-2">Gallery</div>
                <div class="flex flex-wrap justify-center   w-full">
                    {GaImg.map((item,index)=>(
                    <div key={index} class="w-[25%] md:w-1/3 lg:w-1/3 xl:w-1/3 h-20 md:h-12 lg:h-14 xl:h-22 m-1 cursor-pointertransition duration-300 ease-in-out transform hover:scale-110 bg-white rounded Gaimg">
                        <img src={item} alt={`Image ${index}`} className="h-full w-full object-cover rounded"/>
                    </div>
                ))}
                   
                    {/* <div class="w-[25%] md:w-1/3 lg:w-1/3 xl:w-1/3 h-20 md:h-12 lg:h-14 xl:h-22  m-1  cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 bg-white rounded Gaimg"></div>
                    <div class="w-[25%] md:w-1/3 lg:w-1/3 xl:w-1/3 h-20 md:h-12 lg:h-14 xl:h-22   m-1 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110   bg-white rounded Gaimg"></div>
                    <div class="w-[25%] md:w-1/3 lg:w-1/3 xl:w-1/3 h-20 md:h-12 lg:h-14 xl:h-22  m-1 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110   bg-white rounded Gaimg"></div>
                    <div class="w-[25%] md:w-1/3 lg:w-1/3 xl:w-1/3 h-20 md:h-12 lg:h-14 xl:h-22  m-1 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110  bg-white rounded Gaimg"></div>
                    <div class="w-[25%] md:w-1/3 lg:w-1/3 xl:w-1/3 h-20 md:h-12 lg:h-14 xl:h-22  m-1 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110  bg-white rounded Gaimg"></div> */}
                </div>
            </div>


        </div>
    );
};
export default Footer;