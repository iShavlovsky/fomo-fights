import styles from './index.module.css';

import stylesHead from '@styles/baseBlock.module.css';

const AutorizeWindow = () => {
    return (
        <div className={`flex flex-col items-center text-center ${styles.stakingFormAutorizeWindow}`}>
            <h3 className="button-text text-color-monochrome-9">
                AUTORIZE...
            </h3>
            <div className={`mt-4 ${styles.stakingFormAutorizeProgressBar}`}>
                <div
                    className={`${styles.stakingFormAutorizeProgressItem} ${stylesHead.head} ${stylesHead.headGreen}`}
                />
                <div
                    className={`${styles.stakingFormAutorizeProgressItem} ${stylesHead.head} ${stylesHead.headGreen}`}
                />
                <div
                    className={`${styles.stakingFormAutorizeProgressItem} ${stylesHead.head} ${stylesHead.headGreen}`}
                />
                <div
                    className={`${styles.stakingFormAutorizeProgressItem} ${stylesHead.head} ${stylesHead.headGreen}`}
                />
                <div className={`${styles.stakingFormAutorizeProgressItem}`} />
                <div className={`${styles.stakingFormAutorizeProgressItem}`} />
                <div className={`${styles.stakingFormAutorizeProgressItem}`} />
            </div>
            <p className="mt-8 body-s-2 text-color-monochrome-8">
                In order to buy $FLOFI with ETH, you first need to authorize us to access the ETH in your wallet.
            </p>
        </div>
    );
};

export default AutorizeWindow;
