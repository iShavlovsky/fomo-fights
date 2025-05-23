import {type ReactNode, useRef, useState, RefObject} from 'react';

import styles from './index.module.css';

import useClickOutside from '@hooks/useClickOutside.ts';

export type DropdownOption = {
    label: ReactNode;
    href?: string;
    active?: 'disabled';
    onClick?: () => void;
};

export type DropdownOptionSelected = DropdownOption & {
    abbreviation: string;
};

interface DropdownPropsMain {
    ddTitle: string;
    ddIcon?: ReactNode;
    ddPortalTop?: ReactNode;
    ddPortalBottom?: ReactNode;
    ddToggleIcon?: ReactNode;
    autoClose?: boolean;
    ulClassName?: string;
    position?: 'right' | 'left';
    onSelect?: (option: DropdownOption | DropdownOptionSelected) => void;
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

function Dropdown({
                      selectedLabel,
                      options,
                      ddIcon,
                      ddTitle,
                      ddToggleIcon,
                      ddPortalTop,
                      ulClassName,
                      ddPortalBottom,
                      autoClose = true,
                      position = 'right',
                      onSelect
                  }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [label, setSelectedLabel] = useState<string>(ddTitle);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useClickOutside(dropdownRef as RefObject<HTMLElement>, () => setIsOpen(false));

    const handleOptionClick = (option: DropdownOption | DropdownOptionSelected) => {
        if (!option.href && option.onClick) {
            option.onClick();
            if (selectedLabel && 'abbreviation' in option && label !== option.abbreviation) {
                setSelectedLabel(option.abbreviation);
            }
        }

        if (onSelect) {
            onSelect(option);
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
                <span className="body-m-1">{label}</span>
                {ddToggleIcon
                    ? (
                        <span
                            className={`${styles.dropdownToggleIcon} ${isOpen ? styles.active : ''}`}
                        >
                                {ddToggleIcon}
                            </span>
                    )
                    : null}
            </button>
            <div className={`${styles.dropdownMenuWrapper} ${isOpen ? styles.open : ''} ${styles[position]}`}>
                {isOpen && (
                    <ul
                        id="dropdown-list"
                        className={`${styles.dropdownMenu} ${ulClassName}`}
                        role="listbox"
                        aria-labelledby="dropdown-button"
                    >

                        {ddPortalTop
                            ? (
                                <li>{ddPortalTop}</li>
                            )
                            : null}
                        {options.map((option, index) => (
                            <li
                                onClick={() => {if (option.active === 'disabled') handleOptionClick(option)}}
                                key={index}
                                datatype={option.active === 'disabled' ? 'disabled' : 'active'}
                                className={styles.dropdownLi}
                                role="option"
                                aria-selected={label === (option as DropdownOptionSelected).abbreviation}
                            >
                                {option.href
                                    ? (
                                        <a
                                            className=""
                                            href={option.href}
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

                        {ddPortalBottom
                            ? (
                                <li>{ddPortalBottom}</li>
                            )
                            : null}
                    </ul>

                )}
            </div>
        </div>
    );
}

export default Dropdown;
