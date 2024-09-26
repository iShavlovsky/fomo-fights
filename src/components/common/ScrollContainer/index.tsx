import React, { type ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import styles from './index.module.css';

import stylesHead from '@styles/baseBlock.module.css';

interface ScrollContainerProps {
    onScroll: (index: number) => void;
    header: ReactNode;
    headerColor?: 'head-dark-beige' | 'head-purple' | 'head-dark-pink' | 'head-light-pink' | 'head-green' | 'head-yellow';
    children: ReactNode;
    width: number;
    height: number;
}

const ScrollContainer = ({ onScroll, header, headerColor = 'head-dark-pink', children, width, height }: ScrollContainerProps) => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isScrollable, setIsScrollable] = useState(false);

    const thumbStartPos = useRef<number | null>(null);
    const scrollStartPos = useRef<number | null>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const scrollBarRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
        const content = contentRef.current;
        const thumb = thumbRef.current;
        const scrollBar = scrollBarRef.current;
        const buttonHeight = buttonsRef.current;

        if (content && thumb && scrollBar && buttonHeight) {
            const { scrollTop, clientHeight, scrollHeight } = content;
            const availableHeight = clientHeight - buttonHeight.clientHeight;

            const thumbHeight = (clientHeight / scrollHeight) * availableHeight;
            thumb.style.height = `${thumbHeight - 2}px`;

            const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setScrollPercentage(scrollPercent);

            const maxScrollTop = availableHeight - thumbHeight;
            const thumbTop = (scrollPercent / 100) * maxScrollTop;
            thumb.style.transform = `translateY(${thumbTop}px)`;
        }
    }, []);

    const handleThumbMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        thumbStartPos.current = e.clientY;
        scrollStartPos.current = contentRef.current?.scrollTop || 0;
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (isDragging && contentRef.current && thumbRef.current) {
            const content = contentRef.current;
            const deltaY = e.clientY - (thumbStartPos.current ?? 0);
            const scrollHeight = content.scrollHeight - content.clientHeight;
            const thumbHeight = content.clientHeight - thumbRef.current.clientHeight;

            const scrollAmount = (deltaY / thumbHeight) * scrollHeight;
            content.scrollTop = (scrollStartPos.current ?? 0) + scrollAmount;
        }
    }, [isDragging]);

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const checkScrollable = () => {
        const content = contentRef.current;
        const thumb = thumbRef.current;

        if (content) {
            const { clientHeight, scrollHeight } = content;
            setIsScrollable(scrollHeight > clientHeight);

            if (thumb) {
                const thumbHeight = (clientHeight / scrollHeight) * clientHeight;
                thumb.style.height = `${thumbHeight - 2}px`;
            }
        }
    };

    useEffect(() => {
        const content = contentRef.current;

        if (content) {
            content.addEventListener('scroll', handleScroll);
        }

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        const resizeObserver = new ResizeObserver(() => {
            checkScrollable();
        });

        if (content) {
            resizeObserver.observe(content);
        }

        return () => {
            if (content) {
                content.removeEventListener('scroll', handleScroll);
            }
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleScroll, isDragging]);

    return (
        <div className={styles.scrollContainerWrapper} role="region" aria-label="Scroll Container">
            <header
                className={`${styles.customScrollHeader} ${stylesHead.head} ${stylesHead[headerColor]}`}
                role="banner"
                aria-label="Container Header"
            >
                {header}
            </header>
            <div className={styles.customScrollContentWrapper} style={{ width: `${width}px`, height: `${height}px` }}>
                <div className={`${styles.customScrollBar} ${!isScrollable ? styles.disabled : ''}`} ref={scrollBarRef} role="scrollbar" aria-controls="scrollable-content">
                    <div
                        className={styles.customScrollBarThumb}
                        ref={thumbRef}
                        onMouseDown={handleThumbMouseDown}
                        role="scrollbar"
                        aria-orientation="vertical"
                        aria-valuenow={scrollPercentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-controls="scrollable-content"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="18"
                            viewBox="0 0 10 18"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 0H10V2H0V0ZM0 7H10V9H0V7ZM10 14H0V16H10V14Z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 2H10V4H0V2ZM0 9H10V11H0V9ZM10 16H0V18H10V16Z"
                            />
                        </svg>
                    </div>
                    <div className={styles.customScrollButtonWrapper} ref={buttonsRef}>
                        <button
                            type="button"
                            disabled={!isScrollable}
                            onClick={() => {
                                if (contentRef.current) {
                                    contentRef.current.scrollTop -= 50;
                                }
                            }}
                            className={styles.customScrollButton}
                            aria-label="Scroll Up"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="currentColor"
                            >
                                <path
                                    d="M1.99951 9L5.99951 3L9.99951 9H5.99951H1.99951Z"
                                />
                            </svg>
                        </button>
                        <button
                            disabled={!isScrollable}
                            type="button"
                            onClick={() => {
                                if (contentRef.current) {
                                    contentRef.current.scrollTop += 50;
                                }
                            }}
                            className={styles.customScrollButton}
                            aria-label="Scroll Down"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="currentColor"
                            >
                                <path
                                    d="M1.99951 3L5.99951 9L9.99951 3H5.99951H1.99951Z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    ref={contentRef}
                    className={styles.customScrollContent}
                    id="scrollable-content"
                    role="region"
                    aria-label="Scrollable content"
                    onScroll={() => onScroll}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ScrollContainer;
