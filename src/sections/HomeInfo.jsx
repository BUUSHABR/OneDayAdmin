import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Funchef from "../assets/images/Fun-chef.png";
import Experience from"../assets/images/Experience.png";
import Quality from"../assets/images/Quality.png";

export default function HomeInfo() {
    const aboutUsControls = useAnimation();
    const experienceControls = useAnimation();
    const aimControls = useAnimation();

    const aboutUsRef = useRef(null);
    const experienceRef = useRef(null);
    const aimRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const animateElement = (controls, ref) => {
                if (ref.current) {
                    const topPos = ref.current.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;

                    if (topPos < windowHeight * 0.8) {
                        controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
                    }
                }
            };

            animateElement(aboutUsControls, aboutUsRef);
            animateElement(experienceControls, experienceRef);
            animateElement(aimControls, aimRef);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [aboutUsControls, experienceControls, aimControls]);

    return (
        <>
            <div className=" bg-[#0e1317] flex justify-between px-10">
                <div className="rounded  px-5 w-[40%] py-5 dh-[50%] mt-[10%]">
                    <motion.div ref={aboutUsRef} initial={{ opacity: 0, y: 50 }} animate={aboutUsControls} className="text-white">
                        <p className="text-[#b99271]  text-xl mb-4 text-left">About Us</p>
                        <p className="text-white font-bold   text-5xl mb-4 text-left">Food Eco System and Resto Bars</p>
                        <div className="text-white text-md bg-[#b99271]  p-4 rounded text-left ">
                            <p>
                                One Day Kitchen is Sivakasi's first resto-bar, founded by young entrepreneur Bharath Raj, who hails from the same native town. Our mission is to introduce international cuisines to the people of Sivakasi in a classy and culturally enriching environment.
                            </p>
                        </div>
                    </motion.div>
                </div>
                <motion.img src={Funchef} initial={{ opacity: 0, y: 50 }} animate={aboutUsControls} className="h-[80%] w-[40%]" />
            </div>
            <div className=" bg-[#0e1317] flex justify-between px-1 w-full ">

                <motion.img src={Experience} initial={{ opacity: 0, y: 50 }} animate={aboutUsControls} className="h-[60%] w-[30%]" />
                <div className="rounded  px-5 w-[45%] py-1 h-[50%] mt-[5%] ml-auto">
                    <motion.div ref={aimRef} initial={{ opacity: 0, y: 50 }} animate={aimControls} className="text-white">
                        <p className="text-[#b99271]  text-xl mb-4 text-left">Aim</p>
                        <p className="text-white font-bold   text-5xl mb-4 text-left">Heritage  & Inter Continental variety</p>
                        <div className="text-white text-md bg-[#b99271] w-[80%] p-4 rounded text-left  flex-end">
                            <p className="mt-2">
                                Our goal is to showcase the cultural heritage of our region while offering a diverse range of high-quality cuisines to our local community. We are committed to maintaining the highest standards of service and quality without any compromise.
                            </p>
                            <p className="mt-2">
                                At One Day Kitchen, we aim to create a food business ecosystem that fosters trust and becomes a renowned brand in the near future.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className=" bg-[#0e1317] flex justify-between px-1 w-full ">
            <div className="rounded  px-5 w-[50%] py-5 dh-[50%] mt-[10%]">
                    <motion.div ref={experienceRef} initial={{ opacity: 0, y: 50 }} animate={experienceControls} className="text-white">
                        <p className="text-[#b99271]  text-xl mb-4 text-left">Experience</p>
                        <p className="text-white font-bold   text-5xl mb-4 text-left">Solid Knowledge In Industry</p>
                        <div className="text-white text-md bg-[#b99271] w-[80%]  p-4 rounded text-left  flex-end">
                            <p className="mt-2">
                                Bharath Raj gained valuable experience in the hospitality industry by working in various restaurants both within and outside of India after completing his BSc in Hotel Management from Bell Institute of Hotel Management, Sivakasi.
                            </p>
                        </div>
                    </motion.div>
                </div>
                <motion.img src={Quality} initial={{ opacity: 0, y: 50 }} animate={aboutUsControls} className="h-[60%] w-[40%]" />

            </div>
        </>
    )
}
