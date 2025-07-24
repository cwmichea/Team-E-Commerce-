import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    // Kezare: array to hold the items

    const addToCart = (newItemEntry) => {
    setCartItems((prevCart) => {
        // Kezare: prevCart is the cart items array
        // Kezare: newItemEntry is the new item object we attempt to add to cart

        const exists = prevCart.find((itemInCart) => itemInCart.productId === newItemEntry.productId);
        // Kezare: exists search for a previous entry in the cart by the Id. returns the object if found, else it would be undefined

        if (exists) {
            // Kezare: if there is any prevCart (exists),
            return prevCart.map((itemInCart) =>
                // Kezare: mapping to check all items in the cart,
                itemInCart.productId === newItemEntry.productId 
                // Kezare: whenever found the same as the new item, 
                ? { ...itemInCart, quantity: itemInCart.quantity + 1 } 
                // Kezare: increase its quantity +1,
                : itemInCart
                // Kezare: else, it returns the cart unchanged,
            );
        } else {
            // Kezare: add newItemEntry object with quantity = 1
            return [...prevCart, { ...newItemEntry, quantity: 1 }];
        }
        });
    };

    const value = {
        // values available for all components
        cartItems,
        // cart itself
        addToCart,
        // function to add items to cart
    };

    return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
    );
};
