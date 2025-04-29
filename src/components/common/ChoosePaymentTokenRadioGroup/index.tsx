import React from 'react';
import styles from './index.module.css';

interface TokenOption {
    value: string;
    mainIcon: React.ReactNode;
    smallIcon?: React.ReactNode;
    title: string;
    subtitle: string;
    balance?: string;
    fiatEquivalent?: string;
}

interface ChoosePaymentTokenRadioGroupProps {
    options: TokenOption[];
    name: string;
    selectedValue?: string;
    onChange: (value: string) => void;
    className?: string;
}

const ChoosePaymentTokenRadioGroup = ({
                                          options,
                                          name,
                                          selectedValue,
                                          onChange,
                                          className = '',
                                      }: ChoosePaymentTokenRadioGroupProps) => {
    const handleChange = (value: string) => {
        onChange(value);
    };

    return (
        <div className={`flex flex-col gap-4px ${className}`} role="radiogroup">
            {options.map((option) => (
                <label
                    key={option.value}
                    className={`${styles.tokenOption} ${
                        selectedValue === option.value ? styles.selected : ''
                    }`}
                >
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={() => handleChange(option.value)}
                        className={styles.hiddenInput}
                    />

                    <div className={styles.iconContainer}>
                        {option.mainIcon}
                        {option.smallIcon && (
                            <div className={styles.smallIcon}>{option.smallIcon}</div>
                        )}
                    </div>

                    <div className={'w-full flex flex-col gap-4px'}>
                        <div className={'flex gap-8px body-s-2 justify-between'}>
                            <p>{option.title}</p>
                            <p>{option.fiatEquivalent ?? '$0.00'}</p>

                        </div>
                        <div className={'flex gap-8px body-xs-1 justify-between'}>
                            <p>{option.subtitle}</p>
                            <p>{option.balance ?? '0.00'}{' '}{option.subtitle}</p>
                        </div>
                    </div>
                </label>
            ))}
        </div>
    );
};

export default ChoosePaymentTokenRadioGroup;