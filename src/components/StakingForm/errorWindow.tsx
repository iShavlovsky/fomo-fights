import styles from './index.module.css';

import WarningIco from '@icon/Warning.svg';

const ErrorWindow = () => {
    return (
        <div
            className={`flex flex-col gap-4px items-center ${styles.stakingFormErrorWindow}`}
        >
            <WarningIco />
            <p className="body-s-2 text-color-red-1 text-center">Your purchase was rejected!</p>
        </div>
    );
};

export default ErrorWindow;
