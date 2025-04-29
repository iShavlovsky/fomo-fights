import HeaderLineDecorate from "@components/common/HeaderLineDecorate";
import InputFieldPurchase from "@components/common/InputFieldPurchase";
import CustomIco from "@components/common/CustomIco";
import styles from './index.module.css';
import Modal from "@components/common/Modal";
import React, {useState} from "react";
import RadioButtonGroup from "@components/common/RadioButtonGroup";
import EthereumIcon from "@icon/ethereum-16.svg";
import BNBIcon from "@icon/bnb-16.svg";
import SOLIcon16 from "@icon/sol-16.svg";

import ChoosePaymentTokenRadioGroup from "@components/common/ChoosePaymentTokenRadioGroup";
import BaseButton from "@components/common/Button/baseButton.tsx";
import InfoTag from "@components/common/InfoTag";
import HowToBuy from "@components/modalContent/howToBuy";


const totalPurchasedFormV2 = () => {
    const [selectedToken, setSelectedToken] = React.useState('eth');

    const options1 = [
        {label: 'ETH', value: 'eth', icon: <EthereumIcon/>},
        {label: 'BNB', value: 'bnb', icon: <BNBIcon/>},
        {label: 'SOL', value: 'sol', icon: <SOLIcon16/>}
    ];
    const tokenOptions = [
        {
            value: 'eth',
            mainIcon: <CustomIco name={'ethWallet'} size={40}/>,
            smallIcon: <CustomIco name={'ethWallet'} size={16}/>,
            title: 'Ethereum',
            subtitle: 'ETH',
            balance: '0.0057',
            fiatEquivalent: '$12.00'
        },
        {
            value: 'usdt',
            mainIcon: <CustomIco name={'usdt'} size={40}/>,
            smallIcon: <CustomIco name={'ethWallet'} size={16}/>,
            title: 'Tether',
            subtitle: 'USDT',
        },
        {
            value: 'usdc',
            mainIcon: <CustomIco name={'usdc'} size={40}/>,
            smallIcon: <CustomIco name={'ethWallet'} size={16}/>,
            title: 'USDC',
            subtitle: 'USDC',
            disabled: true,
        }
    ];
    const [isOpenChooseToken, setOpenChooseToken] = useState(false);


    const handleModalClose = () => {
        setOpenChooseToken(false);
    };

    const handleModalOpen = () => {
        setOpenChooseToken(true);
    };
    const [isOpenChoosePayCard, setOpenChoosePayCard] = useState(false);

    const handleModalClose2 = () => {
        setOpenChoosePayCard(false);
    };

    const handleModalOpen2 = () => {
        setOpenChoosePayCard(true);
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

            <div className={`flex flex-col gap-4px`}>
                <BaseButton type="primary" className="w-full">Buy $DEGIG</BaseButton>
                <BaseButton type="secondary2" className="w-full">Buy & stake for 322% rewards</BaseButton>
            </div>
            <div className={`flex flex-col gap-8px items-center`}>
                <p className={'body-xs-2 text-color-monochrome-8 text-center'}>Want to pay with card?{' '}
                    <span className={'decorate cursor-pointer'}
                          onClick={handleModalOpen2}>
                        Click&nbsp;here!
                    </span>
                </p>
                <InfoTag title={'How to buy?'}
                         modalTitle={'How to buy $DEFIG?'}
                         modalChildren={<HowToBuy/>}/>
            </div>
            {isOpenChooseToken && (
                <Modal
                    onClose={handleModalClose}
                    title={<h2 className={'uppercase'}>Choose Payment Method</h2>}
                    id="connect-wallet-modal"
                    role="dialog"
                    aria-labelledby="connect-wallet-title"
                >

                    <RadioButtonGroup
                        options={options1}
                        name="sourceOfFunds"
                        onChange={() => (console.log('change'))}
                        typeStyle="style2"
                    />
                    <ChoosePaymentTokenRadioGroup
                        className={'mt-12'}
                        options={tokenOptions}
                        name="paymentToken"
                        selectedValue={selectedToken}
                        onChange={setSelectedToken}
                    />
                </Modal>


            )}
            {isOpenChoosePayCard && (
                <Modal
                    onClose={handleModalClose2}
                    title={<h2 className={'uppercase'}>Choose Payment Method</h2>}
                    id="connect-wallet-modal"
                    role="dialog"
                    aria-labelledby="connect-wallet-title"
                >
                    <p>Want to pay with card? Click here!</p>
                </Modal>


            )}
        </div>
    );
};

export default totalPurchasedFormV2;
