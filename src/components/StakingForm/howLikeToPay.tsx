import BaseButton from "@components/common/Button/baseButton.tsx";
import InfoTag from "@components/common/InfoTag";
import HowToBuy from "@components/modalContent/howToBuy";

const HowLikeToPay = () => {
    return (
        <div className={'flex flex-col items-center gap-8px'}>
            <p className={'body-m-2 text-color-monochrome-8'}>How would you like to pay?</p>
            <div className="flex gap-8px w-full">
                <BaseButton type="secondary" className="w-full">Buy with card</BaseButton>
                <BaseButton type="secondary" className="w-full">Buy with crypto</BaseButton>

            </div>
            <InfoTag title={'How to buy?'}
                     modalTitle={'How to buy $DEFIG?'}
                     modalChildren={<HowToBuy/>}/>
        </div>
    );
};

export default HowLikeToPay;
