import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './index.module.css';

import BaseButton from '@components/common/Button/baseButton.tsx';
import Modal from '@components/common/Modal';
import CoinbaseWallet from '@icon/coinbaseWallet-20.svg';
import GithubIcon from '@icon/github-16.svg';
import InstagramIcon from '@icon/instagram-16.svg';
import LinkTreeIcon from '@icon/linktree-16.svg';
import TelegramIcon from '@icon/telegram-16.svg';
import TrustWalletIcon from '@icon/trustWallet-20.svg';
import TwitterXIcon from '@icon/twitterX-16.svg';
import WalletConnectIcon from '@icon/walletConnect-20.svg';

const socialLinks = [
    { label: 'TwitterX', href: 'https://x.com', icon: <TwitterXIcon /> },
    { label: 'Linktree', href: 'https://linktree.com', icon: <LinkTreeIcon /> },
    { label: 'Telegram', href: 'https://telegram.com', icon: <TelegramIcon /> },
    { label: 'Instagram', href: 'https://instagram.com', icon: <InstagramIcon /> },
    { label: 'Github', href: 'https://github.com', icon: <GithubIcon /> }
] as const;

function NavBar() {
    const [isOpenConnectWallet, setOpenConnectWallet] = useState(false);

    const handleModalClose = () => {
        setOpenConnectWallet(false);
    };

    const handleModalOpen = () => {
        setOpenConnectWallet(true);
    };

    const wallets = [
        { name: 'Wallet Connect', fc: () => console.log('Wallet Connect'), icon: <WalletConnectIcon /> },
        { name: 'Metamask', fc: () => console.log('Metamask'), icon: <LinkTreeIcon /> },
        { name: 'Trust wallet', fc: () => console.log('Trust wallet'), icon: <TrustWalletIcon /> },
        { name: 'Coinbase Wallet', fc: () => console.log('Coinbase Wallet'), icon: <CoinbaseWallet /> }
    ];

    return (
        <header className={styles.header} role="banner" aria-label="Main navigation">
            <nav className={styles.nav} aria-label="Primary">
                <ul className={styles.nav_ul} role="list">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'active-link' : '')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'active-link' : '')}
                        >
                            Staking
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <ul className={styles.nav_ul} role="list">
                {socialLinks.map((link) => (
                    <li key={link.href}>
                        <a
                            className={styles.nav_link}
                            href={link.href}
                            aria-label={`Visit our ${link.label}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.icon}
                        </a>
                    </li>
                ))}
            </ul>
            <BaseButton
                onClick={handleModalOpen}
                type="primary"
                aria-controls="connect-wallet-modal"
            >
                Connect Wallet
            </BaseButton>
            <div>
                {isOpenConnectWallet && (
                    <Modal
                        onClose={handleModalClose}
                        title={<h2>CONNECT WALLET</h2>}
                        id="connect-wallet-modal"
                        role="dialog"
                        aria-labelledby="connect-wallet-title"
                    >
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
                                        <p className="body-m">{wallet.name}</p>
                                    </li>
                                ))}
                            </ul>
                            <BaseButton
                                className="button-text mt-12"
                                onClick={handleModalClose}
                                type="secondary"
                            >
                                <p className="button-text">I don’t have a Wallet</p>
                            </BaseButton>
                        </div>
                    </Modal>
                )}
            </div>
        </header>

    );
}

export default NavBar;
