import { useEffect, useRef } from 'react';
import Doodle from "../../assets/images/DoodleArt.jpg";

export default function ParallaxContainer({children}){
    const parallaxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const yPos = window.pageYOffset / 2; // Adjust the divisor for different parallax speeds
                parallaxRef.current.style.backgroundPosition = `center ${yPos}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className="w-full bg-black relative overflow-hidden ">
        <div ref={parallaxRef} className="absolute top-0 left-0 right-0 bottom-0"
            style={{
                backgroundImage: `url(${Doodle})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0,

            }}
        ></div>
        <div className="w-full h-full flex justify-center items-center relative py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 1 }} >
        {children}
        </div>
        </div>
    );
}