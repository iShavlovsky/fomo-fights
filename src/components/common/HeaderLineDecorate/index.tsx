import styles from './index.module.css';

import React from "react";

interface HeaderLineDecorateProps {
    title: React.ReactNode;
    titleChildren?: React.ReactNode;
    lineColor?: 'beige4' | 'pink'; // Добавляем выбор цвета
}

const HeaderLineDecorate = ({
                                title,
                                titleChildren,
                                lineColor = 'beige4'
                            }: HeaderLineDecorateProps) => {

    const lineColorClass = lineColor === 'pink'
        ? styles.lineColorPink
        : styles.lineColorBeige4;
    return (
        <div
            className={`flex flex-row ${styles.headerLineDecorate} ${lineColorClass}`}
        >
            <div className={'flex flex-row items-center gap-4px'}>
                {title} {titleChildren}
            </div>

        </div>
    );
};

export default HeaderLineDecorate;
