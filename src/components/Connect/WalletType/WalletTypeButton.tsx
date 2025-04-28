import styles from './index.module.css';

interface WalletTypeButtonProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}

const WalletTypeButton = ({
                              title,
                              description,
                              icon,
                              onClick
                          }: WalletTypeButtonProps) => {
    const handleClick = () => {
        onClick?.();
    };

    return (
        <button
            className={styles.WalletTypeButton}
            onClick={handleClick}
        >
            {icon}
            <div className={'flex flex-col gap-8px'}>
                <p className={'body-m-2 text-color-monochrome-9'}>
                    {title}
                </p>
                <p className={'body-s-2 text-color-monochrome-8'}>
                    {description}
                </p>
            </div>
        </button>
    );
};

export default WalletTypeButton;