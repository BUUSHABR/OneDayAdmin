import { useEffect, useRef } from 'react';
import Doodle from "../assets/images/DoodleArt.jpg";
import Burger from "../assets/images/burger.png";
import ParallaxContainer from '../components/animations/ParallaxContainer';
function Banner() {
    let items = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <>
        <ParallaxContainer>
        <div className="text-center w-full justify-center items-center ">
                    <h1 className="text-int-primary text-6xl font-bold py-4">One Day Kitchen</h1>
                    <h1 className="text-white text-4xl font-bold py-4">Find Your Best Treat's In Here !</h1>
                    <div className='bg-black p-2 rounded flex bg-opacity-50 w-[80%] mx-[10%] justify-between'>
                        <div className='bg-black p-2 rounded flex bg-opacity-50 w-[80%] mx-[10%] justify-between flex-wrap'>
                            {items.map((item, index) => (
                                <div key={index} className='w-[50%] flex flex-row items-center justify-center mb-4'>
                                    <img src={Burger} className='h-40 w-40 rounded p-1 bg-black rounded mx-2' alt={`Burger ${index + 1}`} />
                                    <div className='text-white flex-col font-bold justify-center items-center'>
                                        <p className='text-[30px]  text-int-primary'>Double Day Burger</p>
                                        <p className='text-left text-int-grey-60 '>Double Day Burger</p>
                                        <p className='text-left text-int-grey-60'>................ ₹200</p>
                                    </div>
                                </div>
                            ))}
                        </div>                    </div>

                </div>
                </ParallaxContainer>
        </>
    );
}

export default Banner;
