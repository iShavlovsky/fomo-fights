import styles from './index.module.css';

import stylesHead from '@styles/baseBlock.module.css';

const PresaleLimit = () => {
    return (
        <div className={`${styles.stakingFormPriceW} flex flex-col gap-8px`}>
            <p className="body-s-2 text-color-monochrome-1 text-center">
                $1000 / $1 200 000
            </p>
            <div className="flex flex-col gap-4px">
                <div className={`${styles.stakingFormIndicatorW} overflow-hidden`}>
                    <div
                        className={`${stylesHead.head} ${stylesHead.headGreen}`}
                        style={{ height: '100%', width: '30%' }}
                    />
                </div>
                <div className="flex flex-row justify-between">
                    <p className="body-s-2 text-color-monochrome-2">
                        Current price:
                        {' '}
                        <span className="text-color-monochrome-1">$0.20</span>
                    </p>
                    <p className="body-s-2 text-color-monochrome-2">
                        Next price:
                        {' '}
                        <span className="text-color-red-1">$0.40</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PresaleLimit;
