import { ReactNode } from 'react';

import styles from './tabs.module.css';

interface TabItem {
    tab: ReactNode;
    content: ReactNode;
}

interface TabsProps {
    activeTab: number;
    onTabChange: (index: number) => void;
    tabs: TabItem[];
}

const Tabs = ({ activeTab, onTabChange, tabs }: TabsProps) => {
    return (
        <div>
            <ul className={styles.tabList} role="tablist">
                {tabs.map((tabItem, index) => (
                    <li
                        key={index}
                        role="tab"
                        aria-selected={activeTab === index}
                        className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
                        onClick={() => onTabChange(index)}
                    >
                        {tabItem.tab}
                    </li>
                ))}
            </ul>

            <div className={styles.tabContentWrapper}>
                {tabs.map((tabItem, index) => (
                    <div
                        key={index}
                        className={`${styles.tabContent} ${activeTab === index ? styles.active : ''}`}
                        role="tabpanel"
                    >
                        {tabItem.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export { Tabs };
