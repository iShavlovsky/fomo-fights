import { ReactNode, useRef, useState } from 'react';

import styles from './dropdown.module.css';

import useClickOutside from '@hooks/useClickOutside.ts';

export type DropdownOption = {
    label: ReactNode;
    onClick?: () => void;
    href?: string;
};

export type DropdownOptionSelected = {
    abbreviation: string;
    label: ReactNode;
    onClick?: () => void;
    href?: string;
};

interface DropdownProps {
    ddTitle: string;
    ddIcon?: ReactNode;
    ddToggleIcon?: ReactNode;
    autoClose?: boolean;
}

export type DropdownPropsSelected = DropdownProps & {
    selectedLabel: true;
    options: DropdownOptionSelected[];
};

export type DropdownPropsDefault = DropdownProps & {
    selectedLabel: false;
    options: DropdownOption[];
};

const Dropdown = ({ selectedLabel, options, ddIcon, ddTitle, ddToggleIcon, autoClose = true }: DropdownPropsDefault | DropdownPropsSelected) => {
    const [isOpen, setIsOpen] = useState(false);
    const [label, setSelectedLabel] = useState<string>(ddTitle);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useClickOutside(dropdownRef, () => setIsOpen(false));

    const handleOptionClick = <T extends DropdownOption | DropdownOptionSelected > (option: T) => {
        if (!option.href && option.onClick) {
            option.onClick();
            if (selectedLabel) {
                const ab = option as DropdownOptionSelected;
                setSelectedLabel(ab.abbreviation);
            }
        }
        if (autoClose) {
            setIsOpen(false);
        }
    };

    return (
        <div ref={dropdownRef} className={styles.dropdown}>
            <button className={styles.dropdownToggle} onClick={() => setIsOpen(!isOpen)}>
                {ddIcon ? <span>{ddIcon}</span> : null}
                <span className="body-m">{label}</span>
                {ddToggleIcon ? <span className={`${styles.dropdownToggleIcon} ${isOpen ? '' : styles.active}`}>{ddToggleIcon}</span> : null}
            </button>
            {isOpen && (
                <ul className={styles.dropdownMenu}>
                    {options.map((option, index) => (
                        <li key={index} className={styles.dropdownItem}>
                            {option.href
                                ? (
                                        <a href={option.href} target="_blank" rel="noopener noreferrer">
                                            {option.label}
                                        </a>
                                    )
                                : (
                                        <button onClick={() => handleOptionClick(option)}>{option.label}</button>
                                    )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
