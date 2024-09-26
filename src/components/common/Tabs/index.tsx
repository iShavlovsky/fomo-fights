import { type ReactNode } from 'react';

import styles from './index.module.css';

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
                        aria-controls={`tabpanel-${index}`}
                        id={`tab-${index}`}
                        tabIndex={activeTab === index ? 0 : -1}
                        className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
                        onClick={() => onTabChange(index)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                onTabChange(index);
                            }
                        }}
                    >
                        {tabItem.tab}
                    </li>
                ))}
            </ul>

            <div className={styles.tabContentWrapper}>
                {tabs.map((tabItem, index) => (
                    <div
                        key={index}
                        id={`tabpanel-${index}`}
                        role="tabpanel"
                        aria-labelledby={`tab-${index}`}
                        className={`${styles.tabContent} ${activeTab === index ? styles.active : ''}`}
                    >
                        {tabItem.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export { Tabs };
