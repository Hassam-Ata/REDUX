import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/cart/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(remove(product.id));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div className="cartCard" key={product.id}>
            <img src={product.image} alt="" />
            <div>{product.title}</div>
            <div>{product.price}</div>

            <button
              className="btn"
              onClick={() => {
                handleRemove(product);
              }}
            >
              Remove from cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
