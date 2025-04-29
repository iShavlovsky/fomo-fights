import {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';

import styles from './index.module.css';

import BaseButton from '@components/common/Button/baseButton.tsx';
import Dropdown, {DropdownOption, DropdownOptionSelected} from '@components/common/Dropdown';
import Modal from '@components/common/Modal';
import ArrowIcon from '@icon/arrow-16.svg';
import BulgarianIcon from '@icon/Bulgarian-Flag.svg';
import ChineseIcon from '@icon/Chinese-Flag.svg';
import CzechIcon from '@icon/Czech-Flag.svg';
import DutchIcon from '@icon/Dutch-Flag.svg';
import EnglishIcon from '@icon/English-Flag.svg';
import InstagramIcon from '@icon/instagram-16.svg';
import LanguageIcon from '@icon/language-20.svg';
import MenuIcon from '@icon/menu-20.svg';
import TelegramIcon from '@icon/telegram-16.svg';
import TwitterXIcon from '@icon/twitterX-16.svg';
import useMediaQuery from '@hooks/useMediaQuery.ts';
import WalletTypeModal from "@components/Connect/WalletType/WalletTypeModal.tsx";
import SelectWalletModal from "@components/Connect/SelectWallet/SelectWalletModal.tsx";

const socialLinks = [
    {label: 'TwitterX', href: 'https://x.com', icon: <TwitterXIcon/>},
    {label: 'Telegram', href: 'https://telegram.com', icon: <TelegramIcon/>},
    {label: 'Instagram', href: 'https://instagram.com', icon: <InstagramIcon/>}
] as const;

interface NavData {
    navLinkTo: string;
    navLinkTitle: string;
    isExternal?: boolean;
}

const navLinks: NavData[] = [
    {
        navLinkTitle: 'Home',
        navLinkTo: '/'

    },
    {
        navLinkTitle: 'Staking',
        navLinkTo: '/staking'

    },
    {
        navLinkTitle: 'White paper',
        navLinkTo: 'https://degenfighters.gitbook.io/whitepaper',
        isExternal: true

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

    const optionalsMenu = [
        {
            label: 'About',
            href: '/#about'
        },
        {
            label: 'Roadmap',
            href: '/#roadmap'
        },
        {
            label: 'How to Buy',
            href: '/#how-to-buy'

        },
        {
            label: 'FAQ',
            href: '/#faq'
        }
    ] satisfies DropdownOption[];

    const optionalsLocale = [
        {
            abbreviation: 'Bu',
            label: (
                <>
                    <BulgarianIcon/>
                    <p className="body-m-1">Bulgarian</p>
                </>),
            onClick: () => console.log('Selected Bulgarian')
        },
        {
            abbreviation: 'En',
            label: (
                <>
                    <EnglishIcon/>
                    <p className="body-m-1">English</p>
                </>),
            onClick: () => console.log('Selected English')
        },
        {
            abbreviation: 'Ch',
            label: (
                <>
                    <ChineseIcon/>
                    <p className="body-m-1">Chinese</p>
                </>),
            onClick: () => console.log('Selected Chinese')
        },
        {
            abbreviation: 'Cz',
            label: (
                <>
                    <CzechIcon/>
                    <p className="body-m-1">Czech</p>
                </>),
            onClick: () => console.log('Selected Czech')
        },
        {
            abbreviation: 'Du',
            label: (
                <>
                    <DutchIcon/>
                    <p className="body-m-1">Dutch</p>
                </>),
            onClick: () => console.log('Selected Dutch')
        }
    ] satisfies DropdownOptionSelected[];

    const handleSelect = (selectedOption: DropdownOption) => {
        console.log('Selected item:', selectedOption);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Очистка при размонтировании компонента
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

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
                                                {data.isExternal ? (
                                                    <a
                                                        href={data.navLinkTo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`${styles.mainNavLink} body-m-2`}
                                                    >
                                                        {data.navLinkTitle}
                                                    </a>
                                                ) : (
                                                    <NavLink
                                                        to={data.navLinkTo}
                                                        className={({isActive}) => `${styles.mainNavLink} body-m-2 ${isActive ? 'active-link' : ''}`}
                                                    >
                                                        {data.navLinkTitle}
                                                    </NavLink>
                                                )}
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
                                                title={`Visit our ${link.label}`}
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
                                        ddIcon={<LanguageIcon/>}
                                        ddToggleIcon={<ArrowIcon/>}
                                        onSelect={handleSelect}
                                        selectedLabel={true}
                                    />

                                    <Dropdown
                                        options={optionalsMenu}
                                        ddTitle="Menu"
                                        ddIcon={<MenuIcon/>}
                                        ddToggleIcon={<ArrowIcon/>}
                                        selectedLabel={false}
                                        ulClassName="body-m-1"
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
                                                className={({isActive}) => `${styles.mainNavLink} body-m-2 ${isActive ? 'active-link' : ''}`}
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
                                        ddIcon={<LanguageIcon/>}
                                        ddToggleIcon={<ArrowIcon/>}
                                        onSelect={handleSelect}
                                        selectedLabel={true}
                                    />

                                    <Dropdown
                                        options={optionalsMenu}
                                        ddTitle="Menu"
                                        ddIcon={<MenuIcon/>}
                                        ddToggleIcon={<ArrowIcon/>}
                                        selectedLabel={false}
                                        ulClassName="body-m-1"

                                        ddPortalBottom={(
                                            <>
                                                <ul className={styles.nav_ul} role="list">
                                                    {socialLinks.map((link) => (
                                                        <li key={link.href}>
                                                            <a
                                                                className={styles.nav_link}
                                                                href={link.href}
                                                                aria-label={`Visit our ${link.label}`}
                                                                title={`Visit our ${link.label}`}
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
                                            {data.isExternal ? (
                                                <a
                                                    href={data.navLinkTo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`${styles.mainNavLink} body-m-2`}
                                                >
                                                    {data.navLinkTitle}
                                                </a>
                                            ) : (
                                                <NavLink
                                                    to={data.navLinkTo}
                                                    className={({isActive}) => `${styles.mainNavLink} body-m-2 ${isActive ? 'active-link' : ''}`}
                                                >
                                                    {data.navLinkTitle}
                                                </NavLink>
                                            )}
                                        </li>
                                    )
                                ))}

                            </ul>
                        </nav>

                        <button
                            className={`${styles.menuBurger} ${isOpen ? styles.menuOpen : ''}`}
                            onClick={toggleMenu}
                        >
                            <span className={styles.burgerLine}/>
                            <span className={styles.burgerLine}/>
                            <span className={styles.burgerLine}/>
                        </button>

                        <div
                            className={`${styles.mobileMenuW} ${
                                isOpen ? styles.mobileMenuOpen : styles.mobileMenuClose
                            }`}
                        >
                            <ul className={`flex flex-col gap-12px text-center w-full ${styles.mobileMenuList}`}>

                                {navLinks.map((data, index) => (
                                    index != 0 && (
                                        <li key={index}>
                                            {data.isExternal ? (
                                                <a
                                                    href={data.navLinkTo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`${styles.mainNavLink} h2-2`}
                                                >
                                                    {data.navLinkTitle}
                                                </a>
                                            ) : (
                                                <NavLink
                                                    to={data.navLinkTo}
                                                    className={({isActive}) => `${styles.mainNavLink} h2-2 ${isActive ? 'active-link' : ''}`}>
                                                    {data.navLinkTitle}
                                                </NavLink>
                                            )}
                                        </li>
                                    )
                                ))}
                                {optionalsMenu.map((data, index) => (

                                    <li key={index} className="">
                                        <a
                                            href={data.href}
                                            className={`h2-2 text-color-monochrome-1 no-decorate ${styles.mainNavLink}`}
                                        >
                                            {data.label}
                                        </a>
                                    </li>

                                ))}
                                <li className="flex justify-content-center mt-32">
                                    <ul className={styles.nav_ul} role="list">
                                        {socialLinks.map((link) => (
                                            <li key={link.href}>
                                                <a
                                                    className={styles.nav_link}
                                                    href={link.href}
                                                    aria-label={`Visit our ${link.label}`}
                                                    title={`Visit our ${link.label}`}
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
                                        ddIcon={<LanguageIcon/>}
                                        ddToggleIcon={<ArrowIcon/>}
                                        onSelect={handleSelect}
                                        selectedLabel={true}
                                    />
                                </li>
                                <li>
                                    <BaseButton
                                        onClick={handleModalOpen}
                                        type="primary"
                                        aria-controls="connect-wallet-modal"
                                        className="mt-16 w-full"
                                    >
                                        Connect Wallet
                                    </BaseButton>
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

                        <SelectWalletModal>
                            <BaseButton
                                className="button-text mt-12"
                                onClick={handleModalClose}
                                type="secondary"
                            >
                                <p className="button-text">I don’t have a Wallet</p>
                            </BaseButton>
                        </SelectWalletModal>
                        <WalletTypeModal></WalletTypeModal>
                    </Modal>
                )}

                <div className={styles.navBarLogo}/>
                <div className={`${styles.navBarBottomLine}`}/>
            </div>

        </header>

    );
}

export default NavBar;
