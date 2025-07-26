import React from 'react';
import styled from 'styled-components';

export default function Promp({ top, left, visible, text }) {
    return (
        <StyledPromp top={top} left={left} visible={visible}>
        {text}
        </StyledPromp>
    );
}

const StyledPromp = styled.div`
    position: absolute;
    top: ${({ top }) => `${top}px`}; // Kezare: vertical position of message
    // Kezare: This uses JavaScript interpolation within the CSS string.
    // ({ top/left }) => is a destructured arrow function that takes top from the props passed to <Promp />.
    // It returns the value as a string like '100px'.
    // This dynamically sets the top position of the tooltip in pixels.
    // values are props found in <Promp>
    left: ${({ left }) => `${left}px`}; // Kezare: horizontal position of message
    background-color: indigo;
    color: white;
    padding: 8px 12px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transform: ${({ visible }) =>
    visible ? 'translateX(0)' : 'translateX(50px)'};
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    z-index: 1000;
    white-space: nowrap;
`;