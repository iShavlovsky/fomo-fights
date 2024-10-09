import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

import styles from './index.module.css';

import stylesHead from '@styles/baseBlock.module.css';
import DropDownMain from '@components/common/DropdownMain';
import DropDownSecond from '@components/common/DropdownSecond';
import ScrollContainer from '@components/common/ScrollContainer';
import SliderCustom from '@components/common/SliderCustom';
import { Tabs } from '@components/common/Tabs';
import StakingForm from '@components/StakingForm';
import SoldProofFolderIcon from '@icon/About-FOMO-Fights.svg';
import DotFoundsIcon from '@icon/dot-Funds.svg';
import DotLiquidIcon from '@icon/dot-Liquidity.svg';
import DotMarketingIcon from '@icon/dot-Marketing.svg';
import DotPresaleIcon from '@icon/dot-Presale.svg';
import DotRewardsIcon from '@icon/dot-Rewards.svg';
import DotStakingIcon from '@icon/dot-Staking.svg';
import EarnIcon from '@icon/Earn-while-playing.svg';
import FloppyDiskBlueIcon from '@icon/floppyDisk-blue-34.svg';
import FloppyDiskGreenIcon from '@icon/floppyDisk-green-34.svg';
import FloppyDiskYellowIcon from '@icon/floppyDisk-yellow-34.svg';
import FunctionalityIcon from '@icon/Functionality.svg';
import FundraisingIcon from '@icon/Fundraising.svg';
import LogoExampleIcon from '@icon/logoExample.svg';
import RoadMapLine1Icon from '@icon/rodamap-line-1.svg';
import RoadMapLine2Icon from '@icon/rodamap-line-2.svg';
import RoadMapLine3Icon from '@icon/rodamap-line-3.svg';
import RoadMapLine4Icon from '@icon/rodamap-line-4.svg';
import ScheduleIcon from '@icon/Schedule.svg';
import useAnimationsLoader from '@hooks/useAnimationsLoader.ts';

const Lottie = React.lazy(() => import('lottie-react'));

const animationsLottie = [
    () => import('@assets/animation/screen1/screen1.json'),
    () => import('@assets/animation/screen2/screen2.json'),
    () => import('@assets/animation/screen3/screen3.json'),
    () => import('@assets/animation/screen4/screen4.json')
];

interface OpenStates {
    [key: number]: boolean;
}

function HomePage() {
    const [activeTab, setActiveTab] = useState(0);

    const [openIndexDD1, setOpenIndexDD1] = useState(0);
    const handleClickDropDown1 = (index: number) => {
        setOpenIndexDD1(index === openIndexDD1 ? -1 : index);
    };

    const [openStates, setOpenStates] = useState<OpenStates>({ 0: true });
    const handleClickDropDown2 = (index: number) => {
        setOpenStates((prevStates) => ({
            ...prevStates,
            [index]: !prevStates[index]
        }));
        console.log(openStates);
    };

    const { animations, isAboveMobile } = useAnimationsLoader(
        '(min-width: 1025px)',
        animationsLottie);

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

    const dataHeroDD = [
        {
            title: '$FOFI tokens',
            content: 'Don’t miss your chance to get ahead by securing $FOFI tokens during this exclusive Presale offer. Join us in bringing the game to life and start earning rewards today.'
        },
        {
            title: 'About game',
            content: 'Grab your $FOFI tokens now and be a part of the most exciting blockchain revolution. Start earning today!'
        }
    ];

    const dataMarquee = [
        {
            logo: <LogoExampleIcon />,
            content: 'FOMO Fights - The Legendary Blockchain Meme Battle'
        },
        {
            logo: <LogoExampleIcon />,
            content: 'FOMO Fights - The Legendary Blockchain Meme Battle'
        },
        {
            logo: <LogoExampleIcon />,
            content: 'FOMO Fights - The Legendary Blockchain Meme Battle'
        },
        {
            logo: <LogoExampleIcon />,
            content: 'FOMO Fights - The Legendary Blockchain Meme Battle'
        },
        {
            logo: <LogoExampleIcon />,
            content: 'FOMO Fights - The Legendary Blockchain Meme Battle'
        },
        {
            logo: <LogoExampleIcon />,
            content: 'FOMO Fights - The Legendary Blockchain Meme Battle'
        },
        {
            logo: <LogoExampleIcon />,
            content: 'FOMO Fights - The Legendary Blockchain Meme Battle'
        },
        {
            logo: <LogoExampleIcon />,
            content: 'FOMO Fights - The Legendary Blockchain Meme Battle'
        },
        {
            logo: <LogoExampleIcon />,
            content: 'FOMO Fights - The Legendary Blockchain Meme Battle'
        }
    ];

    const dataFAQDD = [
        {
            title: 'What is FOMO Fights?',
            content: 'FOMO Fights is a blockchain-based Play-to-Earn multiplayer game, where you can pick your favorite character, battle other memes, and earn rewards.'
        },
        {
            title: 'How can I play the game?',
            content: 'Once the game is released, you’ll be able to download FOMO Fights from the Google Play Store or Apple App Store and play on your Android or iOS device. For a closer look at the development process and upcoming milestones, be sure to check our Roadmap.'
        },
        {
            title: 'What meme characters can I play for?',
            content: 'You can choose from 5 characters: Pepe, Doge, Shiba, Floki, and Brett. As FOMO Fights evolves, more iconic meme characters will be added to the game through future updates. Feel free to suggest characters you\'d like to see via our social media channels.'
        },
        {
            title: 'What is the $FOFI token and where can I buy it?',
            content: '$FOFI is the official token of FOMO Fights. You can purchase $FOFI at a special rate during the Presale via the widget at the top of the page. Once the token is listed on exchanges, you will also be able to buy and sell it there.'
        },
        {
            title: 'Which blockchains support $FOFI?',
            content: '$FOFI exists on the Ethereum blockchain. However, you can use your assets on BNB Smart Chain and Solana to purchase $FOFI during the Presale. Please note that you will be able to claim $FOFI only on Ethereum.'
        },
        {
            title: 'Can $FOFI be staked? What APR can I receive?',
            content: 'Yes, you can stake $FOFI through our website to grow your holdings over time. Staking is available on the Ethereum blockchain, with a dynamic APR that adjusts to market conditions. You will be able to receive staking rewards 7 days after the Presale ends.'
        },
        {
            title: 'When will I be able to claim the $FOFI I purchased?',
            content: 'You will be able to claim the $FOFI you bought once the Presale is over. We will have a dedicated claiming page on our website to guide you through the process.'
        },
        {
            title: 'How can I play the game?',
            content: 'Grab your $FOFI tokens now and be a part of the most exciting blockchain revolution. Start earning today!'
        },
        {
            title: 'How do I claim my $FOFI tokens?',
            content: 'The Ethereum, BNB, or Solana wallet you used for the purchase will be whitelisted, and on the claiming page, connect the same wallet and provide an Ethereum wallet address to receive your $FOFI tokens. Claiming is only available on Ethereum. If you used an Ethereum wallet to buy $FOFI, you can use the same or provide a different Ethereum address to claim your tokens.'
        },
        {
            title: 'How can I claim the tokens if I pay with a card?',
            content: 'When you pay with a card, you\'ll be asked to provide an Ethereum wallet address during the purchase. Use the same wallet to claim your $FOFI.'
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

    return (
        <>
            <section className="bg-purple-4">
                <div className="container relative">
                    <div className={`${styles.s1ContainerW}`}>

                        <div className={`${styles.s1H1ContentW}`}>

                            <div className={`title-w ${stylesHead.head} ${stylesHead.headDarkBeige6}`}>
                                <h1 className="h2-1 text-center w-full">FOMO Fights</h1>
                            </div>
                            <div className="p-16 flex flex-col gap-12px bg-beige-9">
                                <h2 className="h2-3">
                                    The Legendary Blockchain Meme&nbsp;Battle
                                </h2>
                                <p className="body-m-1 text-color-monochrome-9">
                                    FOMO Fights is a Web3 Play-to-Earn multiplayer game where
                                    memecoin characters clash for the ultimate meme supremacy.
                                    {' '}
                                </p>
                                <ul className={`flex flex-col gap-12px ${styles.s1DdInfoW}`}>
                                    {dataHeroDD.map((item, index) => (
                                        <DropDownMain
                                            key={index}
                                            title={item.title}
                                            content={item.content}
                                            isOpen={openIndexDD1 === index}
                                            onClick={() => handleClickDropDown1(index)}
                                        />
                                    ))}
                                </ul>
                            </div>

                        </div>
                        <StakingForm />
                    </div>
                    <div className={`absolute ${styles.s1AnimationW}`}>
                        {isAboveMobile && animations[0]
                            ? (
                                    <Lottie animationData={animations[0]} loop={true} autoplay={true} />
                                )
                            : (
                                    <div />
                                )}
                    </div>
                </div>
            </section>

            <section className="bg-purple-4">
                <div className="container">
                    <div className={styles.s2ContainerW}>
                        <Marquee
                            className={`${styles.rowSliderContainer}`}
                            pauseOnHover={true}
                        >

                            {
                                dataMarquee.map((option, index) => (
                                    <div className={`${styles.rowSlideW}`} key={index}>
                                        {option.logo}
                                        <p className="body-s-1">
                                            {option.content}
                                        </p>
                                    </div>
                                ))
                            }
                        </Marquee>
                    </div>
                </div>
            </section>

            <section className={`${styles.yellowTitleBg}`} id="about">
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
                                    <div />
                                )}
                    </div>
                </div>
            </section>

            <section className={`relative ${styles.s4Section}`} id="roadmap">
                <div className={`container ${styles.s4ContainerW}`}>
                    <div className={`flex flex-row justify-content-center ${styles.s4TitleW}`}>
                        <h2 className="h2-1 relative">RoadMAP</h2>
                    </div>
                    <div className={`${styles.s4Row}`}>
                        <div className={`${styles.s4Card}`}>

                            <div className={`bg-purple-5 ${styles.s4CardTitle}`}>
                                <h3 className="h2-2">Round 1</h3>
                            </div>

                            <ul className={`${styles.s4CardContent} ${styles.round1}`}>
                                <li><p className="body-m-1">Fundraising via Presale</p></li>
                                <li><p className="body-m-1">Contract Audit</p></li>
                                <li><p className="body-m-1">Initial Marketing Campaign</p></li>
                            </ul>
                            <div className={`${styles.s4CardLineAndPlanetW} ${styles.line1}`}>
                                <RoadMapLine1Icon />
                                <div className={`absolute ${styles.s4CardPlanet1}`} />
                            </div>
                        </div>
                        <div className={`${styles.s4Card}`}>

                            <div className={`bg-pink-4 ${styles.s4CardTitle}`}>
                                <h3 className="h2-2">Round 2</h3>
                            </div>

                            <ul className={`${styles.s4CardContent}  ${styles.round2}`}>
                                <li><p className="body-m-1">Main Marketing Campaign</p></li>
                                <li><p className="body-m-1">Game Testing</p></li>
                                <li><p className="body-m-1">Beta Version Release</p></li>
                            </ul>
                            <div className={`${styles.s4CardLineAndPlanetW} ${styles.line2}`}>
                                <RoadMapLine2Icon />
                                <div className={`absolute ${styles.s4CardPlanet2}`} />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.s4Row} ${styles.s4Row2}`}>
                        <div className={`${styles.s4Card}`}>

                            <div className={`bg-blue-11 ${styles.s4CardTitle}`}>
                                <h3 className="h2-2">Round 3</h3>
                            </div>

                            <ul className={`${styles.s4CardContent}  ${styles.round3}`}>
                                <li><p className="body-m-1">Main Marketing Campaign</p></li>
                                <li><p className="body-m-1">Game Testing</p></li>
                                <li><p className="body-m-1">Beta Version Release</p></li>
                            </ul>
                            <div className={`${styles.s4CardLineAndPlanetW} ${styles.line3}`}>
                                <RoadMapLine3Icon />
                                <div className={`absolute ${styles.s4CardPlanet3}`} />
                            </div>
                        </div>

                        <div className={`${styles.s4Card}`}>

                            <div className={`bg-blue-7 ${styles.s4CardTitle}`}>
                                <h3 className="h2-2">Round 4</h3>
                            </div>

                            <ul className={`${styles.s4CardContent}  ${styles.round4}`}>
                                <li><p className="body-m-1">Full Game Launch</p></li>
                                <li><p className="body-m-1">Community Airdrop</p></li>
                                <li><p className="body-m-1">$FOFI Token Listing on CEXs</p></li>
                            </ul>
                            <div className={`${styles.s4CardLineAndPlanetW} ${styles.line4}`}>
                                <RoadMapLine4Icon />
                                <div className={`absolute ${styles.s4CardPlanet4}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.s5Section}`} id="how-to-buy">
                <div className={`container ${styles.s5ContainerW}`}>
                    <div className={`${styles.s5ContentW}`}>
                        <div className={`${styles.s5TitleW} ${stylesHead.head} ${stylesHead.headYellow}`}>
                            <h2 className="h2-1">$FOFI Token Features</h2>
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
                                            <p className="body-s-2 text-color-monochrome-8">
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
                            <h2 className="h2-1">Tokenomics</h2>
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
                    <div className="max-w-full">
                        <SliderCustom classNameContainer="">
                            <div className={styles.s6SliderSlide}>
                                <div
                                    className={`${stylesHead.head} ${stylesHead.headYellow}`}
                                >
                                    <div className={`${styles.s6SliderTitleW}`}>
                                        <h2 className="h2-2">Step 1</h2>
                                        <div className={`${styles.s6SliderTitleDivider}`}>
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                        <h2 className="h2-2">Connect</h2>
                                    </div>

                                </div>
                                <div className={`${styles.s6SliderContentW}`}>
                                    <h3>Connect your wallet</h3>
                                    <p className="body-m-1">
                                        Connect your wallet to the presale widget at the top of this page. When you
                                        click
                                        Connect Wallet, you will see the list of the wallets we support.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.s6SliderSlide}>
                                <div
                                    className={`${stylesHead.head} ${stylesHead.headGreenLight}`}
                                >
                                    <div className={`${styles.s6SliderTitleW}`}>
                                        <h2 className="h2-2">Step 2</h2>
                                        <div className={`${styles.s6SliderTitleDivider}`}>
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                        <h2 className="h2-2">Checking</h2>
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
                            <div className={styles.s6SliderSlide}>
                                <div
                                    className={`${stylesHead.head} ${stylesHead.headLightPink}`}
                                >
                                    <div className={`${styles.s6SliderTitleW}`}>
                                        <h2 className="h2-2">Step 3</h2>
                                        <div className={`${styles.s6SliderTitleDivider}`}>
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                        <h2 className="h2-2">Purchase</h2>
                                    </div>

                                </div>
                                <div className={`${styles.s6SliderContentW}`}>
                                    <h3>Purchase $FOFI</h3>
                                    <p className="body-m-1">
                                        Select the network of your choice, input the amount, and proceed to purchase
                                        your
                                        $FOFI.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.s6SliderSlide}>
                                <div
                                    className={`${stylesHead.head} ${stylesHead.headYellow}`}
                                >
                                    <div className={`${styles.s6SliderTitleW}`}>
                                        <h2 className="h2-2">Step 4</h2>
                                        <div className={`${styles.s6SliderTitleDivider}`}>
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                        <h2 className="h2-2">Display</h2>
                                    </div>

                                </div>
                                <div className={`${styles.s6SliderContentW}`}>
                                    <h3>Display $FOFI</h3>
                                    <p className="body-m-1">
                                        Your $FOFI tokens will be displayed in the widget. You will be able to claim
                                        them once the presale is over.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.s6SliderSlide}>
                                <div
                                    className={`${stylesHead.head} ${stylesHead.headGreenLight}`}
                                >
                                    <div className={`${styles.s6SliderTitleW}`}>
                                        <h2 className="h2-2">Step 5</h2>
                                        <div className={`${styles.s6SliderTitleDivider}`}>
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                        <h2 className="h2-2">Choose</h2>
                                    </div>

                                </div>
                                <div className={`${styles.s6SliderContentW}`}>
                                    <h3>Choose $FOFI</h3>
                                    <p className="body-m-1">
                                        You can also choose to stake $FOFI through the widget to grow your holdings over
                                        time.
                                    </p>
                                </div>
                            </div>
                        </SliderCustom>
                    </div>

                    <div className={`absolute ${styles.s6AnimationW}`}>
                        {isAboveMobile && animations[2]
                            ? (
                                    <Lottie animationData={animations[2]} loop={true} autoplay={true} />
                                )
                            : (
                                    <div />
                                )}
                    </div>
                </div>
            </section>

            <section className={styles.s7Section} id="faq">

                <div className={`container relative ${styles.s7ContainerW}`}>
                    <ScrollContainer
                        onScroll={(e) => console.log(e)}
                        header={
                            (<h2>FAQ</h2>)
                        }
                        height={400}
                    >
                        <ul className="flex flex-col gap-12px">
                            {dataFAQDD.map((item, index) => (
                                <DropDownSecond
                                    key={index}
                                    title={item.title}
                                    content={item.content}
                                    isOpen={openStates[index] || false}
                                    onClick={() => handleClickDropDown2(index)}
                                />
                            ))}
                        </ul>
                    </ScrollContainer>
                    <div className={`absolute ${styles.s7AnimationW}`}>
                        {isAboveMobile && animations[3]
                            ? (
                                    <Lottie animationData={animations[3]} loop={true} autoplay={true} />
                                )
                            : (
                                    <div />
                                )}
                    </div>
                </div>

            </section>
        </>
    );
}

export default HomePage;
