import styles from './index.module.css';

import BaseButton from '@components/common/Button/baseButton.tsx';
import FistIcon from '@icon/fist-20.svg';
import InfoIcon from '@icon/info-16.svg';

const StakedBalance = () => {
    return (
        <div className={styles.stakedWrapper}>
            <div className={styles.stakeContainer}>
                <div className="flex gap-8px items-center">
                    <h3 className="body-s-2 text-color-monochrome-8">
                        % of Pool
                    </h3>
                    <div title="% of Pool info">
                        <InfoIcon />
                    </div>
                </div>
                <div className="flex gap-8px mt-12">
                    <FistIcon />
                    <p className="body-m-2 text-color-monochrome-5">0.00</p>
                </div>
            </div>
            <div className={styles.stakeContainer}>
                <h3 className="body-s-2 text-color-monochrome-8">
                    Total Staked
                </h3>
                <div className="flex gap-8px mt-12">
                    <FistIcon />
                    <p className="body-m-2 text-color-monochrome-5">0.00</p>
                </div>
            </div>

            <BaseButton
                onClick={() => console.log('Withdraw Staked')}
                type="secondary"
                aria-controls="withdraw-staked"
                className="w-full mt-12 text-color-monochrome-8"
            >
                Withdraw Staked
            </BaseButton>
        </div>
    );
};

export default StakedBalance;
