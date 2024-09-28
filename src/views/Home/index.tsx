import React, { useState } from 'react';

import stylesHead from '@styles/baseBlock.module.css';
import BaseButton from '@components/common/Button/baseButton.tsx';
import Modal from '@components/common/Modal';
import RadioButtonGroup from '@components/common/RadioButtonGroup';
import ScrollContainer from '@components/common/ScrollContainer';
import SliderCustom from '@components/common/SliderCustom';
import { Tabs } from '@components/common/Tabs';
import StakingForm from '@components/StakingForm';
import ClosedIcon from '@icon/closed-16.svg';
import ETHIcon from '@icon/eth-16.svg';
import FloppyDiskBlueIcon from '@icon/floppyDisk-blue-34.svg';
import FloppyDiskGreenIcon from '@icon/floppyDisk-green-34.svg';
import FloppyDiskYellowIcon from '@icon/floppyDisk-yellow-34.svg';
import TwitterXIcon from '@icon/twitterX-20.svg';
import USDCIcon from '@icon/usdc-16.svg';
import USDTIcon from '@icon/usdt-16.svg';
import useAnimationsLoader from '@hooks/useAnimationsLoader.ts';

const Lottie = React.lazy(() => import('lottie-react'));

const animationsLottie = [
    () => import('@assets/animation/screen1/screen1_with_background.json'),
    () => import('@assets/animation/screen2/screen2_with_background.json'),
    () => import('@assets/animation/screen3/screen3_steps_with_background.json'),
    () => import('@assets/animation/screen4/screen4_with_background.json')
];

function HomePage() {
    const [activeTab, setActiveTab] = useState(0);

    const [isModalActive, setModalActive] = useState(false);

    const handleModalOpen = () => {
        setModalActive(true);
    };
    const handleModalClose = () => {
        setModalActive(false);
    };

    const { animations, isAboveMobile } = useAnimationsLoader(
        '(min-width: 769px)',
        animationsLottie);

    const options = [
        { label: 'ETH', value: 'eth', icon: <ETHIcon /> },
        { label: 'BTC', value: 'btc', icon: <USDTIcon /> },
        { label: 'SOL', value: 'sol', icon: <USDCIcon /> }
    ];

    const tabs = [
        {
            tab: (
                <>
                    <FloppyDiskBlueIcon />
                    <span className="body-s-1">About</span>
                </>
            ),
            content: (
                <div>
                    <h2>About FOMO Fights</h2>
                    <p className="body-m-1">
                        In FOMO Fights, you can choose from iconic crypto memes like Pepe, Doge, Shiba,
                        Floki, or Brett and battle your way up in the DeFi ecosystem. Enter the arena and rise through
                        the
                        leaderboard as you compete against other players.
                    </p>
                </div>
            )
        },
        {
            tab: (
                <>
                    <FloppyDiskYellowIcon />
                    <span className="body-s-1">$FOFI</span>
                </>
            ),
            content: (
                <div>
                    <h2>About $FOFI</h2>
                    <p className="body-m-1">
                        With the $FOFI token, you’re more than just a player — you become part of the game&apos;s
                        development
                        and can benefit from its success. Secure your tokens at the Presale price, stake them, and grow
                        together with us as we build the future of FOMO Fights.
                    </p>
                </div>
            )
        },
        {
            tab: (
                <>
                    <FloppyDiskGreenIcon />
                    <span className="body-s-1">Community</span>
                </>
            ),
            content: (
                <div>
                    <h2>Community</h2>
                    <p className="body-m-1">
                        By holding $FOFI and joining our community on social media, you can help shape the game&apos;s
                        direction, connect with fellow players, and stay updated on the latest developments. Once the
                        game is live, use $FOFI to purchase in-game items and earn even more by jumping right into the
                        battle!
                    </p>
                </div>
            )
        }
    ];

    const handleRadioChange = (value: string | number) => {
        console.log('Selected:', value);
    };

    return (
        <>
            <div>
                {isModalActive && (
                    <Modal onClose={handleModalClose} title={<h2>CONNECT WALLET</h2>}>
                        <div>
                            <h2>Hello world</h2>
                            <BaseButton type="secondary">
                                <p className="button-text">I don’t have a Wallet</p>
                            </BaseButton>
                        </div>
                    </Modal>
                )}
            </div>
            <section className="bg-purple-4">
                <div className="container relative">
                    <div className="flex flex-row">
                        <StakingForm />
                    </div>
                    <div className="animation-w absolute">
                        {isAboveMobile && animations[0]
                            ? (
                                    <Lottie animationData={animations[0]} loop={true} autoplay={true} />
                                )
                            : (
                                    <div> Bakground </div>
                                )}
                    </div>
                </div>
            </section>
            <section className="mt-64">
                <h1>HomePage</h1>
                <div className="container" style={{ height: '500px', width: '100%' }}>
                    <ScrollContainer
                        onScroll={(e) => console.log(e)}
                        header={
                            (<h2>FAQ</h2>)
                        }
                        height={456}
                        width={440}
                    >
                        <div>
                            <h3>What is FOMO Fights?</h3>
                            <p className="body-m-1">
                                FOMO Fights is a blockchain-based Play-to-Earn multiplayer game,
                                where you can pick your favorite character, battle other memes,
                                and
                                earn rewards.
                            </p>
                        </div>
                        <div>
                            <h3>What is FOMO Fights?</h3>
                            <p className="body-m-1">
                                FOMO Fights is a blockchain-based Play-to-Earn multiplayer game,
                                where you can pick your favorite character, battle other memes,
                                and
                                earn rewards.
                            </p>
                        </div>
                        <div>
                            <h3>What is FOMO Fights?</h3>
                            <p className="body-m-1">
                                FOMO Fights is a blockchain-based Play-to-Earn multiplayer game,
                                where you can pick your favorite character, battle other memes,
                                and
                                earn rewards.
                            </p>
                        </div>
                        <div>
                            <h3>What is FOMO Fights?</h3>
                            <p className="body-m-1">
                                FOMO Fights is a blockchain-based Play-to-Earn multiplayer game,
                                where you can pick your favorite character, battle other memes,
                                and
                                earn rewards.
                            </p>
                        </div>
                        <div>
                            <h3>What is FOMO Fights?</h3>
                            <p className="body-m-1">
                                FOMO Fights is a blockchain-based Play-to-Earn multiplayer game,
                                where you can pick your favorite character, battle other memes,
                                and
                                earn rewards.
                            </p>
                        </div>
                    </ScrollContainer>

                </div>

            </section>

            <section className="mt-64">
                <div className="container" style={{ height: '500px', width: '1000px' }}>
                    <SliderCustom classNameContainer="mt-24">
                        <div>
                            <div
                                className={`${stylesHead.head} ${stylesHead.headLightPink}`}
                            >
                                <div style={{
                                    padding: '16px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}
                                >
                                    <h2>Step 3</h2>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="112"
                                        height="14"
                                        viewBox="0 0 112 14"
                                        fill="none"
                                    >
                                        <path d="M0 14H112V12H0V14Z" fill="currentColor" />
                                        <path d="M112 0H0V2H112V0Z" fill="currentColor" />
                                        <path d="M112 10H0V8H112V10Z" fill="currentColor" />
                                        <path d="M112 6H0V4H112V6Z" fill="currentColor" />
                                    </svg>
                                    <h2>Purchase</h2>
                                </div>

                            </div>
                            <div style={{
                                padding: '16px',
                                display: 'flex',
                                gap: '8px',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                textAlign: 'left'
                            }}
                            >
                                <h3>Purchase $FOFI</h3>
                                <p className="body-m-1">
                                    In the widget, select the network of your choice,
                                    input the amount, and proceed to purchase your $FOFI.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`${stylesHead.head} ${stylesHead.headGreen}`}
                            >
                                <div style={{
                                    padding: '16px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}
                                >
                                    <h2>Step 3</h2>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="112"
                                        height="14"
                                        viewBox="0 0 112 14"
                                        fill="none"
                                    >
                                        <path d="M0 14H112V12H0V14Z" fill="currentColor" />
                                        <path d="M112 0H0V2H112V0Z" fill="currentColor" />
                                        <path d="M112 10H0V8H112V10Z" fill="currentColor" />
                                        <path d="M112 6H0V4H112V6Z" fill="currentColor" />
                                    </svg>
                                    <h2>Purchase</h2>
                                </div>

                            </div>
                            <div style={{
                                padding: '16px',
                                display: 'flex',
                                gap: '8px',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                textAlign: 'left'
                            }}
                            >
                                <h3>Purchase $FOFI</h3>
                                <p className="body-m-1">
                                    In the widget, select the network of your choice,
                                    input the amount, and proceed to purchase your $FOFI.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`${stylesHead.head} ${stylesHead.headDarkBeige}`}
                            >
                                <div style={{
                                    padding: '16px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}
                                >
                                    <h2>Step 3</h2>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="112"
                                        height="14"
                                        viewBox="0 0 112 14"
                                        fill="none"
                                    >
                                        <path d="M0 14H112V12H0V14Z" fill="currentColor" />
                                        <path d="M112 0H0V2H112V0Z" fill="currentColor" />
                                        <path d="M112 10H0V8H112V10Z" fill="currentColor" />
                                        <path d="M112 6H0V4H112V6Z" fill="currentColor" />
                                    </svg>
                                    <h2>Purchase</h2>
                                </div>

                            </div>
                            <div style={{
                                padding: '16px',
                                display: 'flex',
                                gap: '8px',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                textAlign: 'left'
                            }}
                            >
                                <h3>Purchase $FOFI</h3>
                                <p className="body-m-1">
                                    In the widget, select the network of your choice,
                                    input the amount, and proceed to purchase your $FOFI.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`${stylesHead.head} ${stylesHead.headPurple}`}
                            >
                                <div style={{
                                    padding: '16px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}
                                >
                                    <h2>Step 3</h2>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="112"
                                        height="14"
                                        viewBox="0 0 112 14"
                                        fill="none"
                                    >
                                        <path d="M0 14H112V12H0V14Z" fill="currentColor" />
                                        <path d="M112 0H0V2H112V0Z" fill="currentColor" />
                                        <path d="M112 10H0V8H112V10Z" fill="currentColor" />
                                        <path d="M112 6H0V4H112V6Z" fill="currentColor" />
                                    </svg>
                                    <h2>Purchase</h2>
                                </div>

                            </div>
                            <div style={{
                                padding: '16px',
                                display: 'flex',
                                gap: '8px',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                textAlign: 'left'
                            }}
                            >
                                <h3>Purchase $FOFI</h3>
                                <p className="body-m-1">
                                    In the widget, select the network of your choice,
                                    input the amount, and proceed to purchase your $FOFI.
                                </p>
                            </div>
                        </div>
                    </SliderCustom>
                </div>
            </section>
            <section className="mt-64">
                <div className="container" style={{ height: '500px', width: '100%' }}>
                    <Tabs activeTab={activeTab} onTabChange={setActiveTab} tabs={tabs} />
                </div>
            </section>
            <section>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '20px'
                    }}
                    >
                        <BaseButton onClick={handleModalOpen} type="primary">OPEN MODAL</BaseButton>
                        <BaseButton type="primary">HOW+PRESS</BaseButton>
                        <BaseButton type="secondary">Secondary</BaseButton>
                        <BaseButton type="secondary">HOW+PRESS</BaseButton>
                        <BaseButton type="secondary2">Secondary 2</BaseButton>
                        <BaseButton type="secondary2">Secondary 2</BaseButton>
                        <BaseButton type="default">
                            <ClosedIcon />
                        </BaseButton>
                        {
                            options.map((option) => (
                                <BaseButton type="secondary" key={option.value}>
                                    <>
                                        {option.icon}
                                        <span>{option.label}</span>
                                    </>
                                </BaseButton>
                            ))
                        }

                    </div>
                    <BaseButton type="secondary" href="https://x.com">
                        <TwitterXIcon />
                    </BaseButton>
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
                {isAboveMobile && animations[0]
                    ? (
                            <Lottie animationData={animations[0]} loop={true} autoplay={true} />
                        )
                    : (
                            <div> Bakground </div>
                        )}
            </section>
            <section>
                {isAboveMobile && animations[1]
                    ? (
                            <Lottie animationData={animations[1]} loop={true} autoplay={true} />
                        )
                    : (
                            <div> Bakground </div>
                        )}

            </section>
            <section>
                {isAboveMobile && animations[2]
                    ? (
                            <Lottie animationData={animations[2]} loop={true} autoplay={true} />
                        )
                    : (
                            <div> Bakground </div>
                        )}
            </section>
            <section>
                {isAboveMobile && animations[3]
                    ? (
                            <Lottie animationData={animations[3]} loop={true} autoplay={true} />
                        )
                    : (
                            <div> Bakground </div>
                        )}
            </section>
            <section>
                {isAboveMobile && animations[4]
                    ? (
                            <Lottie animationData={animations[4]} loop={true} autoplay={true} />
                        )
                    : (
                            <div> Bakground </div>
                        )}
            </section>
            <section>
                {isAboveMobile && animations[5]
                    ? (
                            <Lottie animationData={animations[5]} loop={true} autoplay={true} />
                        )
                    : (
                            <div> Bakground </div>
                        )}
            </section>
        </>
    );
}

export default HomePage;
