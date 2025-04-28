import styles from './index.module.css';
import React from 'react';

interface InputFieldPurchaseProps {
    title: string;
    showMaxButton?: boolean;
    onMaxClick?: () => void;
    transactionToken?: React.ReactNode;
    inputValue?: string;
    onInputChange?: (value: string) => void;
    balanceAmount?: string;
    balanceToken?: string;
    errorMessage?: string;
    disabled?: boolean;
}

const InputFieldPurchase = ({
                                title,
                                showMaxButton = false,
                                onMaxClick,
                                transactionToken,
                                inputValue = "",
                                onInputChange,
                                balanceAmount,
                                balanceToken,
                                errorMessage,
                                disabled = false,
                            }: InputFieldPurchaseProps) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onInputChange?.(e.target.value);
    };

    return (
        <div className={styles.inputWrapper}>
            <div className={`flex flex-row justify-between ${styles.inputTitleWrapper}`}>
                <h3 className={'body-s-2 text-color-monochrome-8'}>{title}</h3>
                {showMaxButton && (
                    <button
                        onClick={onMaxClick}
                        className="cursor-pointer body-xs-1 text-color-pink-2"
                        type="button"
                    >
                        MAX
                    </button>
                )}
            </div>
            <div className={`flex flex-col gap-4px ${styles.inputHolder}`}>
                <div className={'flex flex-row gap-8px items-center justify-between'}>
                    <div>{transactionToken}</div>
                    <input
                        className={`${styles.stakingFormInput} body-l-2`}
                        type='number'
                        placeholder="0"
                        value={inputValue}
                        onChange={handleInputChange}
                        disabled={disabled}
                    />
                </div>

                {(balanceAmount || balanceToken || errorMessage) && (
                    <div className={'flex flex-row items-center justify-between'}>
                        {balanceAmount && (
                            <p className={'body-xs-2 text-color-monochrome-6'}>
                                Balance:
                                {' '}
                                {balanceAmount && <span>{balanceAmount}</span>}
                                {' '}
                                {balanceToken && <span>{balanceToken}</span>}
                            </p>
                        )}
                        {errorMessage && (
                            <p className={`body-xs-2 text-color-red-1 ${styles.errorMessage}`}>
                                {errorMessage}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InputFieldPurchase;