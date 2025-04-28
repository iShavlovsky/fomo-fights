import styles from "@components/StakingForm/index.module.css";
import DollarIcon20 from "@icon/dollar-20.svg";
import FistIcon from "@icon/fist-20.svg";

const totalPurchasedForm = () => {
    return (
        <div className="flex flex-row gap-8px">
            <div className="flex flex-col gap-6px grow overflow-hidden">
                <div className="flex flex-row justify-between">
                    <p className="body-s-2">You Pay</p>
                    <button
                        onClick={() => console.log('MAX')}
                        className="cursor-pointer body-xs-1 text-color-pink-2"
                        type="button"
                    >
                        MAX
                    </button>
                </div>
                <div className={`${styles.stakingFormInputWrapper}`}>
                    <input
                        id="pay"
                        name="pay"
                        type="number"
                        placeholder="0"
                        className={`${styles.stakingFormInput} body-s-2`}
                    />

                    <DollarIcon20/>
                </div>

            </div>
            <div className="flex flex-col gap-6px grow overflow-hidden">
                <div>
                    <p className="body-s-2">You receive</p>

                </div>
                <div className={`${styles.stakingFormInputWrapper}`}>
                    <input
                        id="receivey"
                        name="receivey"
                        type="number"
                        placeholder="0"
                        className={`${styles.stakingFormInput} body-s-2`}
                    />

                    <FistIcon/>
                </div>
            </div>
        </div>
    );
};

export default totalPurchasedForm;
