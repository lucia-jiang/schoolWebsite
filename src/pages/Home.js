import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import { Carousel, Row, Col, Card } from 'react-bootstrap';
import CustomCarousel from "../components/CustomCarousel";

const Home = () => {
    const { t } = useTranslation(); // Access the `t` function for translations

    return (
        <div className="container pt-5">
            {/* Hero Section */}
            <h1 className="text-center mb-4">{t('welcomeToOurSchool')}</h1>
            <p className="text-center mb-5">{t('discoverOurPrograms')}</p>

            {/* Highlights Section */}
            <h2 className="text-center mb-4">{t('highlightsTitle')}</h2>
            <Row className="g-4">
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Music+Program" />
                        <Card.Body>
                            <Card.Title>{t('musicProgramTitle')}</Card.Title>
                            <Card.Text>{t('musicProgramDescription')}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Dance+Program" />
                        <Card.Body>
                            <Card.Title>{t('danceProgramTitle')}</Card.Title>
                            <Card.Text>{t('danceProgramDescription')}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Chinese+Program" />
                        <Card.Body>
                            <Card.Title>{t('chineseProgramTitle')}</Card.Title>
                            <Card.Text>{t('chineseProgramDescription')}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Scrollable Carousel Section */}
            <CustomCarousel/>

        </div>
    );
};

export default Home;
