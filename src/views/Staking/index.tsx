import { useState } from 'react';

import styles from './index.module.css';

import stylesHead from '@styles/baseBlock.module.css';
import BaseButton from '@components/common/Button/baseButton.tsx';
import Modal from '@components/common/Modal';
import Graph from '@components/Graph';

function StakingPage() {
    const [isOpenStakeBNB, setOpenStakeBNB] = useState(false);

    const handleModalClose = () => {
        setOpenStakeBNB(false);
    };

    const handleModalOpen = () => {
        setOpenStakeBNB(true);
    };

    return (

        <section className={`${styles.stakingSection}`}>
            <div className={`container ${styles.stakingContainer}`}>
                <div className={styles.stakingH1Container}>
                    <div className={`${styles.stakingH1W} ${stylesHead.head} ${stylesHead.headDarkBeige6}`}>
                        <h1>$FOFI Staking</h1>
                    </div>
                    <div className="p-16">
                        <h2 className="h2-3">FOMO Fights ($FOFI) Staking</h2>
                        <p className="body-m-1 mt-12">
                            Stake $FOFI on Ethereum to earn rewards over time. The APR is
                            dynamic and adjusts based on market conditions to ensure optimal returns.
                        </p>
                        <p className="body-m-1 mt-12">
                            Staking rewards can be claimed 7 days after the Presale has ended.
                        </p>
                        <BaseButton
                            onClick={handleModalOpen}
                            type="primary"
                            aria-controls="connect-wallet-modal"
                            className="w-full mt-24"
                        >
                            stake with bnb
                        </BaseButton>
                    </div>
                </div>
                <div />
                <div className={styles.stakingH1Container}>
                    <div className={`${styles.stakingH1W} ${stylesHead.head} ${stylesHead.headDarkBeige6}`}>
                        <h2 className="h1">Total Supply</h2>
                    </div>
                    <Graph />
                </div>

            </div>
            {isOpenStakeBNB && (
                <Modal
                    onClose={handleModalClose}
                    title={<h2>Stake with BNB</h2>}
                    id="connect-wallet-modal"
                    role="dialog"
                    aria-labelledby="connect-wallet-title"
                >
                    <div />
                </Modal>
            )}
        </section>
    )
    ;
}

export default StakingPage;
