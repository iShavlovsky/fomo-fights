import styles from './index.module.css';

import stylesHead from '@styles/baseBlock.module.css';

interface IPropsGraph {
    month: string;
    supplyBarHeight: string;
    highLightBar?: boolean;
}

const dataGraph: IPropsGraph[] = [
    { month: 'May 2024', supplyBarHeight: '91.00%' },
    { month: 'Jun 2024', supplyBarHeight: '91.27%' },
    { month: 'Jul 2024', supplyBarHeight: '91.54%' },
    { month: 'Aug 2024', supplyBarHeight: '91.81%', highLightBar: true },
    { month: 'Sep 2024', supplyBarHeight: '92.08%' },
    { month: 'Oct 2024', supplyBarHeight: '92.35%' },
    { month: 'Nov 2024', supplyBarHeight: '92.62%' },
    { month: 'Dec 2024', supplyBarHeight: '92.89%' },
    { month: 'Jan 2025', supplyBarHeight: '93.16%' },
    { month: 'Feb 2025', supplyBarHeight: '93.43%' },
    { month: 'Mar 2025', supplyBarHeight: '93.70%' },
    { month: 'Apr 2025', supplyBarHeight: '93.97%' },
    { month: 'May 2025', supplyBarHeight: '94.24%' },
    { month: 'Jun 2025', supplyBarHeight: '94.51%' },
    { month: 'Jul 2025', supplyBarHeight: '94.78%' },
    { month: 'Aug 2025', supplyBarHeight: '95.05%' },
    { month: 'Sep 2025', supplyBarHeight: '95.32%' },
    { month: 'Oct 2025', supplyBarHeight: '95.59%' },
    { month: 'Nov 2025', supplyBarHeight: '95.86%' },
    { month: 'Dec 2025', supplyBarHeight: '96.13%' },
    { month: 'Jan 2026', supplyBarHeight: '96.40%' },
    { month: 'Feb 2026', supplyBarHeight: '96.67%' },
    { month: 'Mar 2026', supplyBarHeight: '96.94%' },
    { month: 'Apr 2026', supplyBarHeight: '97.21%' },
    { month: 'May 2026', supplyBarHeight: '97.48%' },
    { month: 'Jun 2026', supplyBarHeight: '97.75%' },
    { month: 'Jul 2026', supplyBarHeight: '98.02%' },
    { month: 'Aug 2026', supplyBarHeight: '98.29%' },
    { month: 'Sep 2026', supplyBarHeight: '98.56%' },
    { month: 'Oct 2026', supplyBarHeight: '98.83%' },
    { month: 'Nov 2026', supplyBarHeight: '99.10%' },
    { month: 'Dec 2026', supplyBarHeight: '99.37%' },
    { month: 'Jan 2027', supplyBarHeight: '99.64%' },
    { month: 'Feb 2027', supplyBarHeight: '99.91%' },
    { month: 'Mar 2027', supplyBarHeight: '100.00%' },
    { month: 'Apr 2027', supplyBarHeight: '100.00%' }
] as const;

const Graph = () => {
    return (
        <div className={styles.graphSection}>
            <div className={`${styles.graphContainer}`}>
                <div className={`${styles.graphFirstCol}`}>
                    <p className="body-xs-1">Supply</p>
                </div>
                <div className={`flex flex-col justify-between ${styles.graphLeftCol}`}>
                    <p className="body-xs-1">8b</p>
                    <p className="body-xs-1">6b</p>
                    <p className="body-xs-1">4b</p>
                    <p className="body-xs-1">2b</p>
                    <p className="body-xs-1">0b</p>
                </div>

                <div className={styles.graphRightCol}>
                    <div className={`grow ${styles.graphIndicatorsContainer}`}>
                        {dataGraph.map((optionBar) => (
                            <div className={styles.graphIndicatorW} key={optionBar.month}>
                                <div className={styles.graphIndicatorLine} />
                                <div
                                    className={`
                                ${styles.graphIndicatorBar} 
                                ${stylesHead.head} 
                                ${optionBar.highLightBar ? stylesHead.headPurple : stylesHead.headDarkBeige6} `}
                                    style={{ height: optionBar.supplyBarHeight }}
                                />
                                <p className="body-xs-1">{optionBar.month}</p>
                            </div>
                        ))}
                        <div className={styles.graphLinesW}>
                            <div className={styles.graphLineHorizontal} />
                            <div className={styles.graphLineHorizontal} />
                            <div className={styles.graphLineHorizontal} />
                            <div className={styles.graphLineHorizontal} />
                            <div className={styles.graphLineHorizontal} />
                        </div>
                    </div>
                </div>
                <div />
            </div>
            <div className={`${styles.graphBottomTitleW}`}>
                <p className="body-xs-1">Months</p>
            </div>
        </div>
    );
};

export default Graph;
