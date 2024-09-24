import Lottie from 'lottie-react';

import Button from '@components/common/Button/Button.tsx';
import RadioButtonGroup from '@components/common/RadioButtonGroup';
import Screen1LottieBg from '@assets/animation/screen1/screen1_with_background.json';
import Screen1Lottie from '@assets/animation/screen1/screen1_without_background.json';
import Screen2Lottie from '@assets/animation/screen2/screen2_with_background.json';
import Screen3Lottie from '@assets/animation/screen3/screen3_steps_with_background.json';
import Screen4Lottie from '@assets/animation/screen4/screen4_with_background.json';
import Screen5Lottie from '@assets/animation/screen5/footer_with_background.json';
import ClosedIcon from '@icon/closed-16.svg';
import ETHIcon from '@icon/eth-16.svg';
import TwitterXIcon from '@icon/twitterX-20.svg';
import USDCIcon from '@icon/usdc-16.svg';
import USDTIcon from '@icon/usdt-16.svg';

function HomePage() {
    const options = [
        { label: 'ETH', value: 'eth', icon: <ETHIcon /> },
        { label: 'BTC', value: 'btc', icon: <USDTIcon /> },
        { label: 'SOL', value: 'sol', icon: <USDCIcon /> }
    ];

    const handleRadioChange = (value: string | number) => {
        console.log('Selected:', value);
    };

    return (
        <>
            <section>
                <div className="container">
                    <h1>HomePage</h1>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '20px'
                    }}
                    >
                        <Button type="primary">Primary</Button>
                        <Button type="primary">HOW+PRESS</Button>
                        <Button type="secondary">Secondary</Button>
                        <Button type="secondary">HOW+PRESS</Button>
                        <Button type="secondary2">Secondary 2</Button>
                        <Button type="secondary2">Secondary 2</Button>
                        <Button type="default">
                            <ClosedIcon />
                        </Button>
                        {
                            options.map(option => (
                                <Button type="secondary" key={option.value}>
                                    <>
                                        {option.icon}
                                        <span>{option.label}</span>
                                    </>
                                </Button>
                            ))
                        }

                    </div>
                    <Button type="secondary" href="https://x.com">
                        <TwitterXIcon />
                    </Button>
                    <div>
                        <RadioButtonGroup
                            options={options}
                            name="currency"
                            onChange={handleRadioChange}
                        />
                    </div>
                </div>
            </section>
            <section>
                <Lottie
                    animationData={Screen1LottieBg}
                    loop={true}
                    autoplay={true}
                />
            </section>
            <section>
                <Lottie
                    animationData={Screen1Lottie}
                    loop={true}
                    autoplay={true}
                />
            </section>
            <section>
                <Lottie
                    animationData={Screen2Lottie}
                    loop={true}
                    autoplay={true}
                />
            </section>
            <section>
                <Lottie
                    animationData={Screen3Lottie}
                    loop={true}
                    autoplay={true}
                />
            </section>
            <section>
                <Lottie
                    animationData={Screen4Lottie}
                    loop={true}
                    autoplay={true}
                />
            </section>
            <section>
                <Lottie
                    animationData={Screen5Lottie}
                    loop={true}
                    autoplay={true}
                />
            </section>
        </>
    );
}

export default HomePage;
