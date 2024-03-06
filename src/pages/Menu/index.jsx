
import { ReactComponent as OnedayIcon } from '../../assets/icons/OneDayBlack.svg';
import useMenu from '../../utils/UseMenu';
import OneDay from '../../assets/images/Cheese-Burger.png';
import Dish from "../../assets/icons/main-dish.png";
import Cuisine from "../../assets/icons/cuisine.png";
import { useNavigate, useNavigation } from 'react-router-dom';
import { PrimaryButton } from '../../components/Button';
function Menu() {
    const { data, isLoading, isError } = useMenu();
    const navigation=useNavigate();
const EditMenu=(item)=>{
console.log(item);
navigation(`/editmenu/${item._id}`, { state: { data: item } })
}   
 return (
        <div className=" w-full relative  ">
            <div className='cursor-pointer flex justify-center items-center w-full pt-5 '>
                <OnedayIcon className='w-40 h-40 ' />
                <div className='text-[60px] text-primary font-LuxuriousScript '>
                    Menu
                </div>

            </div>
            <div>
                {data?.map((item, catindex) => (
                    <div key={item}>
                        <div className='text-[50px] text-left px-5 text-primary font-LuxuriousScript '>
                            {item.category}
                        </div>
                        <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 px-5 '>
                            {item.items?.map((item, index) => (
                               <div key={index} className='h-80 group py-4 px-8 flex flex-col justify-center items-center cursor-pointer' onClick={()=>EditMenu(item)}>
                               <div className='w-28 h-28 rounded-full my-[2%]'>
                                   <img
                                       src={item?.item_url ? "http://localhost:3002/uploads/" + item.item_url : OneDay}
                                       className='object-cover w-full h-full rounded-full border group-hover:shadow-lg group-hover:shadow-primary'
                                       alt={`Item ${index}`}
                                   />
                               </div>
                               {/* <div className="w-24 h-24 rounded-full bg-int-red"></div> */}
                               <div className='h-[40%] text-white group-hover:text-primary w-full flex justify-center items-center'>
                                   <div className='w-[90%]'>{item.item_name}</div>
                                   <div className='ms-5'>₹{item.price}</div>
                               </div>
                               <div className='h-[10%] text-white group-hover:text-primary w-[100%] rounded-full border flex justify-center items-center my-5 py-2'>
                                   <img src={Cuisine} className='w-5 h-5' alt={`Item ${index}`} />
                                   <span className='md:ms-5 xxs:ms-2 text-primary md:text-[14px] sm:text-[10px] xxs:text-[8px] xs:text-[8px]'>{item.cuisine}</span>
                               </div>
                           </div>
                           
                            ))}
                        </div>
                    </div>))}

            </div>
            <div className='floatingButton fixed bottom-6 right-6 bg-int-grey-60 shadow-md shadow-primary rounded-full p-2 cursor-pointer' onClick={()=>navigation("/createmenu")}>
                <img src={Dish} className='w-10 h-10 rounded-full'/>
            </div>
        </div>
    );
}
export default Menu;