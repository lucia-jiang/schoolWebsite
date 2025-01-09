import React from 'react';
import {useTranslation} from "react-i18next";
import {Row, Col} from "react-bootstrap";
import CustomCard from "../../components/Card";

const Music = () => {
    const {t} = useTranslation();

    // Array of card data
    const cardData = [
        {
            imageUrl: "https://via.placeholder.com/300x200?text=Data1",
            cardTitle: t('cardTitle_instrumentsAndTeachers'),
            cardDescription: t('cardDescription_instrumentsAndTeachers')
        },
        {
            imageUrl: "https://via.placeholder.com/300x200?text=Data2",
            cardTitle: t('cardTitle_singing'),
            cardDescription: t('cardDescription_singing')
        },
        {
            imageUrl: "https://via.placeholder.com/300x200?text=Data3",
            cardTitle: t('cardTitle_musicGroup'),
            cardDescription: t('cardDescription_musicGroup')
        },
        {
            imageUrl: "https://via.placeholder.com/300x200?text=Data4",
            cardTitle: t('cardTitle_musicTheory'),
            cardDescription: t('cardDescription_musicTheory')
        },
        {
            imageUrl: "https://via.placeholder.com/300x200?text=Data5",
            cardTitle: t('cardTitle_conservatoireAccessExam'),
            cardDescription: t('cardDescription_conservatoireAccessExam')
        },
        {
            imageUrl: "https://via.placeholder.com/300x200?text=Data6",
            cardTitle: t('cardTitle_abrsm'),
            cardDescription: t('cardDescription_abrsm')
        }
    ];

    return (
        <div>
            <div className="mb-5 text-center">
                <img
                    src="/schoolWebsite/home-image.jpeg"
                    alt="Large Display"
                    className="img-fluid"
                    style={{maxWidth: "100%"}}
                />
            </div>
            <div className="container">


                <p>{t("home_description2")}</p>

                {/* Divide cards into rows dynamically */}
                {Array.from({length: Math.ceil(cardData.length / 3)}, (_, rowIndex) => (
                    <Row key={rowIndex} className={rowIndex > 0 ? "mt-3" : ""}>
                        {cardData.slice(rowIndex * 3, rowIndex * 3 + 3).map((data, colIndex) => (
                            <Col md={4} key={colIndex}>
                                <CustomCard
                                    imageUrl={data.imageUrl}
                                    cardTitle={data.cardTitle}
                                    cardDescription={data.cardDescription}
                                />
                            </Col>
                        ))}
                    </Row>
                ))}
            </div>
        </div>
    );
};

export default Music;
