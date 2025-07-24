import React, { useState } from 'react';
import styled from 'styled-components';
import mandalas from '../data/mandalas.json'; 
import { useContext } from 'react';
import { CartContext } from '../Components/CartContext';

const Testing = () => {
    const [showToast, setShowToast] = useState(false);
    const [toastPosition, setToastPosition] = useState({ top: 0, left: 0 });
    const [toastText, setToastText] = useState('');
    const { addToCart, cartItems } = useContext(CartContext);

    const handleAddToCart = (e, product) => {
        const rect = e.target.getBoundingClientRect();

        setToastPosition({
            top: rect.top + window.scrollY - 40,
            left: rect.left + window.scrollX + rect.width + 10,
        });

    //     setShopCart(prevCart => {
    //         const currentItem = prevCart[product.productId];
    //         return {
    //         ...prevCart,
    //         [product.productId]: {
    //             name: product.name,
    //             price: product.price,
    //             quantity: currentItem ? currentItem.quantity + 1 : 1
    //         }
    //     };
    // });

    addToCart(product);

    setToastText(`Added "${product.name}" to cart!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
    };
    console.log(cartItems)

    return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mandalas.map((product) => (
            <div
            key={product.productId}
            className="p-4 border rounded shadow flex flex-col items-center"
            >
            <h2 className="text-lg font-bold">{product.name}</h2>
            <button
                onClick={(e) => handleAddToCart(e, product)}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Add to Cart
            </button>
            </div>
            ))}
        </div>

        {showToast && (
        <StyledDiv
            top={toastPosition.top}
            left={toastPosition.left}
            visible={showToast}
        >
            {toastText}
        </StyledDiv>
        )}
    </div>
    );
};

const StyledDiv = styled.div`
    position: absolute;
    top: ${({ top }) => `${top}px`};
    left: ${({ left }) => `${left}px`};
    background-color: #457b9d;
    color: white;
    padding: 8px 12px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(-10px)')};
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 1000;
    white-space: nowrap;
`;

export default Testing;
