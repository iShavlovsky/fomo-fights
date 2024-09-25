import React, { useEffect, useState } from 'react';

import BaseButton from '@components/common/Button/baseButton.tsx';
import Dropdown, { DropdownOptionSelected } from '@components/common/Dropdown';
import Modal from '@components/common/Modal';
import RadioButtonGroup from '@components/common/RadioButtonGroup';
import ScrollContainer from '@components/common/ScrollContainer';
import { Tabs } from '@components/common/Tabs';
import ArrowIcon from '@icon/arrow-16.svg';
import ClosedIcon from '@icon/closed-16.svg';
import ETHIcon from '@icon/eth-16.svg';
import FloppyDiskBlueIcon from '@icon/floppyDisk-blue-34.svg';
import FloppyDiskGreenIcon from '@icon/floppyDisk-green-34.svg';
import FloppyDiskYellowIcon from '@icon/floppyDisk-yellow-34.svg';
import LanguageIcon from '@icon/language-16.svg';
import TwitterXIcon from '@icon/twitterX-20.svg';
import USDCIcon from '@icon/usdc-16.svg';
import USDTIcon from '@icon/usdt-16.svg';
import { useMediaQuery } from '@hooks/useMediaQuery.ts';

const Lottie = React.lazy(() => import('lottie-react'));

function HomePage() {
    const isAboveMobile = useMediaQuery('(min-width: 769px)'); // Определяем брейкпоинт выше мобильного
    const [animations, setAnimations] = useState<unknown[]>([]);
    const [activeTab, setActiveTab] = useState(0);

    const [isModalActive, setModalActive] = useState(false);

    const handleModalOpen = () => {
        setModalActive(true);
    };
    const handleModalClose = () => {
        setModalActive(false);
    };

    useEffect(() => {
        if (isAboveMobile) {
            // Используем Promise.allSettled для обработки всех промисов независимо от их статуса
            Promise.allSettled([
                import('@assets/animation/screen1/screen1_without_background.json'),
                import('@assets/animation/screen2/screen2_with_background.json'),
                import('@assets/animation/screen3/screen3_steps_with_background.json'),
                import('@assets/animation/screen4/screen4_with_background.json'),
                import('@assets/animation/screen5/footer_with_background.json')
            ])
                .then((results) => {
                    const loadedAnimations = results.map((result) =>
                        result.status === 'fulfilled' ? result.value.default : null
                    );
                    setAnimations(loadedAnimations);
                    return true;
                })
                .catch((error) => console.error('Error loading animations:', error));
        }
    }, [isAboveMobile]);

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
            tab: (
                <>
                    <FloppyDiskYellowIcon />
                    <span className="body-s">$FOFI</span>
                </>
            ),
            content: (
                <div>
                    <h2>About $FOFI</h2>
                    <p className="body-m">
                        With the $FOFI token, you’re more than just a player — you become part of the game&apos;s development
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
                    <span className="body-s">Community</span>
                </>
            ),
            content: (
                <div>
                    <h2>Community</h2>
                    <p className="body-m">
                        By holding $FOFI and joining our community on social media, you can help shape the game&apos;s
                        direction, connect with fellow players, and stay updated on the latest developments. Once the
                        game is live, use $FOFI to purchase in-game items and earn even more by jumping right into the
                        battle!
                    </p>
                </div>
            )
        }
    ];

    const optionals = [
        {
            abbreviation: 'About',
            label: (<p className="body-m">About</p>),
            onClick: () => console.log('Button 1 clicked')
        },
        {
            abbreviation: 'Google',
            label: (<p className="body-m">Google</p>),
            onClick: () => console.log('Button 1 clicked')
        },
        {
            abbreviation: 'Button 2',
            label: (<p className="body-m">Button 2</p>),
            onClick: () => console.log('Button 2 clicked')
        },
        {
            abbreviation: 'Button 3',
            label: (<p className="body-m">Button 3</p>),
            onClick: () => console.log('Button 1 clicked')
        }
    ] satisfies DropdownOptionSelected[];

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
            <section className="mt-64">
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
                            <p className="body-m">
                                FOMO Fights is a blockchain-based Play-to-Earn multiplayer game,
                                where you can pick your favorite character, battle other memes,
                                and
                                earn rewards.
                            </p>
                        </div>
                        <div>
                            <h3>What is FOMO Fights?</h3>
                            <p className="body-m">
                                FOMO Fights is a blockchain-based Play-to-Earn multiplayer game,
                                where you can pick your favorite character, battle other memes,
                                and
                                earn rewards.
                            </p>
                        </div>
                        <div>
                            <h3>What is FOMO Fights?</h3>
                            <p className="body-m">
                                FOMO Fights is a blockchain-based Play-to-Earn multiplayer game,
                                where you can pick your favorite character, battle other memes,
                                and
                                earn rewards.
                            </p>
                        </div>
                        <div>
                            <h3>What is FOMO Fights?</h3>
                            <p className="body-m">
                                FOMO Fights is a blockchain-based Play-to-Earn multiplayer game,
                                where you can pick your favorite character, battle other memes,
                                and
                                earn rewards.
                            </p>
                        </div>
                        <div>
                            <h3>What is FOMO Fights?</h3>
                            <p className="body-m">
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
                <div className="container" style={{ height: '500px', width: '100%' }}>
                    <Tabs activeTab={activeTab} onTabChange={setActiveTab} tabs={tabs} />
                    <Dropdown
                        options={optionals}
                        ddTitle="DDtitle"
                        ddIcon={<LanguageIcon />}
                        ddToggleIcon={<ArrowIcon />}
                        selectedLabel={false}
                    />
                    <Dropdown
                        options={optionals}
                        autoClose={false}
                        ddTitle="DDtitle"
                        ddIcon={<LanguageIcon />}
                        ddToggleIcon={<ArrowIcon />}
                        selectedLabel={true}
                    />

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
