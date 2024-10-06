import styles from './index.module.css';

import BaseButton from '@components/common/Button/baseButton.tsx';
import FistIcon from '@icon/fist-20.svg';

const StakedBalance = () => {
    return (
        <div className={styles.stakedWrapper}>
            <div className={styles.stakeContainer}>

                <h3 className="body-s-2 text-color-monochrome-8">
                    Current Rewards
                </h3>

                <div className="flex gap-8px mt-12">
                    <p className="body-m-2 text-color-monochrome-9">
                        71.53
                    </p>
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
                onClick={() => console.log('Claim Rewards')}
                type="secondary"
                aria-controls="rlaim-rewards"
                className="w-full mt-12 text-color-monochrome-8"
            >
                Claim Rewards
            </BaseButton>
        </div>
    );
};

export default StakedBalance;
