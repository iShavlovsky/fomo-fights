import React, { type ReactNode, useCallback, useEffect, useState } from 'react';

import useLifeLogger from '@/hooks/useLifeLogger.ts';

import styles from './RadioButtonGroup.module.css';

interface RadioButtonOption<T extends string | number> {
    label: string;
    value: T;
    icon: ReactNode;
}

interface RadioButtonGroupProp<T extends string | number> {
    options: RadioButtonOption<T>[];
    name: string;
    onChange: (value: T) => void;
    defaultValue?: T;
    className?: string;
    typeStyle: 'style1' | 'style2';
}

const RadioButtonGroup = <T extends string | number>({
    options,
    name,
    onChange,
    defaultValue,
    className,
    typeStyle
}: RadioButtonGroupProp<T>) => {
    const [selectedValue, setSelectedValue] = useState<T>(defaultValue || options[0].value);

    useEffect(() => {
        if (defaultValue) {
            setSelectedValue(defaultValue);
        }
    }, [defaultValue]);

    const handleChange = useCallback(
        (value: T) => {
            setSelectedValue(value);
            onChange(value);
        },
        [onChange]
    );

    useLifeLogger({
        name: 'RadioButtonGroup', visible: false, data: {
            options,
            name,
            onChange,
            defaultValue
        }
    });

    return (
        <div className={`${styles.radioButtonGroup} ${className}`}>
            {options.map((option) => (
                <label
                    key={String(option.value)}
                    className={`${typeStyle === 'style1' ? styles.radioButton1 : styles.radioButton2} ${selectedValue === option.value ? styles.selected : ''}`}
                >
                    <input
                        type="radio"
                        name={name}
                        value={String(option.value)}
                        checked={selectedValue === option.value}
                        onChange={() => handleChange(option.value)}
                    />
                    <span className={styles.customRadioLabel}>
                        <figure className={styles.radioIcon}>
                            {option.icon}
                        </figure>
                        <span className="body-s-1">{option.label}</span>
                    </span>
                    <span
                        className={`${styles.customRadio} ${selectedValue === option.value ? styles.checked : ''}`}
                    />
                </label>
            ))}
        </div>
    );
};

export default React.memo(RadioButtonGroup);
