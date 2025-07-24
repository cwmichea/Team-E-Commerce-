import styled from 'styled-components';
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
    setCartItems((prev) => {
        const exists = prev.find((item) => item.productId === product.productId);
        if (exists) {
            return prev.map((item) =>
            item.productId === product.productId ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            return [...prev, { ...product, quantity: 1 }];
        }
        });
    };

    const value = {
    cartItems,
    addToCart,
    };

    return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
    );
};
