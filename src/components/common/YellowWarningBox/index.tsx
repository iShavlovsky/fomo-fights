import {ReactNode} from 'react';
import styles from './index.module.css';

interface YellowWarningBoxProps {
    children: ReactNode;
}

const YellowWarningBox = ({children}: YellowWarningBoxProps) => {
    return (
        <div className={styles.YellowWarningBox}>
            {children}
        </div>
    );
};

export default YellowWarningBox;