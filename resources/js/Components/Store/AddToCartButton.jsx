import React from "react";
import { toast } from "react-toastify";
import axios from "axios";

const AddToCartButton = ({
  productId,
  quantity = 1,
  className = "",
  style = {},
  children,
}) => {
  const handleAddToCart = () => {
    axios
      .post("add-to-cart", {
        product_id: productId,
        qty: quantity,
      })
      .then((response) => {
        toast.success("Product added to cart successfully!");
      })
      .catch((error) => {
        toast.error("Failed to add product to cart. Please try again.");
      });
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className={` ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default AddToCartButton;
