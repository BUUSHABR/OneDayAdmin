import BurgerCheese from "../assets/images/Cheese-Burger.png";
import Students from "../assets/images/StudentsOffer.svg";

import Family from "../assets/images/FamilOffer.svg";

import Valentine from "../assets/images/ValentinesOffer.svg";

function Palatte (){
    let Counter =[1,2,3,4,5];
    let Image=[{image:Students},{image:Family},{image:Valentine}]
    return(
        <div className="w-full bg-black py-2">
        <div className="w-full bg-black" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
            <h1 className="text-int-primary text-4xl font-bold py-4 text-center">Offers for Your Day</h1>
            <div className="flex flex-row flex-wrap justify-center">
                {Image.map((item, index) => (
                 <div className="h-60 w-60 rounded bg-white m-4 relative overflow-hidden shadow shadow-int-primary ms-20">
                 <img key={index} src={item.image} className="absolute inset-0 w-full h-full object-cover rounded" />
             </div>
             
                ))}
            </div>
        </div>
    </div>
    )
}
export default Palatte;