import { ReactNode, useRef, useState } from 'react';

import styles from './dropdown.module.css';

import useClickOutside from '@hooks/useClickOutside.ts';

export type DropdownOption = {
    label: ReactNode;
    href?: string;
    onClick?: () => void;
};

export type DropdownOptionSelected = DropdownOption & {
    abbreviation: string;
};

interface DropdownPropsMain {
    ddTitle: string;
    ddIcon?: ReactNode;
    ddToggleIcon?: ReactNode;
    autoClose?: boolean;
}

type DropdownPropsSelected = DropdownPropsMain & {
    selectedLabel: true;
    options: DropdownOptionSelected[];
};

type DropdownPropsDefault = DropdownPropsMain & {
    selectedLabel: false;
    options: DropdownOption[];
};

export type DropdownProps = DropdownPropsSelected | DropdownPropsDefault;

function Dropdown({ selectedLabel, options, ddIcon, ddTitle, ddToggleIcon, autoClose = true }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [label, setSelectedLabel] = useState<string>(ddTitle);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useClickOutside(dropdownRef, () => setIsOpen(false));

    const handleOptionClick = (option: DropdownOption | DropdownOptionSelected) => {
        if (!option.href && option.onClick) {
            option.onClick();
            if (selectedLabel && 'abbreviation' in option && label !== option.abbreviation) {
                setSelectedLabel(option.abbreviation);
            }
        }

        if (autoClose) {
            setIsOpen(false);
        }
    };

    return (
        <div ref={dropdownRef} className={styles.dropdown}>
            <button
                className={styles.dropdownToggle}
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-controls="dropdown-list"
                id="dropdown-button"
            >
                {ddIcon ? <span>{ddIcon}</span> : null}
                <span className="body-m">{label}</span>
                {ddToggleIcon
                    ? (
                            <span
                                className={`${styles.dropdownToggleIcon} ${isOpen ? '' : styles.active}`}
                            >
                                {ddToggleIcon}
                            </span>
                        )
                    : null}
            </button>
            <div className={`${styles.dropdownMenuWrapper} ${isOpen ? styles.open : ''}`}>
                {isOpen && (
                    <ul
                        id="dropdown-list"
                        className={styles.dropdownMenu}
                        role="listbox"
                        aria-labelledby="dropdown-button"
                    >
                        {options.map((option, index) => (
                            <li
                                onClick={() => handleOptionClick(option)}
                                key={index}
                                className={styles.dropdownItem}
                                role="option"
                                aria-selected={label === (option as DropdownOptionSelected).abbreviation}
                            >
                                {option.href
                                    ? (
                                            <a
                                                href={option.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {option.label}
                                            </a>
                                        )
                                    : (
                                            <>
                                                {option.label}
                                            </>
                                        )}
                            </li>
                        ))}
                    </ul>

                )}
            </div>
        </div>
    );
}

export default Dropdown;
