import React, {useState, useRef, useEffect} from 'react';
import styles from './index.module.css';

interface CopyToClipboardButtonProps {
    textToCopy: string; // Теперь принимаем текст напрямую
    className?: string;
    copyText?: string;
    successMessage?: string;
    icon?: React.ReactNode;
}

const CopyToClipboardButton = ({
                                   textToCopy,
                                   className = '',
                                   copyText = 'Copy',
                                   successMessage = 'Copied!',
                                   icon = null,
                               }: CopyToClipboardButtonProps) => {
    const [isCopied, setIsCopied] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy.trim())
            .then(() => {
                setIsCopied(true);
                timerRef.current = setTimeout(() => setIsCopied(false), 2000);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    return (
        <div className={styles.container}>
            <button
                ref={buttonRef}
                onClick={handleCopy}
                className={`body-s-2 uppercase text-color-beige-1 ${styles.button} ${className}`}
                aria-label="Copy to clipboard"
                disabled={!textToCopy} // Кнопка неактивна, если нечего копировать
            >

                {copyText}
                {icon && <span className={styles.icon}>{icon}</span>}
            </button>

            {isCopied && (
                <div className={styles.notification}>
                    <p className={'body-xs-2'}>
                        {successMessage}
                    </p>
                </div>
            )}
        </div>
    );
};

export default CopyToClipboardButton;