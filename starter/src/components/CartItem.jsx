import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return (
    <div className="flex items-center justify-between mb-6 p-4 bg-white shadow rounded-lg relative">
      <div>
        <div className="w-[120px]">
          <img src={item.image} alt="" className="w-full h-full object-cover ml-14 mb-10"/>
        </div>
        <div className="flex-1 ml-5">
          <h1 className="text-lg font-semibold">{item.title}</h1>
          <p className="text-gray-600 text-sm">{item.description.split(" ").slice(0, 20).join(" ")+"..."}</p>
          <div className="flex items-center justify-between mt-4">
            <p className="text-green-500 font-bold">${item.price.toFixed(2)}</p>
            <div onClick={removeFromCart} className="text-red-500 cursor-pointer p-2 rounded-full bg-red-100  hover:bg-red-200 transition duration-300">
              <FcDeleteDatabase size={24}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
