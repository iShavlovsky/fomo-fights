import React from 'react';
import styles from './Button.module.css';

type ButtonType = 'primary' | 'secondary' | 'secondary2';

interface BaseButtonProps {
    type?: ButtonType;
    href?: string;
    children: React.ReactNode;
}

const Button = ({type = 'primary', href, children}: BaseButtonProps) => {
    const buttonClass = `${styles.buttonSpan} ${styles[type]}`;
    const wrapperClass = `${styles.buttonWrapper} ${href ? styles.link : ''}`;

    return (
        href ? (
            <a href={href} aria-label={href} target='_blank' className={wrapperClass}>
                <span className={buttonClass}>{children}</span>
            </a>
        ) : (
            <button type="button" className={wrapperClass}>
                <span className={buttonClass}>{children}</span>
            </button>
        )
    );
};


export default Button;
