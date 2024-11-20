import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    const fetchCartProducts = async () => {
        try {
            const response = await axios.get("/nav-cart-products");
            const productsArray = Object.values(response.data.cartContent);
            setCartProducts(productsArray);
            setSubtotal(response.data.subtotal);
        } catch (error) {
            console.error("Failed to fetch cart products:", error);
        }
    };

    const addToCart = async (productId, quantity = 1) => {
        try {
            await axios.post("/add-to-cart", {
                product_id: productId,
                qty: quantity,
            });
            fetchCartProducts(); // Refresh the cart
        } catch (error) {
            console.error("Failed to add to cart:", error);
        }
    };

    return (
        <CartContext.Provider
            value={{ cartProducts, subtotal, fetchCartProducts, addToCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
