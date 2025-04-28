import styles from './index.module.css';
import WalletConnectIcon from "@icon/walletConnect-20.svg";
import MetamaskWalletIcon from "@icon/metamask-20.svg";
import TrustWalletIcon from "@icon/trustWallet-20.svg";
import CoinbaseWallet from "@icon/coinbaseWallet-20.svg";

const wallets = [
    {name: 'Wallet Connect', fc: () => console.log('Wallet Connect'), icon: <WalletConnectIcon/>},
    {name: 'Metamask', fc: () => console.log('Metamask'), icon: <MetamaskWalletIcon/>},
    {name: 'Trust wallet', fc: () => console.log('Trust wallet'), icon: <TrustWalletIcon/>},
    {name: 'Coinbase Wallet', fc: () => console.log('Coinbase Wallet'), icon: <CoinbaseWallet/>}
];

interface SelectWalletModalProps {
    children: React.ReactNode;
}

const SelectWalletModal = ({children}: SelectWalletModalProps) => {
    return (
        <div>
            <ul className={styles.walletsList} role="list">
                {wallets.map((wallet) => (
                    <li
                        className={styles.walletsItem}
                        key={wallet.name}
                        onClick={wallet.fc}
                        role="button"
                        tabIndex={0}
                        aria-label={`Connect to ${wallet.name}`}
                    >
                        {wallet.icon}
                        <p className="body-m-1">{wallet.name}</p>
                    </li>
                ))}
            </ul>
            {children}
        </div>
    );
};

export default SelectWalletModal;