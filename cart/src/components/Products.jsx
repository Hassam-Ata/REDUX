import { useEffect, useState } from "react";
import { add } from "../features/cart/cartSlice";
import { fetchProducts } from "../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES } from "../features/product/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong</h2>;
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handleAdd(product)}>
              {" "}
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
