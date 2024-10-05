import { useState } from 'react';

import styles from './index.module.css';

import RadioButtonGroup from '@components/common/RadioButtonGroup';
import BNBIcon20 from '@icon/bnb-20.svg';
import CARDIcon20 from '@icon/card-20.svg';
import ETHIcon16 from '@icon/eth-16.svg';
import EthereumIcon20 from '@icon/ethereum-20.svg';
import SOLIcon20 from '@icon/sol-20.svg';
import USDCIcon from '@icon/usdc-16.svg';
import USDTIcon from '@icon/usdt-16.svg';

const BalanceRadioBtns = () => {
    const options1 = [
        { label: 'ETH', value: 'eth', icon: <EthereumIcon20 /> },
        { label: 'BNB', value: 'bnb', icon: <BNBIcon20 /> },
        { label: 'SOL', value: 'sol', icon: <SOLIcon20 /> },
        { label: 'CARD', value: 'card', icon: <CARDIcon20 /> }
    ];

    const [currencyState, setCurrencyState] = useState([
        { label: 'ETH', value: 'eth', icon: <ETHIcon16 /> },
        { label: 'USDT', value: 'USDT', icon: <USDTIcon /> },
        { label: 'USDC', value: 'USDC', icon: <USDCIcon /> }
    ]);

    const handleRadioChange = (value: string | number) => {
        console.log('Selected:', value);
        switch (value) {
            case 'eth':
                setCurrencyState([
                    { label: 'ETH', value: 'ETH', icon: <ETHIcon16 /> },
                    { label: 'USDT', value: 'USDT', icon: <USDTIcon /> },
                    { label: 'USDC', value: 'USDC', icon: <USDCIcon /> }
                ]);
                break;
            case 'bnb':
                setCurrencyState([
                    { label: 'BNB', value: 'BNB', icon: <BNBIcon20 /> },
                    { label: 'USDT', value: 'USDT', icon: <USDTIcon /> }
                ]);
                break;
            case 'sol':
                setCurrencyState([
                    { label: 'SOL', value: 'sol', icon: <SOLIcon20 /> },
                    { label: 'USDC', value: 'USDC', icon: <USDCIcon /> }
                ]);
                break;
            case 'card':
                setCurrencyState([
                    { label: 'CARD', value: 'CARD', icon: <CARDIcon20 /> },
                    { label: 'USDT', value: 'USDT', icon: <USDTIcon /> },
                    { label: 'USDC', value: 'USDC', icon: <USDCIcon /> }
                ]);
                break;
            default:
                setCurrencyState([]);
        }
    };

    return (
        <div className={`${styles.stakingFormRadioBtnW}`}>
            <RadioButtonGroup
                options={options1}
                name="sourceOfFunds"
                onChange={(value) => handleRadioChange(value)}
                typeStyle="style2"
            />

            <RadioButtonGroup
                className={`${styles.stakingFormSecondRadioBtnW}`}
                options={currencyState}
                name="currency"
                onChange={(value) => console.log(value)}
                typeStyle="style1"
            />
        </div>
    );
};

export default BalanceRadioBtns;
