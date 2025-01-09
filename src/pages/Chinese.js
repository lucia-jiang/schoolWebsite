import React from 'react';
import {useTranslation} from "react-i18next";
import {Row, Col, Card, Table} from 'react-bootstrap'; // Import necessary Bootstrap components

const Chinese = () => {
    const {t} = useTranslation();

    // Class data
    const classes = [
        {
            id: 1,
            name: t('beginnerChinese'),
            description: t('beginnerDescription'),
            image: 'https://via.placeholder.com/300x200?text=Beginner+Chinese',
        },
        {
            id: 2,
            name: t('intermediateChinese'),
            description: t('intermediateDescription'),
            image: 'https://via.placeholder.com/300x200?text=Intermediate+Chinese',
        },
        {
            id: 3,
            name: t('advancedChinese'),
            description: t('advancedDescription'),
            image: 'https://via.placeholder.com/300x200?text=Advanced+Chinese',
        },
    ];

    // Schedule data
    const schedule = [
        {day: t('monday'), time: '10:00 AM - 11:30 AM', class: t('beginnerChinese')},
        {day: t('wednesday'), time: '2:00 PM - 3:30 PM', class: t('intermediateChinese')},
        {day: t('friday'), time: '9:00 AM - 10:30 AM', class: t('advancedChinese')},
    ];

    return (
        <div className="container pt-3">
            <h1>{t('chineseClasses')}</h1>

            {/* Classes Section */}
            <section className="my-4">
                <h2>{t('chineseClassesDescription')}</h2>
                <Row className="g-4">
                    {classes.map((classItem) => (
                        <Col md={4} key={classItem.id}>
                            <Card>
                                <Card.Img variant="top" src={classItem.image} alt={classItem.name}/>
                                <Card.Body>
                                    <Card.Title>{classItem.name}</Card.Title>
                                    <Card.Text>{classItem.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            {/* Schedule Section */}
            <section className="my-4">
                <h2>{t('classSchedule')}</h2>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>{t('day')}</th>
                        <th>{t('time')}</th>
                        <th>{t('class')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {schedule.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.day}</td>
                            <td>{entry.time}</td>
                            <td>{entry.class}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </section>
        </div>
    );
};

export default Chinese;
