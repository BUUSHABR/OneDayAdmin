import { useEffect, useRef } from 'react';
import Burger from '../assets/images/Cheese-Burger.png';
import LogoWhite from "../assets/icons/LOGO&.svg";
import TextAnim from '../components/animations/TextAnim';
import RedoAnimText from '../components/animations/MultiTextAnim';

function Main() {
    const firstImageRef = useRef(null);
    const secondImageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // Get the scroll position
            const scrollY = window.scrollY || window.pageYOffset;

            // Update the translateY CSS property of the first image based on the scroll position
            if (firstImageRef.current && secondImageRef.current) {
                const translateY = `${scrollY * 0.5}px`; // Adjust the multiplier to control the parallax effect
                firstImageRef.current.style.transform = `translateY(${translateY})`;
            }
        };


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    return (
        <div className='py-5 bg-black'>
            <div className='flex flex-row justify-between w-full  px-10 mt-1'>
                <div className='flex flex-row '>
                    <p className='text-white ms-5 font-bold hover:text-int-primary cursor-pointer'>Services</p>
                    <p className='text-white ms-5 font-bold  hover:text-int-primary cursor-pointer'>Menu</p>
                </div>
                <div className='flex flex-row'>
                    <p className='text-white ms-5 font-bold  hover:text-int-primary cursor-pointer'>Contact</p>
                    <p className='text-white ms-5 font-bold  hover:text-int-primary cursor-pointer'>Reviews</p>
                </div>
            </div>

            <div className=' items-center justify-center flex flex-col relative overflow-hidden'>
                <div  ref={secondImageRef} className=' flex flex-row z-10  mt-40  items-center  w-full ms-40'>
                <img
                    ref={secondImageRef} 
                    src={Burger}
                    alt="Burger Illustration"
                    className='h-[60%] w-[50%] ' // Increase z-index to ensure the second image is above the first
                />
                <div className='w-[40%]'> 
                <p className='text-white font-bold text-[60px]' ><TextAnim Value='fill your...' cursor={false}/></p>
                <p className='text-int-primary font-bold text-[80px]'><RedoAnimText Value={['Joys','Mood',"Tummies"]}/></p>
                <p className='text-white font-bold text-[60px]' ><TextAnim Value='like never before' cursor={false}/></p></div>
 
                </div>
                <img
                    ref={firstImageRef}
                    src={LogoWhite}
                    alt="Burger Illustration"
                    className='h-[30%] w-[60%] mb-5 absolute top-10 left-100 transform' // Position the first image absolutely
                />

            </div>
        </div>

    );
}

export default Main;
