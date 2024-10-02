import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './index.module.css';

import BaseButton from '@components/common/Button/baseButton.tsx';
import Github20Icon from '@icon/github-20.svg';
import Instagram20Icon from '@icon/instagram-20.svg';
import LinkTree20Icon from '@icon/linktree-20.svg';
import Telegram20Icon from '@icon/telegram-20.svg';
import TwitterXIcon from '@icon/twitterX-20.svg';
import useAnimationsLoader from '@hooks/useAnimationsLoader.ts';

const animationsLottie = [
    () => import('@assets/animation/screen5/screen6.json')
];

const Lottie = React.lazy(() => import('lottie-react'));

function Footer() {
    const { animations, isAboveMobile } = useAnimationsLoader(
        '(min-width: 1025px)',
        animationsLottie
    );

    return (
        <footer className={styles.footer}>
            <div className={`container relative flex flex-col items-center ${styles.footerContainerW}`}>
                <div className="flex flex-col items-center gap-4px">
                    <NavLink to="/" className={`${styles.footerLogo}`} />
                    <p className="body-l-2 text-center text-color-monochrome-1">
                        Join the legendary blockchain meme battle
                    </p>
                </div>
                <div className="mt-24 flex flex-row">
                    <BaseButton type="secondary" href="https://x.com">
                        <TwitterXIcon />
                    </BaseButton>
                    <BaseButton type="secondary" href="https://x.com">
                        <LinkTree20Icon />
                    </BaseButton>
                    <BaseButton type="secondary" href="https://x.com">
                        <Telegram20Icon />
                    </BaseButton>
                    <BaseButton type="secondary" href="https://x.com">
                        <Instagram20Icon />
                    </BaseButton>
                    <BaseButton type="secondary" href="https://x.com">
                        <Github20Icon />
                    </BaseButton>
                </div>
                <div className={`${styles.footerAnimationW}`}>
                    {isAboveMobile && animations[0]
                        ? (
                                <Lottie animationData={animations[0]} loop={true} autoplay={true} />
                            )
                        : (
                                <div />
                            )}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
