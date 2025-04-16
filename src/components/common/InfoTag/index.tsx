import styles from './index.module.css';

import InfoIcon from '@icon/info-16.svg';
import Modal from "@components/common/Modal";
import React, {useState} from "react";

interface InfoTagProps {
    title: string;
    modalTitle: string;
    modalChildren: React.ReactNode;
}

const InfoTag = ({title, modalTitle, modalChildren}: InfoTagProps) => {
    const [isOpenInfoTag, setOpenConnectWallet] = useState(false);

    const handleModalClose = () => {
        setOpenConnectWallet(false);
    };

    const handleModalOpen = () => {
        setOpenConnectWallet(true);
    };

    return (
        <>
            <div
                className={`flex flex-row items-center ${styles.infoTagW}`}
                onClick={handleModalOpen}
            >
                <InfoIcon></InfoIcon>
                <p className="body-m-2 uppercase text-color-beige-1">{title}</p>
            </div>

            {isOpenInfoTag && (
                <Modal
                    onClose={handleModalClose}
                    title={<h2 className={'uppercase w-full'}>{modalTitle}</h2>}
                    role="dialog"
                >
                    <div>
                        {modalChildren}
                    </div>
                </Modal>
            )}
        </>
    );
};

export default InfoTag;
