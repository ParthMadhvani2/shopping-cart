import {FcDeleteDatabase} from "react-icons"

const CartItem = ({item,itemIndex}) => {
  return (
    <div>
      <div>
        <div>
          <img/>
        </div>
        <div>
          <h1>
            {item.title}
          </h1>
          <p>{item.description}</p>
          <div>
            <p>{item.price}</p>
            <div>
              <FcDeleteDatabase/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
