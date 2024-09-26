import React, { type ReactNode } from 'react';

import styles from './Button.module.css';

type ButtonType = 'primary' | 'secondary' | 'secondary2' | 'default';

interface BaseButtonProps {
    type?: ButtonType;
    href?: string;
    children: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

const BaseButton = ({ type = 'primary', href, children, onClick, className }: BaseButtonProps) => {
    const buttonClass = `${styles.buttonSpan}`;
    const wrapperClass = `${styles.buttonWrapper} ${href ? styles.link : ''} ${styles[type]} ${className}`;

    return (
        href
            ? (
                    <a href={href} aria-label={href} target="_blank" className={wrapperClass} rel="noreferrer">
                        <span className={buttonClass}>{children}</span>
                    </a>
                )
            : (
                    <button onClick={onClick} type="button" className={wrapperClass}>
                        <span className={buttonClass}>{children}</span>
                    </button>
                )
    );
};

export default BaseButton;
