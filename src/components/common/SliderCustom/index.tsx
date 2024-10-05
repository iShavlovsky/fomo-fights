import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sliderCustom.css';

import { ReactNode, useEffect, useRef, useState } from 'react';
import Slider, { type Settings as SettingsSlider } from 'react-slick';

import SliderBar from './bar';

const settingsSliderDefault = {
    lazyLoad: 'progressive',
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 660,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
} satisfies SettingsSlider;

interface SliderCustomProps {
    settingsSlider?: SettingsSlider;
    numberOfItems?: number;
    children: ReactNode;
    classNameContainer?: string;
}

const SliderCustom = ({
    settingsSlider = settingsSliderDefault,
    children,
    classNameContainer
}: SliderCustomProps) => {
    const sliderRef = useRef<Slider | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [totalSlide, setTotalSlide] = useState(0);

    const next = () => {
        sliderRef.current?.slickNext();
    };
    const previous = () => {
        sliderRef.current?.slickPrev();
    };

    const settings = {
        ...settingsSlider,
        beforeChange: (_: number, nextSlide: number) => setActiveSlide(nextSlide)
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider && Array.isArray(slider.props.children))
            setTotalSlide(slider.props.children.length);
    }, []);

    return (
        <>
            <SliderBar
                activeIndex={activeSlide}
                slideTotal={totalSlide}
            />
            <div className={`${classNameContainer} container-slider`}>

                <div
                    style={{ right: '100%' }}
                    className="custom-btn-slider cursor-pointer"
                    onClick={previous}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="38"
                        viewBox="0 0 22 38"
                        fill="none"
                    >
                        <g>
                            <path
                                d="M20 38H22V36V4V2V0H20H18V2H16V4H14V6H12V8H10V10H8V12H6V14H4V16H2V18H0V20H2V22H4V24H6V26H8V28H10V30H12V32H14V34H16V36H18V38H20Z"
                                fill="black"
                            />
                            <path
                                d="M20 2V14V24V36H18V34H16V32H14V30H12V28H10V26H8V24H6V22H4V20H2V18H4V16H6V14H8V12H10V10H12V8H14V6H16V4H18V2H20Z"
                                fill="currentColor"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 18H4V20H6V22H8V24H10V26H12V28H14V30H16V32H18V34H20V36H18V34H16V32H14V30H12V28H10V26H8V24H6V22H4V20H2V18Z"
                                fill="#4D4D4D"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18 2H20V4H18V6H16V8H14V10H12V12H10V14H8V16H6V18H4V16H6V14H8V12H10V10H12V8H14V6H16V4H18V2Z"
                                fill="#F0F0F0"
                            />
                        </g>
                    </svg>
                </div>

                <Slider
                    ref={sliderRef}
                    className="mt-24"
                    {...settings}
                >
                    {children}
                </Slider>
                <div
                    className="custom-btn-slider cursor-pointer"
                    style={{
                        left: '100%',
                        transformOrigin: 'center',
                        transform: 'rotate(180deg)'
                    }}
                    onClick={next}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="38"
                        viewBox="0 0 22 38"
                        fill="none"
                    >
                        <g>
                            <path
                                d="M20 38H22V36V4V2V0H20H18V2H16V4H14V6H12V8H10V10H8V12H6V14H4V16H2V18H0V20H2V22H4V24H6V26H8V28H10V30H12V32H14V34H16V36H18V38H20Z"
                                fill="black"
                            />
                            <path
                                d="M20 2V14V24V36H18V34H16V32H14V30H12V28H10V26H8V24H6V22H4V20H2V18H4V16H6V14H8V12H10V10H12V8H14V6H16V4H18V2H20Z"
                                fill="currentColor"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 18H4V20H6V22H8V24H10V26H12V28H14V30H16V32H18V34H20V36H18V34H16V32H14V30H12V28H10V26H8V24H6V22H4V20H2V18Z"
                                fill="#4D4D4D"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18 2H20V4H18V6H16V8H14V10H12V12H10V14H8V16H6V18H4V16H6V14H8V12H10V10H12V8H14V6H16V4H18V2Z"
                                fill="#F0F0F0"
                            />
                        </g>
                    </svg>
                </div>

            </div>
        </>
    );
};

export default SliderCustom;
