import styles from './index.module.css';


const InputFieldPurchase = () => {
    return (
        <div className={styles.inputWrapper}>
            <div className={`flex flex-row justify-between ${styles.inputTitleWrapper}`}>
                <h3 className={'body-s-2 text-color-monochrome-8'}>You Pay</h3>
                <button
                    onClick={() => console.log('MAX')}
                    className="cursor-pointer body-xs-1 text-color-pink-2"
                    type="button"
                >
                    MAX
                </button>
            </div>
            <div className={`flex flex-col gap-4px ${styles.inputHolder}`}>
                <div className={'flex flex-row justify-between'}>
                    <p className={'body-l-2'}>1</p>
                    <p className={'body-l-2'}>2</p>
                </div>
                <p className={'body-xs-2 text-color-monochrome-6'}>
                    Balance:
                    {' '}
                    <span>0.0057</span>
                    {' '}
                    <span>ETH</span>
                </p>
            </div>
        </div>
    );
};

export default InputFieldPurchase;
