import styles from './index.module.css';

import RadioButtonGroup from '@components/common/RadioButtonGroup';
import ETHIcon from '@icon/eth-16.svg';
import USDCIcon from '@icon/usdc-16.svg';
import USDTIcon from '@icon/usdt-16.svg';

const BalanceRadioBtns = () => {
    const options = [
        { label: 'ETH', value: 'eth', icon: <ETHIcon /> },
        { label: 'BTC', value: 'btc', icon: <USDTIcon /> },
        { label: 'SOL', value: 'sol', icon: <USDCIcon /> }
    ];

    const handleRadioChange = (value: string | number) => {
        console.log('Selected:', value);
    };
    return (
        <div className={`${styles.stakingFormRadioBtnW}`}>
            <RadioButtonGroup
                options={options}
                name="currency"
                onChange={handleRadioChange}
            />

            <RadioButtonGroup
                className={`${styles.stakingFormSecondRadioBtnW}`}
                options={options}
                name="currency"
                onChange={handleRadioChange}
            />
        </div>
    );
};

export default BalanceRadioBtns;
