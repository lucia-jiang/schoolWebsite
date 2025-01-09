import React, {useState} from 'react';
import './CustomCarousel.css';
import {useTranslation} from 'react-i18next';

const CustomCarousel = () => {
    const {t} = useTranslation(); // Use the translation hook

    const items = [
        {
            id: 1,
            title: t('carousel1Title'),
            description: t('carousel1Description'),
            image: 'https://via.placeholder.com/800x400?text=Slide+1'
        },
        {
            id: 2,
            title: t('carousel2Title'),
            description: t('carousel2Description'),
            image: 'https://via.placeholder.com/800x400?text=Slide+2'
        },
        {
            id: 3,
            title: t('carousel3Title'),
            description: t('carousel3Description'),
            image: 'https://via.placeholder.com/800x400?text=Slide+3'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="carousel-container">
            <button className="carousel-control left" onClick={handlePrev}>
                &#8249;
            </button>
            <div className="carousel">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                        style={{
                            display: index === currentIndex ? 'block' : 'none',
                        }}
                    >
                        <img src={item.image} alt={item.title} className="carousel-image"/>
                        <div className="carousel-caption">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control right" onClick={handleNext}>
                &#8250;
            </button>
        </div>
    );
};

export default CustomCarousel;
