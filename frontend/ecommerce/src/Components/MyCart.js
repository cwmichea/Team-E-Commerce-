import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../Components/CartContext';

const MyCart = () => {
    const { cartItems } = useContext(CartContext);
    return(
        <div>
            <h2>My Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                {cartItems.map((item) => (
                    <li key={item.productId}>
                    {item.name} - Qty: {item.quantity}
                    </li>
                ))}
                </ul>
            )}
        </div>

    )
}


export default MyCart