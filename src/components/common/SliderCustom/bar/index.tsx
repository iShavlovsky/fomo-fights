import { useMemo } from 'react';

import styles from './sliderBar.module.css';

import stylesHead from '@styles/baseBlock.module.css';

export interface SliderBarProps {
    numberOfItems?: number;
    activeIndex: number;
    slideTotal: number;
}

const SliderBar = ({ numberOfItems = 20, activeIndex, slideTotal }: SliderBarProps) => {
    const activeItem = `${stylesHead.head} ${stylesHead.headPurple}`;

    const itemsPerSlide = slideTotal > 0 ? Math.ceil(numberOfItems / slideTotal) : 0;

    const filledItemsCount = useMemo(() => {
        if (itemsPerSlide === 0) return 0;
        return (activeIndex + 1) * itemsPerSlide;
    }, [activeIndex, itemsPerSlide]);

    return (
        <div className={styles.sliderProgressBar}>
            {Array.from({ length: numberOfItems }).map((_, index) => (
                <span
                    key={index}
                    className={`${styles.sliderProgressItem} ${(index + 1) <= filledItemsCount ? activeItem : styles.disabled}`}
                />
            ))}
        </div>
    );
};

export default SliderBar;
