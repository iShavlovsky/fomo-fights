import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './index.module.css';

import BaseButton from '@components/common/Button/baseButton.tsx';
import Dropdown, { DropdownOption, DropdownOptionSelected } from '@components/common/Dropdown';
import Modal from '@components/common/Modal';
import ArrowIcon from '@icon/arrow-16.svg';
import BulgarianIcon from '@icon/Bulgarian-Flag.svg';
import ChineseIcon from '@icon/Chinese-Flag.svg';
import CoinbaseWallet from '@icon/coinbaseWallet-20.svg';
import CzechIcon from '@icon/Czech-Flag.svg';
import DutchIcon from '@icon/Dutch-Flag.svg';
import EnglishIcon from '@icon/English-Flag.svg';
import GithubIcon from '@icon/github-16.svg';
import InstagramIcon from '@icon/instagram-16.svg';
import LanguageIcon from '@icon/language-20.svg';
import LinkTreeIcon from '@icon/linktree-16.svg';
import MenuIcon from '@icon/menu-20.svg';
import TelegramIcon from '@icon/telegram-16.svg';
import TrustWalletIcon from '@icon/trustWallet-20.svg';
import TwitterXIcon from '@icon/twitterX-16.svg';
import WalletConnectIcon from '@icon/walletConnect-20.svg';
import useMediaQuery from '@hooks/useMediaQuery.ts';

const socialLinks = [
    { label: 'TwitterX', href: 'https://x.com', icon: <TwitterXIcon /> },
    { label: 'Linktree', href: 'https://linktree.com', icon: <LinkTreeIcon /> },
    { label: 'Telegram', href: 'https://telegram.com', icon: <TelegramIcon /> },
    { label: 'Instagram', href: 'https://instagram.com', icon: <InstagramIcon /> },
    { label: 'Github', href: 'https://github.com', icon: <GithubIcon /> }
] as const;

interface NavData {
    navLinkTo: string;
    navLinkTitle: string;
}

const navLinks: NavData[] = [
    {
        navLinkTitle: 'Home',
        navLinkTo: '/'

    },
    {
        navLinkTitle: 'Staking',
        navLinkTo: '/staking'

    }
] as const;

function NavBar() {
    const [isOpenConnectWallet, setOpenConnectWallet] = useState(false);

    const isDesktopView = useMediaQuery('(min-width: 1241px)');

    const isTabletView = useMediaQuery('(min-width: 768px) and (max-width: 1240px)');

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

    const optionalsMenu = [
        {
            label: (<p className="body-m-1">About</p>),
            onClick: () => console.log('About clicked')
        },
        {
            label: (<p className="body-m-1">Roadmap</p>),
            onClick: () => console.log('Roadmap clicked')
        },
        {
            label: (<p className="body-m-1">How to Buy</p>),
            onClick: () => console.log('Buy clicked')
        },
        {
            label: (<p className="body-m-1">FAQ</p>),
            onClick: () => console.log('FAQ clicked')
        }
    ] satisfies DropdownOption[];

    const optionalsLocale = [
        {
            abbreviation: 'Bu',
            label: (
                <>
                    <BulgarianIcon />
                    <p className="body-m-1">Bulgarian</p>
                </>),
            onClick: () => console.log('Selected Bulgarian')
        },
        {
            abbreviation: 'En',
            label: (
                <>
                    <EnglishIcon />
                    <p className="body-m-1">English</p>
                </>),
            onClick: () => console.log('Selected English')
        },
        {
            abbreviation: 'Ch',
            label: (
                <>
                    <ChineseIcon />
                    <p className="body-m-1">Chinese</p>
                </>),
            onClick: () => console.log('Selected Chinese')
        },
        {
            abbreviation: 'Cz',
            label: (
                <>
                    <CzechIcon />
                    <p className="body-m-1">Czech</p>
                </>),
            onClick: () => console.log('Selected Czech')
        },
        {
            abbreviation: 'Du',
            label: (
                <>
                    <DutchIcon />
                    <p className="body-m-1">Dutch</p>
                </>),
            onClick: () => console.log('Selected Dutch')
        }
    ] satisfies DropdownOptionSelected[];

    const handleSelect = (selectedOption: DropdownOption) => {
        console.log('Selected item:', selectedOption);
    };

    return (
        <header className={`relative ${styles.header}`} role="banner" aria-label="Main navigation">
            <div className={`container relative ${styles.navbarContainerW}`}>
                {isDesktopView
                && (
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-24px">
                            <nav className={styles.nav} aria-label="Primary">
                                <ul className={styles.nav_ul} role="list">
                                    {navLinks.map((data, index) => (
                                        <li key={index}>
                                            <NavLink
                                                to={data.navLinkTo} // Теперь это корректно
                                                className={({ isActive }) => `${styles.mainNavLink} body-m-2 ${isActive ? 'active-link' : ''}`}
                                            >
                                                {data.navLinkTitle}
                                            </NavLink>
                                        </li>
                                    ))}

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
                        </div>

                        <div className="flex flex-row items-center gap-24px">
                            <BaseButton
                                onClick={handleModalOpen}
                                type="primary"
                                aria-controls="connect-wallet-modal"
                            >
                                Connect Wallet
                            </BaseButton>
                            <div className="flex flex-row gap-4px">
                                <Dropdown
                                    options={optionalsLocale}
                                    autoClose={false}
                                    ddTitle="En"
                                    ddIcon={<LanguageIcon />}
                                    ddToggleIcon={<ArrowIcon />}
                                    onSelect={handleSelect}
                                    selectedLabel={true}
                                />

                                <Dropdown
                                    options={optionalsMenu}
                                    ddTitle="Menu"
                                    ddIcon={<MenuIcon />}
                                    ddToggleIcon={<ArrowIcon />}
                                    selectedLabel={false}
                                />

                            </div>
                        </div>

                    </div>
                )}

                {isTabletView
                && (
                    <div className="flex flex-row justify-between">
                        <nav className={styles.nav} aria-label="Primary">
                            <ul className={styles.nav_ul} role="list">
                                {navLinks.map((data, index) => (
                                    <li key={index}>
                                        <NavLink
                                            to={data.navLinkTo} // Теперь это корректно
                                            className={({ isActive }) => `${styles.mainNavLink} body-m-2 ${isActive ? 'active-link' : ''}`}
                                        >
                                            {data.navLinkTitle}
                                        </NavLink>
                                    </li>
                                ))}

                            </ul>
                        </nav>

                        <div className="flex flex-row items-center gap-24px">
                            <div className="flex flex-row gap-4px">
                                <Dropdown
                                    options={optionalsLocale}
                                    autoClose={false}
                                    ddTitle="En"
                                    ddIcon={<LanguageIcon />}
                                    ddToggleIcon={<ArrowIcon />}
                                    onSelect={handleSelect}
                                    selectedLabel={true}
                                />

                                <Dropdown
                                    options={optionalsMenu}
                                    ddTitle="Menu"
                                    ddIcon={<MenuIcon />}
                                    ddToggleIcon={<ArrowIcon />}
                                    selectedLabel={false}

                                    ddPortalBottom={(
                                        <>
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
                                                className="mt-16 w-full"
                                            >
                                                Connect Wallet
                                            </BaseButton>
                                        </>
                                    )}
                                />

                            </div>
                        </div>
                    </div>
                )}

                {(!isTabletView
                    && !isDesktopView) && (
                    <div className="flex flex-row justify-between">
                        <nav className={styles.nav} aria-label="Primary">
                            <ul className={styles.nav_ul} role="list">
                                {navLinks.map((data, index) => (
                                    index === 0 && ( // Проверяем, является ли индекс 0
                                        <li key={index}>
                                            <NavLink
                                                to={data.navLinkTo}
                                                className={({ isActive }) => `${styles.mainNavLink} body-m-2 ${isActive ? 'active-link' : ''}`}
                                            >
                                                {data.navLinkTitle}
                                            </NavLink>
                                        </li>
                                    )
                                ))}

                            </ul>
                        </nav>
                        <button className={`${styles.menuBurger}`}>
                            <span className={`${styles.burgerLine}`} />
                            <span className={`${styles.burgerLine}`} />
                            <span className={`${styles.burgerLine}`} />
                        </button>
                        <div className={`${styles.mobileMenuW}`}>
                            <ul className={`flex flex-col gap-12px text-center w-full ${styles.mobileMenuList}`}>

                                {navLinks.map((data, index) => (
                                    index === 1 && ( // Проверяем, является ли индекс 0
                                        <li key={index}>
                                            <NavLink
                                                to={data.navLinkTo}
                                                className={({ isActive }) => `${styles.mainNavLink} h2-2 ${isActive ? 'active-link' : ''}`}
                                            >
                                                {data.navLinkTitle}
                                            </NavLink>
                                        </li>
                                    )
                                ))}

                                <li className="flex justify-content-center mt-32">
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
                                </li>
                                <li className="mt-24">
                                    <Dropdown
                                        options={optionalsLocale}
                                        autoClose={false}
                                        ddTitle="En"
                                        ddIcon={<LanguageIcon />}
                                        ddToggleIcon={<ArrowIcon />}
                                        onSelect={handleSelect}
                                        selectedLabel={true}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

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
                                        <p className="body-m-1">{wallet.name}</p>
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

                <div className={styles.navBarLogo} />
                <div className={`${styles.navBarBottomLine}`} />
            </div>

        </header>

    );
}

export default NavBar;
