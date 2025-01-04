import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const HighlightsSection = () => {
    const { t } = useTranslation();

    return (
        <div className="highlights-section">
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
        </div>
    );
};

export default HighlightsSection;
