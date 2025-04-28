import styles from './index.module.css';
import SolanaIco from '@icon/solana40.svg';


const WalletTypeButton = () => {
    return (
        <button className={styles.WalletTypeButton}>
            <SolanaIco/>
            <div className={'flex flex-col gap-8px'}>
                <p className={'body-m-2 text-color-monochrome-9'}>
                    EVM Wallets
                </p>
                <p className={'body-s-2 text-color-monochrome-8'}>
                    MetaMask, Trust Wallet, Coinbase Wallet, WalletConnect
                </p>
            </div>
        </button>
    );
};

export default WalletTypeButton;