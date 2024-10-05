import { useEffect, useMemo, useState } from 'react';

import styles from './sliderBar.module.css';

import stylesHead from '@styles/baseBlock.module.css';
import useMediaQuery from '@hooks/useMediaQuery.ts';

export interface SliderBarProps {
    activeIndex: number;
    slideTotal: number;
}

const SliderBar = ({ activeIndex, slideTotal }: SliderBarProps) => {
    const activeItem = `${stylesHead.head} ${stylesHead.headPurple}`;

    const isDesktopView = useMediaQuery('(min-width: 1241px)');// 9
    const isTabletView = useMediaQuery('(min-width: 768px) and (max-width: 1240px)'); // 7
    // isMobileView // 5

    const [numberOfItems, setNumberOfItems] = useState(9);

    useEffect(() => {
        if (isDesktopView) {
            setNumberOfItems(9);
        }
        else if (isTabletView) {
            setNumberOfItems(7);
        }
        else {
            setNumberOfItems(5);
        }
    }, [isDesktopView, isTabletView]);

    const barItemMultiply = Math.ceil(numberOfItems * slideTotal);

    const itemsPerSlide = slideTotal > 0 ? Math.ceil(barItemMultiply / slideTotal) : 0;

    const filledItemsCount = useMemo(() => {
        if (itemsPerSlide === 0) return 0;
        return (activeIndex + 1) * itemsPerSlide;
    }, [activeIndex, itemsPerSlide]);

    return (
        <div className={styles.sliderProgressBar}>
            {Array.from({ length: barItemMultiply }).map((_, index) => (
                <span
                    key={index}
                    className={`${styles.sliderProgressItem} ${(index + 1) <= filledItemsCount ? activeItem : styles.disabled}`}
                />
            ))}
        </div>
    );
};

export default SliderBar;
