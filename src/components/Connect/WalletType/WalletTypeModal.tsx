// import styles from './index.module.css';

import WalletTypeButton from "@components/Connect/WalletType/WalletTypeButton.tsx";
import CustomIco from "@components/common/CustomIco";

const WalletTypeModal = () => {
    return (
        <div className={'flex flex-col gap-12px'}>
            <p className={'body-m-2 text-color-monochrome-8'}>Choose your wallet type to sign in</p>
            <div className={'grid grid-cols-2 gap-8px'}>
                <WalletTypeButton
                    title="EVM Wallets"
                    description="MetaMask, Trust Wallet, Coinbase Wallet, WalletConnect"
                    onClick={() => console.log('Button clicked!')}
                    icon={<CustomIco name={'ethWallet'} size={40}/>}
                />
                <WalletTypeButton
                    title="Solana Wallets"
                    description="Phantom, Solflare, Backpack, Sollet"
                    onClick={() => console.log('Button clicked!')}
                    icon={<CustomIco name={'solanaWallet'} size={40}/>}
                />

            </div>
            <p className={'body-s-2 text-color-monochrome-5'}>Wallet not detected? Try using the built-in browser in
                your wallet app.</p>
        </div>
    );
};

export default WalletTypeModal;