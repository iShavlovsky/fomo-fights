import { useWallet } from "@solana/wallet-adapter-react";
import styles from "@components/NavBar/index.module.css";

export const SolanaConnect = () => {
    const { select, wallets, publicKey, disconnect } = useWallet();

    return !publicKey ? (
        <div>
            <ul className={styles.walletsList} role="list">
            {wallets.filter((wallet) => wallet.readyState === "Installed").length >
            0 ? (
                wallets
                    .filter((wallet) => wallet.readyState === "Installed")
                    .map((wallet) => (

                        <li
                            className={styles.walletsItem}
                            key={wallet.adapter.name}
                            onClick={() => select(wallet.adapter.name)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Connect to ${wallet.adapter.name}`}
                        >
                            <img
                                style={{width: '32px', height: '32px'}}
                                src={wallet.adapter.icon}
                                alt={wallet.adapter.name}
                            />
                            <p className="body-m-1">{wallet.adapter.name}</p>
                        </li>
                    ))
            ) : (
                <p>No wallet found. Please download a supported Solana wallet</p>
            )}
            </ul>
        </div>
    ) : (
        <div>
            <p>{publicKey.toBase58()}</p>
            <button onClick={disconnect}>disconnect wallet</button>
        </div>
    );
};

