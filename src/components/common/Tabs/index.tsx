import React, { ReactNode } from 'react';

import styles from './tabs.module.css';

interface TabProps {
    label: ReactNode;
    children: ReactNode;
}

interface TabsProps {
    activeTab: number;
    onTabChange: (index: number) => void;
    children: ReactNode;
}

const Tab = ({ children }: TabProps) => <div>{children}</div>;

const Tabs = ({ activeTab, onTabChange, children }: TabsProps) => {
    return (
        <div>
            <ul className={styles.tabList} role="tablist">
                {React.Children.map(children, (child, index) => {
                    if (React.isValidElement(child) && child.type === Tab) {
                        return (
                            <li
                                role="tab"
                                aria-selected={activeTab === index}
                                className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
                                onClick={() => onTabChange(index)}
                            >
                                {child.props.label}
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
            <div className={styles.tabContent}>
                {React.Children.map(children, (child, index) => {
                    if (React.isValidElement(child) && child.type === Tab && activeTab === index) {
                        return (
                            <div role="tabpanel">{child.props.children}</div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export { Tabs, Tab };
