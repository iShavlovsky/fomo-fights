import {NavLink} from "react-router-dom";
import styles from './NavBar.module.css';
import TelegramIcon from '@icon/telegram-16.svg';

function NavBar() {
    return <header className={styles.header}>
        <nav>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({isActive}) => (isActive ? "active-link" : "")}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({isActive}) => (isActive ? "active-link" : "")}
                    >
                        Staking
                    </NavLink>
                </li>
            </ul>
        </nav>
        <div>
            <ul>
                <li>
                    <a aria-label='twitter'>
                        <TelegramIcon/>
                    </a>
                </li>
            </ul>
        </div>
    </header>

}

export default NavBar;
