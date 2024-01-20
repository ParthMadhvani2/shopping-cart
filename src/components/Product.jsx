import { useDispatch, useSelector } from "react-redux";
import {toast} from "react-hot-toast";
import { add,remove } from "../redux/Slices/CartSlice"

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  }

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 trasition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline-black">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div>
        <img src={post.image} />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      {
        cart.some((p) => p.id == post.id) ? 
        (<button onClick={removeFromCart}>
          Remove Item
        </button>) :
        (
          <button onClick={addToCart}>
            Add to Cart
          </button>
        )
      }
    </div>
  );
};

export default Product;
