import React, { useState } from 'react';
import './CustomCarousel.css';
import { useTranslation } from 'react-i18next';

const CustomCarousel = () => {
    const { t } = useTranslation();
    const items = [
        { id: 1, title: t('carousel1Title'), description: t('carousel1Description') },
        { id: 2, title: t('carousel2Title'), description: t('carousel2Description') },
        { id: 3, title: t('carousel3Title'), description: t('carousel3Description') },
        { id: 4, title: t('carousel4Title'), description: t('carousel4Description') },
        { id: 5, title: t('carousel5Title'), description: t('carousel5Description') },
        { id: 6, title: t('carousel6Title'), description: t('carousel6Description') },
        { id: 7, title: t('carousel7Title'), description: t('carousel7Description') },
        { id: 8, title: t('carousel8Title'), description: t('carousel8Description') },
        { id: 9, title: t('carousel9Title'), description: t('carousel9Description') },
        { id: 10, title: t('carousel10Title'), description: t('carousel10Description') },
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
                {items.map((item, index) => {
                    const position =
                        index === currentIndex
                            ? 'center'
                            : index === (currentIndex - 1 + items.length) % items.length
                                ? 'left'
                                : index === (currentIndex + 1) % items.length
                                    ? 'right'
                                    : 'hidden';

                    return (
                        <div key={item.id} className={`carousel-item ${position}`}>
                            <div className="image-placeholder"></div>
                            <h3 className="placeholder-title">{item.title}</h3>
                            <p className="placeholder-description">{item.description}</p>
                        </div>
                    );
                })}
            </div>
            <button className="carousel-control right" onClick={handleNext}>
                &#8250;
            </button>
        </div>
    );
};

export default CustomCarousel;
