import React from "react";
import { toast } from "react-toastify";
import { useCart } from "@/contexts/CartContext";

const AddToCartButton = ({
  productId,
  quantity = 1,
  className = "",
  style = {},
  children,
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    try {
      await addToCart(productId, quantity);
      toast.success("Product added to cart successfully!");
    } catch (error) {
      toast.error("Failed to add product to cart. Please try again.");
    }
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
