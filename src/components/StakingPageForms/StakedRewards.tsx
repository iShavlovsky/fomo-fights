import styles from './index.module.css';

import ArrowIcon from '@icon/arrow-12.svg';

const StakedBalance = () => {
    return (
        <div className={styles.stakedWrapper}>
            <div className={styles.stakeContainer}>
                <h3 className="body-s-2 text-color-monochrome-8">
                    Estimated Rewards
                </h3>
                <div className="flex gap-8px justify-between items-center mt-12">
                    <p className="body-m-2 text-color-monochrome-9">
                        72%
                    </p>
                    <p className="body-xs-1 text-color-monochrome-7-6">
                        p/a
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-8px mt-16">
                <div className="flex gap-8px items-center">
                    <ArrowIcon />
                    <p className="body-s-2 text-color-monochrome-8">
                        Rewards rate is dynamic
                    </p>
                </div>
                <div className="flex gap-8px items-center">
                    <ArrowIcon />
                    <p className="body-s-2 text-color-monochrome-8">
                        Monthly = Rewards % / 12
                    </p>
                </div>
                <div className="flex gap-8px items-center">
                    <ArrowIcon />
                    <p className="body-s-2 text-color-monochrome-8">
                        Daily = Rewards % / 365
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StakedBalance;
