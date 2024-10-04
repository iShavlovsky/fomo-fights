import styles from './index.module.css';

import ArrowIcon from '@icon/arrow-16.svg';

interface DropDownSecondProps {
    title: string;
    content: string;
    isOpen: boolean;
    onClick: () => void;
}

const DropDownSecond = ({ title, content, isOpen, onClick }: DropDownSecondProps) => {
    return (
        <li className={`${styles.ddSecondLiElement}`}>
            <div
                className={`flex flex-row justify-between gap-8px items-center ${styles.ddSecondTitleW} ${isOpen ? styles.ddMSecondTitleWOpen : ''}`}
                onClick={onClick}
            >

                <h3 className="body-l-2">{title}</h3>
                <div className={`${styles.ddIconW}`}>
                    <ArrowIcon />
                </div>
            </div>
            <div className={`${styles.ddContent} ${isOpen ? styles.ddContentOpen : ''}`}>
                <p className="body-m-1 mt-12 text-color-monochrome-8">
                    {content}
                </p>
            </div>
        </li>
    );
};

export default DropDownSecond;
