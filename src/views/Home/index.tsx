import { useState } from 'react';
import Lottie from 'lottie-react';

import Button from '@components/common/Button/Button.tsx';
import Modal from '@components/common/Modal';
import RadioButtonGroup from '@components/common/RadioButtonGroup';
import { Tab, Tabs } from '@components/common/Tabs';
import Screen1LottieBg from '@assets/animation/screen1/screen1_with_background.json';
import Screen1Lottie from '@assets/animation/screen1/screen1_without_background.json';
import Screen2Lottie from '@assets/animation/screen2/screen2_with_background.json';
import Screen3Lottie from '@assets/animation/screen3/screen3_steps_with_background.json';
import Screen4Lottie from '@assets/animation/screen4/screen4_with_background.json';
import Screen5Lottie from '@assets/animation/screen5/footer_with_background.json';
import ClosedIcon from '@icon/closed-16.svg';
import ETHIcon from '@icon/eth-16.svg';
import FloppyDiskBlueIcon from '@icon/floppyDisk-blue-34.svg';
import FloppyDiskGreenIcon from '@icon/floppyDisk-green-34.svg';
import FloppyDiskYellowIcon from '@icon/floppyDisk-yellow-34.svg';
import TwitterXIcon from '@icon/twitterX-20.svg';
import USDCIcon from '@icon/usdc-16.svg';
import USDTIcon from '@icon/usdt-16.svg';

function HomePage() {
    const options = [
        { label: 'ETH', value: 'eth', icon: <ETHIcon /> },
        { label: 'BTC', value: 'btc', icon: <USDTIcon /> },
        { label: 'SOL', value: 'sol', icon: <USDCIcon /> }
    ];

    const tabs = [
        {
            lable: (
                <>
                    <FloppyDiskBlueIcon />
                    <span className="body-s">About</span>
                </>
            ),
            content: (
                <div>
                    <h2>About FOMO Fights</h2>
                    <p className="body-m">
                        In FOMO Fights, you can choose from iconic crypto memes like Pepe, Doge, Shiba,
                        Floki, or Brett and battle your way up in the DeFi ecosystem. Enter the arena and rise through
                        the
                        leaderboard as you compete against other players.
                    </p>
                </div>
            )
        },
        {
            lable: (
                <>
                    <FloppyDiskYellowIcon />
                    <span className="body-s">$FOFI</span>
                </>
            ),
            content: (
                <div>
                    <h2>$FOFI</h2>
                    <p className="body-m">
                        In FOMO Fights, you can choose from iconic crypto memes like Pepe, Doge, Shiba,
                        Floki, or Brett and battle your way up in the DeFi ecosystem. Enter the arena and rise through
                        the
                        leaderboard as you compete against other players.
                    </p>
                </div>
            )
        },
        {
            lable: (
                <>
                    <FloppyDiskGreenIcon />
                    <span className="body-s">Community</span>
                </>
            ),
            content: (
                <div>
                    <h2>Community</h2>
                    <p className="body-m">
                        In FOMO Fights, you can choose from iconic crypto memes like Pepe, Doge, Shiba,
                        Floki, or Brett and battle your way up in the DeFi ecosystem. Enter the arena and rise through
                        the
                        leaderboard as you compete against other players.
                    </p>
                </div>
            )
        }
    ];

    const handleRadioChange = (value: string | number) => {
        console.log('Selected:', value);
    };

    const [activeTab, setActiveTab] = useState(0);

    const [isModalActive, setModalActive] = useState(false);

    const handleModalOpen = () => {
        setModalActive(true);
    };
    const handleModalClose = () => {
        setModalActive(false);
    };

    return (
        <>
            <div>
                {isModalActive && (
                    <Modal onClose={handleModalClose} title={<h2>CONNECT WALLET</h2>}>
                        <div>
                            <h2>Hello world</h2>
                            <Button type="secondary">
                                <p className="button-text">I don’t have a Wallet</p>
                            </Button>
                        </div>
                    </Modal>
                )}
            </div>
            <section>
                <div className="container" style={{ height: '500px', width: '100%' }}>
                    <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
                        {
                            tabs.map((tab, index) => (<Tab key={index} lable={tab.lable}>{tab.content}</Tab>))
                        }
                    </Tabs>

                </div>
            </section>
            <section>
                <div className="container">

                    <h1>HomePage</h1>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '20px'
                    }}
                    >
                        <Button onClick={handleModalOpen} type="primary">OPEN MODAL</Button>
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
