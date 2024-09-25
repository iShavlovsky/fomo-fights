import { NavLink } from 'react-router-dom';

import styles from './index.module.css';

import Index from '@components/common/Button';
import GithubIcon from '@icon/github-16.svg';
import InstagramIcon from '@icon/instagram-16.svg';
import LinktreeIcon from '@icon/linktree-16.svg';
import TelegramIcon from '@icon/telegram-16.svg';
import TwitterXIcon from '@icon/twitterX-16.svg';

function NavBar() {
    const socialLinks = [
        { label: 'TwitterX', href: 'https://x.com', icon: <TwitterXIcon /> },
        { label: 'Linktree', href: 'https://linktree.com', icon: <LinktreeIcon /> },
        { label: 'Telegram', href: 'https://telegram.com', icon: <TelegramIcon /> },
        { label: 'Instagram', href: 'https://instagram.com', icon: <InstagramIcon /> },
        { label: 'Github', href: 'https://github.com', icon: <GithubIcon /> }
    ];

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.nav_ul}>
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
            <ul className={styles.nav_ul}>
                {
                    socialLinks.map((link) => (

                        <li key={link.href}>
                            <a
                                className={styles.nav_link}
                                href={link.href}
                                aria-label={link.label}
                            >
                                {link.icon}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <Index type="primary">connect wallet</Index>
        </header>
    );
}

export default NavBar;
