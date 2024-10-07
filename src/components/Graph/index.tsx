import styles from './index.module.css';

import stylesHead from '@styles/baseBlock.module.css';

interface IPropsGraph {
    month: string;
    supplyBarHeight: string;
    highLightBar?: boolean;
}

const dataGraph: IPropsGraph[] = [
    { month: 'May\u00A02024', supplyBarHeight: '91.00%' },
    { month: 'Jun\u00A02024', supplyBarHeight: '91.27%' },
    { month: 'Jul\u00A02024', supplyBarHeight: '91.54%' },
    { month: 'Aug\u00A02024', supplyBarHeight: '91.81%', highLightBar: true },
    { month: 'Sep\u00A02024', supplyBarHeight: '92.08%' },
    { month: 'Oct\u00A02024', supplyBarHeight: '92.35%' },
    { month: 'Nov\u00A02024', supplyBarHeight: '92.62%' },
    { month: 'Dec\u00A02024', supplyBarHeight: '92.89%' },
    { month: 'Jan\u00A02025', supplyBarHeight: '93.16%' },
    { month: 'Feb\u00A02025', supplyBarHeight: '93.43%' },
    { month: 'Mar\u00A02025', supplyBarHeight: '93.70%' },
    { month: 'Apr\u00A02025', supplyBarHeight: '93.97%' },
    { month: 'May\u00A02025', supplyBarHeight: '94.24%' },
    { month: 'Jun\u00A02025', supplyBarHeight: '94.51%' },
    { month: 'Jul\u00A02025', supplyBarHeight: '94.78%' },
    { month: 'Aug\u00A02025', supplyBarHeight: '95.05%' },
    { month: 'Sep\u00A02025', supplyBarHeight: '95.32%' },
    { month: 'Oct\u00A02025', supplyBarHeight: '95.59%' },
    { month: 'Nov\u00A02025', supplyBarHeight: '95.86%' },
    { month: 'Dec\u00A02025', supplyBarHeight: '96.13%' },
    { month: 'Jan\u00A02026', supplyBarHeight: '96.40%' },
    { month: 'Feb\u00A02026', supplyBarHeight: '96.67%' },
    { month: 'Mar\u00A02026', supplyBarHeight: '96.94%' },
    { month: 'Apr\u00A02026', supplyBarHeight: '97.21%' },
    { month: 'May\u00A02026', supplyBarHeight: '97.48%' },
    { month: 'Jun\u00A02026', supplyBarHeight: '97.75%' },
    { month: 'Jul\u00A02026', supplyBarHeight: '98.02%' },
    { month: 'Aug\u00A02026', supplyBarHeight: '98.29%' },
    { month: 'Sep\u00A02026', supplyBarHeight: '98.56%' },
    { month: 'Oct\u00A02026', supplyBarHeight: '98.83%' },
    { month: 'Nov\u00A02026', supplyBarHeight: '99.10%' },
    { month: 'Dec\u00A02026', supplyBarHeight: '99.37%' },
    { month: 'Jan\u00A02027', supplyBarHeight: '99.64%' },
    { month: 'Feb\u00A02027', supplyBarHeight: '99.91%' },
    { month: 'Mar\u00A02027', supplyBarHeight: '100.00%' },
    { month: 'Apr\u00A02027', supplyBarHeight: '100.00%' }
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
