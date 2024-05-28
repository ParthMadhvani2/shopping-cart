import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { items: cart } = useSelector((state) => state.cart);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="cart-container mb-10">
      {cart.length > 0 ? (
        <div className="cart-content flex flex-row justify-center max-w-[1300px] mx-auto gap-x-5">
          {/* Cart Items */}
          <div className="cart-items w-[60%] flex flex-col p-2">
            {cart.map((cartItem, index) => (
              <CartItem item={cartItem} key={cartItem.id} itemIndex={index} />
            ))}
          </div>

          {/* Summary */}
          <div className="cart-summary w-[40%] mt-5 flex flex-col">
            <div className="summary-details flex flex-col h-full justify-between p-5 gap-5 my-14">
              <div className="summary-header flex flex-col gap-5">
                <div className="title font-semibold text-xl text-green-800">
                  Your Cart
                </div>
                <div className="subtitle font-semibold text-5xl text-green-700 -mt-5">
                  Summary
                </div>
                <p className="total-items text-xl">
                  <span className="text-gray-700 font-semibold">
                    Total Items: {cart.length}
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
              <button className="checkout-button bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl mr-10">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart min-h-[80vh] flex flex-col justify-center items-center">
          <h1 className="empty-cart-message text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <NavLink to="/">
            <button className="shop-now-button uppercase bg-green-600 p-3 px-10 rounded-lg text-white mt-6 font-semibold tracking-wider hover:bg-purple-50 duration-300 transition-all ease-in hover:text-green-600 border-2 border-green-600">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
