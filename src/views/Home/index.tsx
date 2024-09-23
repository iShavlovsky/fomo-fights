import Button from "@components/common/Button/Button.tsx";
import RadioButtonGroup from "@components/common/RadioButtonGroup";
import ETHIcon from '@icon/eth-16.svg';
import USDTIcon from '@icon/usdt-16.svg';
import USDCIcon from '@icon/usdc-16.svg';
import TwitterXIcon from '@icon/twitterX-20.svg';
import ClosedIcon from '@icon/closed-16.svg';

function HomePage() {

    const options = [
        {label: 'ETH', value: 'eth', icon: <ETHIcon/>},
        {label: 'BTC', value: 'btc', icon: <USDTIcon/>},
        {label: 'SOL', value: 'sol', icon: <USDCIcon/>},
    ];

    const handleRadioChange = (value: string | number) => {
        console.log('Selected:', value);
    };

    return <section>
        <div className='container'>
            <h1>HomePage</h1>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px'}}>
                <Button type="primary">Primary</Button>
                <Button type="primary">HOW+PRESS</Button>
                <Button type="secondary">Secondary</Button>
                <Button type="secondary">HOW+PRESS</Button>
                <Button type="secondary2">Secondary 2</Button>
                <Button type="secondary2">Secondary 2</Button>
                <Button type="secondary" children={<ClosedIcon/>}/>
                {
                    options.map(option =>
                        <Button type="secondary" key={option.value}>
                            <>
                                {option.icon}
                                <span>{option.label}</span>
                            </>
                        </Button>)
                }

            </div>
            <Button type="secondary" href='https://x.com' children={<TwitterXIcon/>}/>
            <div>
                <RadioButtonGroup options={options} name="currency" onChange={handleRadioChange}/>
            </div>
        </div>
    </section>

}

export default HomePage
