import styles from './index.module.css';

import FistIcon from '@icon/fist-20.svg';

const StakedBalance = () => {
    return (
        <div className={styles.stakedWrapper}>
            <div className={styles.stakeContainer}>
                <h3 className="body-s-2 text-color-monochrome-8">
                    Staked Balance
                </h3>
                <div className="flex gap-8px mt-12">
                    <FistIcon />
                    <p className="body-m-2 text-color-monochrome-5">0.00</p>
                </div>
            </div>
            <div className={styles.stakeContainer}>
                <h3 className="body-s-2 text-color-monochrome-8">
                    Your Stakeable
                </h3>
                <div className="flex gap-8px mt-12">
                    <FistIcon />
                    <p className="body-m-2 text-color-monochrome-5">0.00</p>
                </div>
            </div>
        </div>
    );
};

export default StakedBalance;
