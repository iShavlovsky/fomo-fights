import styles from './index.module.css';

import stylesHead from '@styles/baseBlock.module.css';

const Graph = () => {
    return (
        <div className={`${styles.graphContainer}`}>
            <div className={`${styles.graphFirstCol}`}>
                <p className="body-xs-1">Supply</p>
            </div>
            <div className={`flex flex-col justify-between ${styles.graphLeftCol}`}>
                <p className="body-xs-1 mt-24">8b</p>
                <p className="body-xs-1">6b</p>
                <p className="body-xs-1">4b</p>
                <p className="body-xs-1">2b</p>
                <p className="body-xs-1">0b</p>
            </div>

            <div className={styles.graphRightCol}>
                <div className={`grow ${styles.graphIndicatorsContainer}`}>
                    <div className={styles.graphIndicatorW}>
                        <div className={styles.graphIndicatorLine} />
                        <div
                            className={`${styles.graphIndicatorBar} ${stylesHead.head} ${stylesHead.headDarkBeige6}`}
                        />
                        <p className="body-xs-1">May 2024</p>
                    </div>
                    <div className={styles.graphIndicatorW}>
                        <div className={styles.graphIndicatorLine} />
                        <div
                            className={`${styles.graphIndicatorBar} ${stylesHead.head} ${stylesHead.headDarkBeige6}`}
                        />
                    </div>
                    <div className={styles.graphIndicatorW}>
                        <div className={styles.graphIndicatorLine} />
                        <div
                            className={`${styles.graphIndicatorBar} ${stylesHead.head} ${stylesHead.headDarkBeige6}`}
                        />
                    </div>
                    <div className={styles.graphIndicatorW}>
                        <div className={styles.graphIndicatorLine} />
                        <div
                            className={`${styles.graphIndicatorBar} ${stylesHead.head} ${stylesHead.headDarkBeige6}`}
                        />
                    </div>
                    <div className={styles.graphIndicatorW}>
                        <div className={styles.graphIndicatorLine} />
                        <div
                            className={`${styles.graphIndicatorBar} ${stylesHead.head} ${stylesHead.headDarkBeige6}`}
                        />
                    </div>
                    <div className={styles.graphIndicatorW}>
                        <div className={styles.graphIndicatorLine} />
                        <div
                            className={`${styles.graphIndicatorBar} ${stylesHead.head} ${stylesHead.headDarkBeige6}`}
                        />
                    </div>
                    <div className={styles.graphIndicatorW}>
                        <div className={styles.graphIndicatorLine} />
                        <div
                            className={`${styles.graphIndicatorBar} ${stylesHead.head} ${stylesHead.headDarkBeige6}`}
                        />
                    </div>
                    <div className={styles.graphIndicatorW}>
                        <div className={styles.graphIndicatorLine} />
                        <div
                            className={`${styles.graphIndicatorBar} ${stylesHead.head} ${stylesHead.headDarkBeige6}`}
                        />
                    </div>
                    <div className={styles.graphIndicatorW}>
                        <div className={styles.graphIndicatorLine} />
                        <div
                            className={`${styles.graphIndicatorBar} ${stylesHead.head} ${stylesHead.headDarkBeige6}`}
                        />
                    </div>
                    <div className={styles.graphIndicatorW}>
                        <div className={styles.graphIndicatorLine} />
                        <div
                            className={`${styles.graphIndicatorBar} ${stylesHead.head} ${stylesHead.headDarkBeige6}`}
                        />
                    </div>
                    <div className={styles.graphIndicatorW}>
                        <div className={styles.graphIndicatorLine} />
                        <div
                            className={`${styles.graphIndicatorBar} ${stylesHead.head} ${stylesHead.headDarkBeige6}`}
                        />
                    </div>
                    <div className={styles.graphIndicatorW}>
                        <div className={styles.graphIndicatorLine} />
                        <div
                            className={`${styles.graphIndicatorBar} ${stylesHead.head} ${stylesHead.headDarkBeige6}`}
                        />
                    </div>
                    <div className={styles.graphIndicatorW}>
                        <div className={styles.graphIndicatorLine} />
                        <div
                            className={`${styles.graphIndicatorBar} ${stylesHead.head} ${stylesHead.headDarkBeige6}`}
                        />
                    </div>
                    <div className={styles.graphIndicatorW}>
                        <div className={styles.graphIndicatorLine} />
                        <div
                            className={`${styles.graphIndicatorBar} ${stylesHead.head} ${stylesHead.headDarkBeige6}`}
                        />
                    </div>
                    <div className={styles.graphIndicatorW}>
                        <div className={styles.graphIndicatorLine} />
                        <div
                            className={`${styles.graphIndicatorBar} ${stylesHead.head} ${stylesHead.headDarkBeige6}`}
                        />
                    </div>
                </div>
            </div>
            <div />
        </div>
    );
};

export default Graph;
