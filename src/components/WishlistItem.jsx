import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import WishlistItem from "../components/WishlistItem";
import { removeFromWishlist } from "../redux/Slices/cartSlice";

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(wishlist.reduce((acc, curr) => acc + curr.price, 0));
  }, [wishlist]);

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="wishlist-container mb-10">
      {wishlist.length > 0 ? (
        <div className="wishlist-content flex flex-row justify-center max-w-[1300px] mx-auto gap-x-5">
          {/* Wishlist Items */}
          <div className="wishlist-items w-[60%] flex flex-col p-2">
            {wishlist.map((wishlistItem, index) => (
              <WishlistItem 
                item={wishlistItem} 
                key={wishlistItem.id} 
                itemIndex={index} 
                onRemove={handleRemoveFromWishlist} 
              />
            ))}
          </div>

          {/* Summary */}
          <div className="wishlist-summary w-[40%] mt-5 flex flex-col">
            <div className="summary-details flex flex-col h-full justify-between p-5 gap-5 my-14">
              <div className="summary-header flex flex-col gap-5">
                <div className="title font-semibold text-xl text-blue-800">
                  Your Wishlist
                </div>
                <div className="subtitle font-semibold text-5xl text-blue-700 -mt-5">
                  Summary
                </div>
                <p className="total-items text-xl">
                  <span className="text-gray-700 font-semibold">
                    Total Items: {wishlist.length}
                  </span>
                </p>
              </div>
            </div>
            <div className="total-amount flex flex-col">
              <p className="text-xl font-bold">
                <span className="text-gray-700 font-semibold">
                  Total Amount:
                </span>{" "}
                ${amount}
              </p>
              <NavLink to="/checkout">
                <button className="checkout-button bg-blue-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-blue-600 font-bold hover:text-blue-700 p-3 text-xl mr-10">
                  Move to Cart
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-wishlist min-h-[80vh] flex flex-col justify-center items-center">
          <h1 className="empty-wishlist-message text-gray-700 font-semibold text-xl mb-2">
            Your wishlist is empty!
          </h1>
          <NavLink to="/">
            <button className="shop-now-button uppercase bg-blue-600 p-3 px-10 rounded-lg text-white mt-6 font-semibold tracking-wider hover:bg-purple-50 duration-300 transition-all ease-in hover:text-blue-600 border-2 border-blue-600">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
