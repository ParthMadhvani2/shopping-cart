import { toast } from "react-hot-toast";
import { add, remove, addToWishlist, removeFromWishlist } from "../redux/Slices/cartSlice";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ product }) => {
  const { items, wishlist } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(product));
    toast.success("Item Added To Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.error("Item Removed From Cart");
  };

  const handleWishlistClick = () => {
    if (wishlist.some((p) => p.id === product.id)) {
      dispatch(removeFromWishlist(product.id));
      toast.error("Item Removed From Wishlist");
    } else {
      dispatch(addToWishlist(product));
      toast.success("Item Added To Wishlist");
    }
  };

  const isProductInWishlist = wishlist.some((p) => p.id === product.id);
  const isProductInCart = items.some((p) => p.id === product.id);

  return (
    <div className="group flex flex-col items-center justify-between bg-white hover:scale-110 transition-all duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024]">
      <div>
        <h1 className="text-gray-700 font-semibold text-lg text-left truncate mt-1 w-40">
          {product.title}
        </h1>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {product.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img
          src={product.image}
          alt="Product Image"
          className="h-full w-full"
        />
      </div>
      <div className="flex justify-between items-center w-full mt-5">
        <p className="text-green-600 font-semibold">${product.price}</p>
        <div
          className="items-center hidden group-hover:flex"
          onClick={handleWishlistClick}
          aria-label={isProductInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <span className="flex justify-center items-center w-8 h-8 bg-white rounded-full">
            <AiOutlineHeart size={20} color={isProductInWishlist ? 'red' : 'black'} />
          </span>
        </div>
        {isProductInCart ? (
          <button
            className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700"
            onClick={removeFromCart}
            aria-label="Remove from cart"
          >
            Remove Item
          </button>
        ) : (
          <button
            className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700"
            onClick={addToCart}
            aria-label="Add to cart"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
