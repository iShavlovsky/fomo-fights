import HeaderLineDecorate from "@components/common/HeaderLineDecorate";
import InputFieldPurchase from "@components/common/InputFieldPurchase";
import CustomIco from "@components/common/CustomIco";
import styles from './index.module.css';
import Modal from "@components/common/Modal";
import {useState} from "react";


const totalPurchasedFormV2 = () => {
    const [isOpenChooseToken, setOpenChooseToken] = useState(false);


    const handleModalClose = () => {
        setOpenChooseToken(false);
    };

    const handleModalOpen = () => {
        setOpenChooseToken(true);
    };

    return (
        <div className="flex flex-col gap-8px">
            <HeaderLineDecorate
                title={
                    <h3 className={'body-s-2 text-color-monochrome-8'}>Total Purchased:</h3>
                }
                titleChildren={
                    <div className={'flex flex-row gap-4px items-center'}>
                        <CustomIco name={'fist'} size={16}/>
                        <p className={'body-s-2 text-color-monochrome-5'}>0.00</p>
                    </div>
                }
            />

            <div className={`flex flex-col gap-4px`}>
                <InputFieldPurchase
                    title="You Pay"
                    showMaxButton={true}
                    onMaxClick={() => console.log('MAX clicked')}
                    transactionToken={
                        <button onClick={handleModalOpen}
                                className={'cursor-pointer flex flex-row items-center gap-4px text-color-monochrome-7'}>
                            <div className={styles.purchaseTokedSelectMainIcoW}>
                                <CustomIco name={'ethWallet'} size={24}/>
                                <div className={styles.purchaseTokedSelectSmallIcoW}>
                                    <CustomIco name={'ethWallet'} size={12}/>
                                </div>
                            </div>
                            <p className={'body-l-2'}>ETH</p>
                            <CustomIco name={'ddArrow'} size={16}/>
                        </button>

                    }
                    onInputChange={(val) => console.log(val)}
                    balanceAmount="0.0057"
                    balanceToken="ETH"
                    errorMessage={'Error'}
                />
                <InputFieldPurchase
                    title="You Receive"
                    transactionToken={
                        <div className={'flex gap-4px text-color-monochrome-7'}>
                            <div className={styles.purchaseTokedSelectMainIcoW}>
                                <CustomIco name={'fist'} size={24}/>
                            </div>
                            <p className={'body-l-2'}>ETH</p>
                        </div>


                    }
                    onInputChange={(val) => console.log(val)}
                    errorMessage={'Error'}
                    disabled={true}
                />
            </div>

            {isOpenChooseToken && (
                <Modal
                    onClose={handleModalClose}
                    title={<h2 className={'uppercase'}>Choose Payment Method</h2>}
                    id="connect-wallet-modal"
                    role="dialog"
                    aria-labelledby="connect-wallet-title"
                >

                    <h1>Content</h1>
                </Modal>
            )}
        </div>
    );
};

export default totalPurchasedFormV2;
