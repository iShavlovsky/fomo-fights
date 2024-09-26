import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sliderCustom.css';

import { ReactNode, useEffect, useRef, useState } from 'react';
import Slider, { type Settings as SettingsSlider } from 'react-slick';

import SliderArrow from '@components/common/SliderCustom/arrows';

import SliderBar, { SliderBarProps } from './bar';

const settingsSliderDefault = {
    lazyLoad: 'progressive',
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SliderArrow direction="next" />,
    prevArrow: <SliderArrow direction="prev" />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
} satisfies SettingsSlider;

type SliderBarPropsCustom = Omit<SliderBarProps, 'activeIndex' | 'slideTotal'>;

const settingsBarDefault = {
    numberOfItems: 20
} satisfies SliderBarPropsCustom;

interface SliderCustomProps {
    settingsSlider?: SettingsSlider;
    settingsBar?: SliderBarPropsCustom;
    numberOfItems?: number;
    children: ReactNode;
    classNameContainer?: string;
}

const SliderCustom = ({
    settingsSlider = settingsSliderDefault,
    settingsBar = settingsBarDefault,
    children,
    classNameContainer
}: SliderCustomProps) => {
    const sliderRef = useRef<Slider | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [totalSlide, setTotalSlide] = useState(0);

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
        <div className={`${classNameContainer}`}>
            <SliderBar
                numberOfItems={settingsBar?.numberOfItems}
                activeIndex={activeSlide}
                slideTotal={totalSlide}
            />
            <div className="slider-container">
                <Slider
                    ref={sliderRef}
                    className="mt-24"
                    {...settings}
                >
                    {children}
                </Slider>
            </div>
        </div>
    );
};

export default SliderCustom;
