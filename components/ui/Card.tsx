import { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    className?: string
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    className?: string
}

export function Card({ className = '', children, ...props }: CardProps) {
    return (
        <div className={`rounded-lg ${className}`} {...props}>
            {children}
        </div>
    )
}

export function CardContent({ className = '', children, ...props }: CardContentProps) {
    return (
        <div className={`${className}`} {...props}>
            {children}
        </div>
    )
}