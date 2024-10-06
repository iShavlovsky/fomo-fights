import { useState } from 'react';

import styles from './index.module.css';

import stylesHead from '@styles/baseBlock.module.css';
import BaseButton from '@components/common/Button/baseButton.tsx';
import Modal from '@components/common/Modal';
import Graph from '@components/Graph';
import StakedBalance from '@components/StakingPageForms/StakedBalance.tsx';
import StakedClaim from '@components/StakingPageForms/StakedClaim.tsx';
import StakedRewards from '@components/StakingPageForms/StakedRewards.tsx';
import StakedWithdraw from '@components/StakingPageForms/StakedWithdraw.tsx';

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
            <div className="container">
                <div className={`${styles.stakingContainer}`}>
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
                                aria-controls="stake-with-bnb-modal"
                                className="w-full mt-20"
                            >
                                stake with bnb
                            </BaseButton>
                        </div>
                    </div>

                    <div className={styles.stakingRightFormsW}>
                        <StakedBalance />
                        <StakedWithdraw />
                        <StakedRewards />
                        <StakedClaim />
                    </div>

                    <div className={styles.stakingH1Container}>
                        <div className={`${styles.stakingH1W} ${stylesHead.head} ${stylesHead.headDarkBeige6}`}>
                            <h2 className="h1">Total Supply</h2>
                        </div>
                        <Graph />
                    </div>
                </div>
            </div>
            {isOpenStakeBNB && (
                <Modal
                    onClose={handleModalClose}
                    title={<h2>Stake with BNB</h2>}
                    id="stake-with-bnb-modal"
                    role="dialog"
                    aria-labelledby="stake-with-bnb-title"
                >
                    <div />
                </Modal>
            )}
        </section>
    )
    ;
}

export default StakingPage;
