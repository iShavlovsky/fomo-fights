import React from 'react';

import styles from './index.module.css';

import useAnimationsLoader from '@hooks/useAnimationsLoader.ts';

const animationsLottie = [
    () => import('@assets/animation/screen5/footer_with_background.json')
];

const Lottie = React.lazy(() => import('lottie-react'));
function Footer() {
    const { animations, isAboveMobile } = useAnimationsLoader(
        '(min-width: 769px)',
        animationsLottie
    );

    return (
        <footer className={styles.footer}>
            {isAboveMobile && animations[0]
                ? (
                        <Lottie animationData={animations[0]} loop={true} autoplay={true} />
                    )
                : (
                        <div> Bakground </div>
                    )}
        </footer>
    );
}

export default Footer;
