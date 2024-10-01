import styles from './index.module.css';

import stylesHead from '@styles/baseBlock.module.css';
import BaseButton from '@components/common/Button/baseButton.tsx';
import AutorizeWindow from '@components/StakingForm/autorizeWindow.tsx';
import BalanceRadioBtns from '@components/StakingForm/balanceRadioBtns.tsx';
import ErrorWindow from '@components/StakingForm/errorWindow.tsx';
import PresaleLimit from '@components/StakingForm/presaleLimit.tsx';
import FistIcon from '@icon/fist-20.svg';

function StakingForm() {
    const timeData = [
        { label: 'Days', value: '02' },
        { label: 'Hrs', value: '22' },
        { label: 'Min', value: '12' },
        { label: 'Sec', value: '42' }
    ];

    return (
        <div className={`${styles.stakingFormW}`}>
            <div className={`${stylesHead.head} ${stylesHead.headPurple} title-w`}>
                <div className="w-full">
                    <h2 className="text-center text-uppercase text-color-monochrome-1">The Presale is open!</h2>
                </div>
            </div>
            <div className="p-16 flex flex-col gap-20px">
                <div className="flex flex-col gap-16px">
                    <div className={`${styles.stakingFormTimerCollectionsW} flex flex-row justify-content-center`}>
                        {timeData.map((time, index) => (
                            <div
                                key={index}
                                className={`${styles.stakingFormTimerW} flex flex-col gap-4px items-center`}
                            >
                                <div className={`${styles.stakingFormTimerCount} relative`}>
                                    <p className="body-l-1 text-center">{time.value}</p>
                                </div>
                                <p className="body-xs-1 text-color-beige-3">{time.label}</p>
                            </div>
                        ))}
                    </div>

                    <PresaleLimit />

                    <div className="flex flex-row gap-16px text-color-monochrome-6">

                        <div className="flex flex-col items-center gap-4px grow">
                            <p className="body-s-2 text-center">
                                Your purchased $FOFI
                            </p>
                            <div className="flex flex-row items-center gap-4px">
                                <FistIcon />

                                <p className="body-s-2 text-color-monochrome-7-6">0.00</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4px grow">
                            <p className="body-s-2 text-center">
                                Your stakeable $FOFI
                            </p>
                            <div className="flex flex-row items-center gap-4px">
                                <FistIcon />

                                <p className="body-s-2 text-color-monochrome-7-6">0.00</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col gap-12px">
                    <BalanceRadioBtns />

                    <div className="flex flex-row gap-8px">
                        <div className="flex flex-col gap-6px grow overflow-hidden">
                            <div className="flex flex-row justify-between">
                                <p className="body-s-2">You Pay</p>
                                <button className="body-xs-1 text-color-pink-2" type="button">MAX</button>
                            </div>
                            <input
                                type="number"
                                placeholder="0"
                                className={`${styles.stakingFormInput} body-s-2`}
                            />
                        </div>
                        <div className="flex flex-col gap-6px grow overflow-hidden">
                            <div>
                                <p className="body-s-2">You receivey</p>

                            </div>
                            <input
                                type="number"
                                placeholder="0"
                                className={`${styles.stakingFormInput} body-s-2`}
                            />
                        </div>
                    </div>
                    <div className={`flex flex-col gap-8px text-center ${styles.stakingFormTextInfo}`}>
                        <p className="body-s-1">
                            0.005 ETH is reserved for gas. The actual amount used will depend on the
                            network.
                        </p>

                        <p className="body-xs-2 text-color-red-1">
                            Make sure you have 0.005 ETH for gas and ETH for token exchange
                        </p>
                    </div>
                    <AutorizeWindow />
                    <ErrorWindow />
                    <BaseButton type="primary" className="w-full">connect wallet</BaseButton>
                    <BaseButton type="secondary2" className="w-full">Buy and stake for 84%</BaseButton>
                    <BaseButton type="secondary" className="w-full">Not enough ETH? Top up now</BaseButton>

                </div>
            </div>
        </div>
    );
}

export default StakingForm;
