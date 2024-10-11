import { useState } from 'react';

import styles from './index.module.css';

import RadioButtonGroup from '@components/common/RadioButtonGroup';
import BNBIcon from '@icon/bnb-16.svg';
import CARDIcon16 from '@icon/card-16.svg';
import ETHIcon16 from '@icon/eth-16.svg';
import EthereumIcon from '@icon/ethereum-16.svg';
import SOLIcon16 from '@icon/sol-16.svg';
import USDCIcon from '@icon/usdc-16.svg';
import USDTIcon from '@icon/usdt-16.svg';

const BalanceRadioBtns = () => {
    const options1 = [
        { label: 'ETH', value: 'eth', icon: <EthereumIcon /> },
        { label: 'BNB', value: 'bnb', icon: <BNBIcon /> },
        { label: 'SOL', value: 'sol', icon: <SOLIcon16 /> },
        { label: 'CARD', value: 'card', icon: <CARDIcon16 /> }
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
                    { label: 'BNB', value: 'BNB', icon: <BNBIcon /> },
                    { label: 'USDT', value: 'USDT', icon: <USDTIcon /> }
                ]);
                break;
            case 'sol':
                setCurrencyState([
                    { label: 'SOL', value: 'sol', icon: <SOLIcon16 /> },
                    { label: 'USDC', value: 'USDC', icon: <USDCIcon /> }
                ]);
                break;
            case 'card':
                setCurrencyState([
                    { label: 'CARD', value: 'CARD', icon: <CARDIcon16 /> },
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
