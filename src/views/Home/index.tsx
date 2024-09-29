import React, { useState } from 'react';

import styles from './index.module.css';

import stylesHead from '@styles/baseBlock.module.css';
import BaseButton from '@components/common/Button/baseButton.tsx';
import Modal from '@components/common/Modal';
import RadioButtonGroup from '@components/common/RadioButtonGroup';
import ScrollContainer from '@components/common/ScrollContainer';
import SliderCustom from '@components/common/SliderCustom';
import { Tabs } from '@components/common/Tabs';
import StakingForm from '@components/StakingForm';
import SoldProofFolderIcon from '@icon/About-FOMO-Fights.svg';
import ClosedIcon from '@icon/closed-16.svg';
import DotFoundsIcon from '@icon/dot-Funds.svg';
import DotLiquidIcon from '@icon/dot-Liquidity.svg';
import DotMarketingIcon from '@icon/dot-Marketing.svg';
import DotPresaleIcon from '@icon/dot-Presale.svg';
import DotRewardsIcon from '@icon/dot-Rewards.svg';
import DotStakingIcon from '@icon/dot-Staking.svg';
import EarnIcon from '@icon/Earn-while-playing.svg';
import ETHIcon from '@icon/eth-16.svg';
import FloppyDiskBlueIcon from '@icon/floppyDisk-blue-34.svg';
import FloppyDiskGreenIcon from '@icon/floppyDisk-green-34.svg';
import FloppyDiskYellowIcon from '@icon/floppyDisk-yellow-34.svg';
import FunctionalityIcon from '@icon/Functionality.svg';
import FundraisingIcon from '@icon/Fundraising.svg';
import ScheduleIcon from '@icon/Schedule.svg';
import TwitterXIcon from '@icon/twitterX-20.svg';
import USDCIcon from '@icon/usdc-16.svg';
import USDTIcon from '@icon/usdt-16.svg';
import useAnimationsLoader from '@hooks/useAnimationsLoader.ts';

const Lottie = React.lazy(() => import('lottie-react'));

const animationsLottie = [
    () => import('@assets/animation/screen1/screen1_with_background.json'),
    () => import('@assets/animation/screen2/screen2_without_background.json'),
    () => import('@assets/animation/screen3/screen3_steps_without_background.json'),
    () => import('@assets/animation/screen4/screen4_without_background.json')
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

    const optionsTokenFeatures = [
        {
            label: 'Fundraising',
            icon: <FundraisingIcon />,
            text: '$FOFI will help us raise funds to bring FOMO Fights to life. Buying early supports the game and allows you to benefit from potential price increases as the game progresses.'
        },
        {
            label: 'Earn while playing',
            icon: <EarnIcon />,
            text: 'Receive $FOFI as rewards as you advance through game levels. Once the token is listed on exchanges, convert it to other cryptocurrencies on DEXs and CEXs.'
        },

        {
            label: 'Functionality',
            icon: <FunctionalityIcon />,
            text: 'Use $FOFI within the game to purchase items, skins, and unlock special features. Customize your character with hundreds of unique combinations.'
        }
    ];

    const optionsTokenomics = [
        { icon: <DotPresaleIcon />, label: 'Presale', value: '40%' },
        { icon: <DotMarketingIcon />, label: 'Marketing', value: '16.5%' },
        { icon: <DotLiquidIcon />, label: 'Liquidity', value: '14.5%' },
        { icon: <DotStakingIcon />, label: 'Staking', value: '12%' },
        { icon: <DotRewardsIcon />, label: 'Community rewards', value: '9.5%' },
        { icon: <DotFoundsIcon />, label: 'Project funds', value: '7.5%' }
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
                <div className="flex flex-col gap-16px">
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
                <div className="flex flex-col gap-16px">
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
                <div className="flex flex-col gap-16px">
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
                    <div className={`${styles.s1ContainerW}`}>
                        <div className={`${styles.s1H1ContentW}`}>
                            <h1>FOMO Fights</h1>
                        </div>
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

            <section className="bg-purple-4">
                <div className={`container ${styles.s2ContainerW}`}>
                    <div className={`${styles.rowSliderContainer} overflow-hidden`}>
                        <div className={`${styles.rowSlideW}`}>
                            <h3>Title</h3>
                            <p className="body-s-1">FOMO Fights - The Legendary Blockchain Meme Battle</p>
                        </div>
                        <div className={`${styles.rowSlideW}`}>
                            <h3>Title</h3>
                            <p className="body-s-1">FOMO Fights - The Legendary Blockchain Meme Battle</p>
                        </div>
                        <div className={`${styles.rowSlideW}`}>
                            <h3>Title</h3>
                            <p className="body-s-1">FOMO Fights - The Legendary Blockchain Meme Battle</p>
                        </div>
                        <div className={`${styles.rowSlideW}`}>
                            <h3>Title</h3>
                            <p className="body-s-1">FOMO Fights - The Legendary Blockchain Meme Battle</p>
                        </div>
                        <div className={`${styles.rowSlideW}`}>
                            <h3>Title</h3>
                            <p className="body-s-1">FOMO Fights - The Legendary Blockchain Meme Battle</p>
                        </div>
                        <div className={`${styles.rowSlideW}`}>
                            <h3>Title</h3>
                            <p className="body-s-1">FOMO Fights - The Legendary Blockchain Meme Battle</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.yellowTitleBg}`}>
                <div className={`container ${styles.s3ContainerW}`}>
                    <div className={`${styles.s3TabW}`}>
                        <Tabs activeTab={activeTab} onTabChange={setActiveTab} tabs={tabs} />
                        <div className={`${styles.s3TabBottomPanel}`}>
                            <div className={`${styles.s3TabBottomPanelTitleW}`}>
                                <p className="body-m-2 text-color-blue-3">Audit by</p>
                            </div>
                            <div className="flex flex-row items-center gap-8px p-16 grow">
                                <SoldProofFolderIcon />
                                <p className="body-s-2">SoldProof</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.s3AnimationW}`}>
                        {isAboveMobile && animations[1]
                            ? (
                                    <Lottie animationData={animations[1]} loop={true} autoplay={true} />
                                )
                            : (
                                    <div> Bakground </div>
                                )}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <p className="h2-1">RoadMAP</p>
                </div>
            </section>

            <section className={`${styles.s5Section}`}>
                <div className={`container ${styles.s5ContainerW}`}>
                    <div className={`${styles.s5ContentW}`}>
                        <div className={`${styles.s5TitleW} ${stylesHead.head} ${stylesHead.headYellow}`}>
                            <h2>$FOFI Token Features</h2>
                        </div>
                        <ul className={`${styles.s5List} grow`}>

                            {
                                optionsTokenFeatures.map((option) => (
                                    <li className={`${styles.s5FeatureCardW}`} key={option.label}>
                                        <div className={`${styles.s5FeatureTitle}`}>
                                            {option.icon}
                                            <p className="body-s-1">{option.label}</p>
                                        </div>
                                        <div className={`${styles.s5FeatureCardContent}`}>
                                            <p className="body-s-1">
                                                {option.text}
                                            </p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className={`${styles.s5BottomDividerW} ${stylesHead.head} ${stylesHead.headYellow}`} />
                    </div>

                    <div className={`${styles.s5ContentW}`}>
                        <div className={`${styles.s5TitleW} ${stylesHead.head} ${stylesHead.headLightPink}`}>
                            <h2>Tokenomics</h2>
                        </div>
                        <div className={`${styles.s5TokenomiksW} grow`}>
                            <ScheduleIcon />
                            <ul className={`${styles.s5TokenomiksList}`}>
                                {
                                    optionsTokenomics.map((option) => (
                                        <li className="flex flex-row items-center gap-6px" key={option.label}>
                                            {option.icon}
                                            <p className="body-l-1">
                                                {option.label}
                                                {' '}
                                                -
                                                {' '}
                                                {option.value}
                                            </p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={`${styles.s5BottomDividerW} ${stylesHead.head} ${stylesHead.headLightPink}`} />
                    </div>
                </div>
            </section>

            <section className={`${styles.s6Section}`}>
                <div className={`container relative ${styles.s6ContainerW}`}>
                    <SliderCustom classNameContainer="">
                        <div>
                            <div
                                className={`${stylesHead.head} ${stylesHead.headLightPink}`}
                            >
                                <div className={`${styles.s6SliderTitleW}`}>
                                    <h2 className="h2-2">Step 1</h2>
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
                                    <h2>Connect</h2>
                                </div>

                            </div>
                            <div className={`${styles.s6SliderContentW}`}>
                                <h3>Connect your wallet</h3>
                                <p className="body-m-1">
                                    Connect your wallet to the presale widget at the top of this page. When you click
                                    Connect Wallet, you will see the list of the wallets we support.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`${stylesHead.head} ${stylesHead.headGreen}`}
                            >
                                <div className={`${styles.s6SliderTitleW}`}>
                                    <h2 className="h2-2">Step 2</h2>
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
                                    <h2>Checking</h2>
                                </div>

                            </div>
                            <div className={`${styles.s6SliderContentW}`}>
                                <h3>Сheck your wallet</h3>
                                <p className="body-m-1">
                                    Make sure you have a sufficient amount of crypto (ETH, BNB, SOL, USDT) in your
                                    wallet to cover the transaction cost and gas fees.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`${stylesHead.head} ${stylesHead.headDarkBeige}`}
                            >
                                <div className={`${styles.s6SliderTitleW}`}>
                                    <h2 className="h2-2">Step 3</h2>
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
                            <div className={`${styles.s6SliderContentW}`}>
                                <h3>Purchase $FOFI</h3>
                                <p className="body-m-1">
                                    Select the network of your choice, input the amount, and proceed to purchase your
                                    $FOFI.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`${stylesHead.head} ${stylesHead.headPurple}`}
                            >
                                <div className={`${styles.s6SliderTitleW}`}>
                                    <h2 className="h2-2">Step 31</h2>
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
                            <div className={`${styles.s6SliderContentW}`}>
                                <h3>Purchase $FOFI</h3>
                                <p className="body-m-1">
                                    In the widget, select the network of your choice,
                                    input the amount, and proceed to purchase your $FOFI.
                                </p>
                            </div>
                        </div>
                    </SliderCustom>

                    <div className={`absolute ${styles.s6AnimationW}`}>
                        {isAboveMobile && animations[2]
                            ? (
                                    <Lottie animationData={animations[2]} loop={true} autoplay={true} />
                                )
                            : (
                                    <div> Bakground </div>
                                )}
                    </div>
                </div>
            </section>

            <section className={styles.s7Section}>

                <div className={`container relative ${styles.s7ContainerW}`}>
                    <ScrollContainer
                        onScroll={(e) => console.log(e)}
                        header={
                            (<h2>FAQ</h2>)
                        }
                        height={400}
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
                    <div className={`absolute ${styles.s7AnimationW}`}>
                        {isAboveMobile && animations[3]
                            ? (
                                    <Lottie animationData={animations[3]} loop={true} autoplay={true} />
                                )
                            : (
                                    <div> Bakground </div>
                                )}
                    </div>
                </div>

            </section>

            <section className="mt-64">
                <div className="container" style={{ height: '500px', width: '1000px' }} />
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
