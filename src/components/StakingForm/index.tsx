import styles from './index.module.css';

import stylesHead from '@styles/baseBlock.module.css';
import BaseButton from '@components/common/Button/baseButton.tsx';
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
                    <div>
                        <p className="h1">radio btn</p>
                    </div>
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
                    <BaseButton type="primary" className="w-full">connect wallet</BaseButton>
                </div>
            </div>
        </div>
    );
}

export default StakingForm;
