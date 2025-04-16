import YellowWarningBox from "@components/common/YellowWarningBox";

const HowToBuy = () => {
    const steps = [
        "Select whether you want to buy $DEFIG with crypto (ETH, USDT, USDC) or card directly from the presale widget.",
        "Connect your wallet to the presale widget at the top of this page. When you click Connect Wallet, you will see the list of the wallets we support.",
        "Make sure you have a sufficient amount of crypto (ETH, USDC/USDT) in your wallet to cover the transaction cost and gas fees.",
        "In the widget, select the network of your choice, input the amount, and proceed to purchase your $DEFIG.",
        "Your $DEFIG tokens will be displayed in the widget. You will be able to claim them once the presale is over.",
        "You can also choose to stake $DEFIG through the widget to grow your holdings over time."
    ];

    return (
        <div className="flex flex-col gap-12px max-w-386">
            {steps.map((step, index) => (
                <div key={index} className={'flex gap-12px'}>
                    <h3 className={'body-s-2 text-color-monochrome-5'}>Step&nbsp;{index + 1}</h3>
                    <p className={'body-s-2 text-color-monochrome-9'}>{step}</p>
                </div>
            ))}
            <YellowWarningBox>
                <p className={'body-xs-2'}>If you purchase without staking during the Presale, you won’t be able to
                    stake your tokens later
                    until you claim them after the Presale ends.</p>
            </YellowWarningBox>
        </div>
    );
};

export default HowToBuy;