// src/hooks/useClickMessage.js
import { useState, useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import { useLanguage } from '../Components/LanguageContext';
import pageScript from '../Objects/Script';

export default function useClickMessage() {
    // Kezare: visibility of promp message to confirm item added to cart
    const [prompMessage, setPrompMessage] = useState(false);
    // Kezare: position of the message in function of button clicked
    const [prompPosition, setPrompPosition] = useState({ top: 0, left: 0 });
    // Kezare: set dynamic text in confirmation message
    const [prompText, setPrompText] = useState('');
    // Kezare: control rendering of the promp message
    const [showPromp, setShowPromp] = useState(false);

    // Kezare: function to add items to cart
    const { addToCart } = useContext(CartContext);
    // Kezare: get current language
    const { language } = useLanguage();

    const triggerClickMessage = (e, item) => {
        // Kezare: calculate where to position the UI element (confirmation message)
        const { top: btnTop, left: btnLeft, width } = e.target.getBoundingClientRect();

        const padding = 40; // Kezare: space between message and button
        const messageWidth = 100; // Kezare: width of the floating confirmation message

        const fitsRight = btnLeft + width + messageWidth + padding < window.innerWidth;
        // Kezare: check if there’s space to show message on the right of button

        const left = fitsRight
            ? btnLeft + window.scrollX + width - padding // Kezare: if it fits, position it to the right
            : btnLeft + window.scrollX - messageWidth - padding; // Kezare: otherwise, position it to the left

        const top = btnTop + window.scrollY - padding; // Kezare: place above the button

        addToCart(item); // Kezare: add selected item to the cart

        setPrompPosition({ top, left }); // Kezare: set message's position
        setPrompText(`"${item.name}" ${pageScript[language].added}`); // Kezare: message text with multilingual support
        setShowPromp(true);
        setPrompMessage(false); // Kezare: make message invisible initially

        // Kezare: double RAF for triggering entrance animation smoothly
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setPrompMessage(true));
        });

        setTimeout(() => {
            setPrompMessage(false); // Kezare: exit animation
            setTimeout(() => setShowPromp(false), 500); // Kezare: unmount after animation
        }, 2000); // Kezare: hide message after 2 seconds
    };

    return {
        prompMessage,
        prompPosition,
        prompText,
        showPromp,
        triggerClickMessage,
    };
}
