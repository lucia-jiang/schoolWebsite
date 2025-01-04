import React from 'react';
import { useTranslation } from "react-i18next";
import { Row, Col, Card } from 'react-bootstrap'; // Bootstrap grid and card components for layout

const Teachers = () => {
    const { t } = useTranslation();

    // Sample teachers' data
    const teachers = [
        {
            id: 1,
            name: 'John Doe',
            role: t('teacherRoleMandarin'),
            description: t('teacherJohnDescription'),
            image: 'https://via.placeholder.com/200?text=Teacher+1',
        },
        {
            id: 2,
            name: 'Jane Smith',
            role: t('teacherRoleDance'),
            description: t('teacherJaneDescription'),
            image: 'https://via.placeholder.com/200?text=Teacher+2',
        },
        {
            id: 3,
            name: 'David Lee',
            role: t('teacherRoleMusic'),
            description: t('teacherDavidDescription'),
            image: 'https://via.placeholder.com/200?text=Teacher+3',
        },
        {
            id: 4,
            name: 'Emily Zhang',
            role: t('teacherRoleChinese'),
            description: t('teacherEmilyDescription'),
            image: 'https://via.placeholder.com/200?text=Teacher+4',
        },
    ];

    return (
        <div className="container pt-3">
            <h1>{t('teachers')}</h1>

            <section className="my-4">
                <h2>{t('ourTeachers')}</h2>
                <p>{t('meetOurTeachers')}</p>

                {/* Teachers Cards */}
                <Row className="g-4">
                    {teachers.map((teacher) => (
                        <Col md={3} key={teacher.id}>
                            <Card>
                                <Card.Img variant="top" src={teacher.image} alt={teacher.name} />
                                <Card.Body>
                                    <Card.Title>{teacher.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{teacher.role}</Card.Subtitle>
                                    <Card.Text>{teacher.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="my-4">
                <h2>{t('joinOurTeam')}</h2>
                <p>{t('teachersJoinMessage')}</p>
                <a href="/apply" className="btn btn-primary">{t('applyNow')}</a>
            </section>
        </div>
    );
};

export default Teachers;
