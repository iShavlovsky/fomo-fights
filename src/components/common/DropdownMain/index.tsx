import styles from './index.module.css';

interface DropDownMainProps {
    title: string;
    content: string;
    isOpen: boolean;
    onClick: () => void;
}

const DropDownMain = ({ title, content, isOpen, onClick }: DropDownMainProps) => {
    return (
        <li>
            <div
                className={`flex flex-row gap-8px items-center ${styles.ddMainTitleW} ${isOpen ? styles.ddMainTitleWOpen : ''}`}
                onClick={onClick}
            >
                <div className={`${styles.ddIconW}`}>
                    <div className={`${styles.ddIconLine} ${styles.horizontalLine}`} />
                    <div className={`${styles.ddIconLine} ${styles.verticalLine}`} />
                </div>
                <h3 className="body-m-1">{title}</h3>
            </div>
            <div className={`${styles.ddContent} ${isOpen ? styles.ddContentOpen : ''}`}>
                <p className="body-s-1 text-color-monochrome-7">
                    {content}
                </p>
            </div>
        </li>
    );
};

export default DropDownMain;
