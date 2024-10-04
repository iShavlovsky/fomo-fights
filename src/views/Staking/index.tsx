import { useState } from 'react';

const data = [
    { month: 'May 2024', supply: 8 },
    { month: 'Jun 2024', supply: 8.1 },
    { month: 'Jul 2024', supply: 8.2 },
    { month: 'Aug 2024', supply: 8.3 },
    { month: 'Sep 2024', supply: 8.4 },
    { month: 'Oct 2024', supply: 8.5 },
    { month: 'Nov 2024', supply: 8.6 },
    { month: 'Dec 2024', supply: 8.7 },
    { month: 'Jan 2025', supply: 8.8 },
    { month: 'Feb 2025', supply: 8.9 },
    { month: 'Mar 2025', supply: 9 },
    { month: 'Apr 2025', supply: 8.1 },
    { month: 'May 2025', supply: 9.2 },
    { month: 'Jun 2025', supply: 9.3 },
    { month: 'Jul 2025', supply: 9.4 }
];

function AboutPage() {
    const [barWidth, setBarWidth] = useState(24); // Начальная ширина столбцов
    const [scaleFactor, setScaleFactor] = useState(50);
    const [gap, setGap] = useState(25);
    const maxSupply = Math.max(...data.map((item) => item.supply));
    const maxSvgHeight = (maxSupply * scaleFactor) + 50;
    const offsetPercentage = 0.25; // 5%
    const feOffset = barWidth * offsetPercentage; //  5% от ширины столбца
    // const svgWidth = (barWidth + gap) * data.length;
    const leftPadding = 50; // Отступ слева для подписей оси Y
    const svgWidth = ((barWidth + gap) * data.length) + gap + leftPadding; // Учитываем отступ слева

    return (
        <section>
            <div className="container">
                <h1>AboutPage</h1>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={svgWidth} // Динамически вычисляемая ширина для вмещения всех элементов
                height={maxSvgHeight + 50} // Максимальная высота + некоторый отступ
                viewBox={`-${leftPadding} 0 ${svgWidth} ${maxSvgHeight}`}
                fill="none"
            >
                <defs>
                    <filter
                        id="commonFilter"
                        x="0"
                        y="0"
                        offset={barWidth}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx={feOffset} dy={feOffset} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-2" k3="2" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.917647 0 0 0 0 0.819608 0 0 0 0 0.666667 0 0 0 1 0"
                        />
                        <feBlend mode="normal" in2="shape" />
                    </filter>
                    <mask id="commonMask" fill="white">
                        <path d={`M0 0H${barWidth + feOffset}V${maxSvgHeight}H0V0Z`} />
                    </mask>
                </defs>

                {data.map((item, index) => (
                    <g
                        key={index}
                        transform={`translate(${(barWidth + gap) * index}, ${maxSvgHeight - (item.supply * scaleFactor)})`}
                        filter="url(#commonFilter)"
                    >
                        <path
                            d={`M0 0H${barWidth}V${item.supply * scaleFactor}H0V0Z`}
                            fill="#AE8C56"
                            mask="url(#commonMask)"
                        />
                        <path
                            d={`M${barWidth} ${item.supply * scaleFactor}V${(item.supply * scaleFactor) + 2}H${barWidth + 2}V${item.supply * scaleFactor}H${barWidth}ZM${barWidth - 2} 0V${item.supply * scaleFactor}H${barWidth + 2}V0H${barWidth - 2}ZM${barWidth} ${item.supply * scaleFactor - 2}H0V${item.supply * scaleFactor + 2}H${barWidth}V${item.supply * scaleFactor - 2}Z`}
                            fill="#6D5B3E"
                            mask="url(#commonMask)"
                        />
                    </g>
                ))}

                {data.map((item, index) => (
                    <text
                        key={index}
                        x={((barWidth + gap) * index) + (barWidth / 2)}
                        y={maxSvgHeight - 5}
                        className={`body-xs-1 `}
                        textAnchor="middle"
                        fill="#000"
                        dy={(barWidth / 2)}
                        dx="10"
                        transform={`rotate(-90, ${((barWidth + gap) * index) + (barWidth / 2)}, ${maxSvgHeight - 5})`}
                    >
                        {item.month}
                    </text>
                ))}

                {new Array(5).fill(null).map((_, index) => (
                    <text
                        key={index}
                        x="0"
                        y={(maxSvgHeight - 50) - (index * 2 * scaleFactor)}
                        textAnchor="end"
                        fill="#000"
                        dx="-10" // небольшой отступ от оси
                        dy="5" // центрирование по высоте текста
                        className="body-xs-1"
                    >
                        {index * 2}
                        B
                    </text>
                ))}
            </svg>
        </section>
    );
}

export default AboutPage;
