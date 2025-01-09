import React from 'react';
import {useTranslation} from 'react-i18next';
import {Row, Col} from 'react-bootstrap';

const Home = () => {
    const {t} = useTranslation();

    // Data for each row
    const rows = [
        {
            imageUrl: "https://via.placeholder.com/400x300?text=Row1+Image",
            title: t('home_title1'),
            description: t('home_description1'),
            reverse: false // Image on the left
        },
        {
            imageUrl: "https://via.placeholder.com/400x300?text=Row2+Image",
            title: t('home_title2'),
            description: t('home_description2'),
            reverse: true // Image on the right
        },
        {
            imageUrl: "https://via.placeholder.com/400x300?text=Row3+Image",
            title: t('home_title3'),
            description: t('home_description3'),
            reverse: false // Image on the left
        }
    ];

    return (
        <div>
            <div>
                <img
                    src="/schoolWebsite/home-image.jpeg"
                    alt="Large Display"
                    style={{maxWidth: "100%"}}
                />
            </div>

            <div className="container pt-5">
                {/* Rows of information */}
                {rows.map((row, index) => (
                    <Row key={index} className="align-items-left mb-5">
                        {row.reverse ? (
                            <>
                                <Col md={4} className="order-md-2">
                                    <img src={row.imageUrl} alt={`Row ${index + 1}`} className="img-fluid"/>
                                </Col>
                                <Col md={8}>
                                    <h2 style={{color: '#c2a27b'}}>{row.title}</h2>
                                    <p>{row.description}</p>
                                </Col>
                            </>
                        ) : (
                            <>
                                <Col md={4}>
                                    <img src={row.imageUrl} alt={`Row ${index + 1}`} className="img-fluid"/>
                                </Col>
                                <Col md={8}>
                                    <h2 style={{color: '#c2a27b'}}>{row.title}</h2>
                                    <p>{row.description}</p>
                                </Col>
                            </>
                        )}
                    </Row>
                ))}
            </div>
        </div>
    );
};

export default Home;
