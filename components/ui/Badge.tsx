import { HTMLAttributes, ReactNode } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode
    className?: string
}

export function Badge({ children, className = '', ...props }: BadgeProps) {
    return (
        <span 
            className={`
                inline-flex items-center px-2.5 py-0.5 rounded-full 
                text-xs font-medium transition-colors duration-200
                ${className}
            `} 
            {...props}
        >
            {children}
        </span>
    )
}