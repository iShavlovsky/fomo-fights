import { ReactNode, useEffect, useRef, useState } from 'react';

import styles from './dropdown.module.css';

interface DropdownOption {
    type: 'button' | 'link';
    label: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    options: DropdownOption[];
    ddTitle?: ReactNode;
}

const Dropdown = ({ options, ddTitle }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleOutsideClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleOptionClick = (option: DropdownOption) => {
        if (option.type === 'button' && option.onClick) {
            option.onClick();
        }

        setIsOpen(false);
    };

    return (
        <div ref={dropdownRef} className={styles.dropdown}>
            <button className={styles.dropdownToggle} onClick={() => setIsOpen(!isOpen)}>
                {ddTitle}
            </button>
            {isOpen && (
                <ul className={styles.dropdownMenu}>
                    {options.map((option, index) => (
                        <li key={index} className={styles.dropdownItem}>
                            {option.type === 'button'
                                ? (
                                        <button onClick={() => handleOptionClick(option)}>{option.label}</button>
                                    )
                                : (
                                        <a href={option.href} target="_blank" rel="noopener noreferrer">
                                            {option.label}
                                        </a>
                                    )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
