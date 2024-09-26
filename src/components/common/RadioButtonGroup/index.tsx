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
}

const RadioButtonGroup = <T extends string | number >({
    options,
    name,
    onChange,
    defaultValue
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
        <div className={styles.radioButtonGroup}>
            {options.map((option) => (
                <label
                    key={String(option.value)}
                    className={`${styles.radioButton} ${selectedValue === option.value ? styles.selected : ''}`}
                >
                    <input
                        type="radio"
                        name={name}
                        value={String(option.value)}
                        checked={selectedValue === option.value}
                        onChange={() => handleChange(option.value)}
                    />
                    <figure className={styles.radioIcon}>
                        {option.icon}
                    </figure>
                    <span className={`${styles.radioLabel}, body-s`}>{option.label}</span>
                    <span
                        className={`${styles.customRadio} ${selectedValue === option.value ? styles.checked : ''}`}
                    />
                </label>
            ))}
        </div>
    );
};

export default React.memo(RadioButtonGroup);
RadioButtonGroup.whyDidYouRender = true;
