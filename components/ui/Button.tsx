import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary' | 'outline';
    size: 'sm' | 'md' | 'lg' | 'icon';
    className?: string;
    children: ReactNode;
}

export default function Button({ variant, size ,className = '', children, ...props }: ButtonProps) {
    const baseStyle = "text-center flex items-center justify-center space-x-2 transition-colors duration-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
    const sizeStyle = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        icon: "p-2",
    }
    const variantStyle = {
        primary: "bg-blue-500 text-gray-900",
        secondary: "bg-white text-blue-500",
        outline: "bg-transparent text-white border border-gray-500",
    }
    return (
        <button  className={`${baseStyle} ${sizeStyle[size]} ${variantStyle[variant]} ${className}`} {...props}>
            {children}
        </button>
    )
}