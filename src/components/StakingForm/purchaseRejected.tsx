import ErrorWindow from "@components/StakingForm/errorWindow.tsx";
import BaseButton from "@components/common/Button/baseButton.tsx";
import {useState} from "react";
import Modal from "@components/common/Modal";
import CustomIco from "@components/common/CustomIco";


const purchaseRejected = () => {
    const [isOpenChooseToken, setOpenChooseToken] = useState(false);


    const handleModalClose = () => {
        setOpenChooseToken(false);
    };

    const handleModalOpen = () => {
        setOpenChooseToken(true);
    };

    return (
        <>
            <ErrorWindow/>
            <div className="flex flex-col gap-4px">
                <BaseButton type="primary" className="w-full">Start again</BaseButton>
                <BaseButton onClick={handleModalOpen} type="secondary" className="w-full">Manual payment</BaseButton>
            </div>
            {isOpenChooseToken && (
                <Modal
                    modalType={'error'}
                    onClose={handleModalClose}
                    title={<div className={'flex gap-8px items-center'}>
                        <div style={{
                            minWidth: '32px',
                            maxWidth: '32px',
                            minHeight: '32px',
                            maxHeight: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <CustomIco name={'warning'} size={'32px'}/>
                        </div>
                        <h2 className={'h2-2 uppercase'}>Your purchase was rejected!</h2>
                    </div>}
                    id="connect-wallet-modal"
                    role="dialog"
                    aria-labelledby="connect-wallet-title"
                >

                    <p>Test</p>
                </Modal>


            )}
        </>

    );
};

export default purchaseRejected;
