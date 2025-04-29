import ErrorWindow from "@components/StakingForm/errorWindow.tsx";
import BaseButton from "@components/common/Button/baseButton.tsx";
import {useState} from "react";
import Modal from "@components/common/Modal";
import CustomIco from "@components/common/CustomIco";
import styles from './index.module.css';
import YellowWarningBox from "@components/common/YellowWarningBox";
import CopyToClipboardButton from "@components/common/CopyToClipboardButton";


const purchaseRejected = () => {
    const Amount = '10.00 USDT';
    const TimeRemaining = '01:29:32';
    const PaymentAdress = '0x21f163d8f0b6a5d59af600c2ff6dc5fc91cf62dc';


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
                    title={<div className={'flex gap-8px items-center w-full'}>
                        <div className={styles.ico32px}>
                            <CustomIco name={'warning'} size={'32px'}/>
                        </div>
                        <h2 className={'h2-2 uppercase'}>Your purchase was rejected!</h2>
                    </div>}
                    id="connect-wallet-modal"
                    role="dialog"
                    aria-labelledby="connect-wallet-title"
                >

                    <div className={'flex flex-col gap-12px'}>
                        <div className={'flex flex-col gap-4px items-center'}>
                            <div className={'body-m-2 flex flex-wrap justify-content-center gap-4px'}>
                                <p>Sending</p>
                                <div className={'flex items-center gap-4px'}>
                                    <CustomIco name={'usdt'} size={20}/>
                                    <p>USDT</p>
                                </div>
                                <p>on</p>
                                <div className={'flex items-center gap-4px'}>
                                    <CustomIco name={'ethWallet'} size={20}/>
                                    <p>Ethereum network</p>
                                </div>
                            </div>
                            <p className={'body-s-2 text-center text-color-monochrome-8'}>1 DEFIG = $0.00654</p>
                            {/*todo QR component вместо дивки */}
                            <div>
                                <h2>QR component</h2>
                            </div>
                        </div>

                        <div className={'flex flex-col gap-4px'}>
                            <p className={'body-xs-2 text-color-monochrome-5'}>Amount to pay</p>
                            <div className={'flex gap-4px items-center'}>
                                <CustomIco name={'usdt'} size={24}/>
                                <p className={'body-m-1 w-full'}>{Amount}</p>
                                <CopyToClipboardButton textToCopy={Amount}
                                                       icon={<CustomIco name={'copy'} size={16}/>}
                                />
                            </div>
                        </div>
                        <div className={'flex flex-col gap-4px'}>
                            <p className={'body-xs-2 text-color-monochrome-5'}>Time remaining</p>
                            <p className={'body-m-1'}>{TimeRemaining}</p>
                        </div>
                        <div className={'flex flex-col gap-4px'}>
                            <p className={'body-xs-2 text-color-monochrome-5'}>Payment address</p>
                            <div className={'flex gap-4px items-center'}>
                                <p className={'body-m-1 w-full clamp-1'}>{PaymentAdress}</p>
                                <CopyToClipboardButton textToCopy={PaymentAdress}
                                                       icon={<CustomIco name={'copy'} size={16}/>}
                                />
                            </div>
                        </div>
                        <YellowWarningBox
                            children={
                                <p className={'body-xs-2 text-color-monochrome-8'}>
                                    Make sure to send the exact number of tokens you entered in the purchase field.
                                </p>
                            }/>
                    </div>
                </Modal>


            )}
        </>

    );
};

export default purchaseRejected;
