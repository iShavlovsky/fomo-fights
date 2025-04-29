import ErrorWindow from "@components/StakingForm/errorWindow.tsx";
import BaseButton from "@components/common/Button/baseButton.tsx";


const purchaseRejected = () => {
    return (
        <>
            <ErrorWindow/>
            <div className="flex flex-col gap-4px">
                <BaseButton type="primary" className="w-full">Start again</BaseButton>
                <BaseButton type="secondary" className="w-full">Manual payment</BaseButton>
            </div>
        </>

    );
};

export default purchaseRejected;
