import HeaderLineDecorate from "@components/common/HeaderLineDecorate";
import InputFieldPurchase from "@components/common/InputFieldPurchase";
import CustomIco from "@components/common/CustomIco";

const totalPurchasedFormV2 = () => {
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
                <InputFieldPurchase>

                </InputFieldPurchase>
                <InputFieldPurchase>

                </InputFieldPurchase>
            </div>

        </div>
    );
};

export default totalPurchasedFormV2;
