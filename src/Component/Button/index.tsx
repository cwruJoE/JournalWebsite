import React from 'react';
import { DEFAULT_BUTTON, OUTLINE_BUTTON, PLAIN_BUTTON,KEYWORD_BUTTON } from './styles'; // Import the style constants

interface ButtonProps {
    label: string;
    onClick: () => void;
    variant: 'outline' | 'plain' | 'default' | 'keyword' ; // Define the variant type
    className?: string; // Optional className to extend or override styles
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'default', className }) => {
    // Map the variant to the corresponding style constant
    const getButtonStyle = (variant: string) => {
        switch (variant) {
            case 'keyword':
                return KEYWORD_BUTTON;
            case 'outline':
                return OUTLINE_BUTTON;
            case 'plain':
                return PLAIN_BUTTON;
            case 'default':
            default:
                return DEFAULT_BUTTON;
        }
    };

    return (
        <button
            onClick={onClick}
            className={`${getButtonStyle(variant)} ${className || ''}`}
        >
            {label}
        </button>
    );
};

export default Button;