import React from 'react';
import {Card} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

const CustomCard = ({imageUrl, cardTitle, cardDescription}) => {
    const {t} = useTranslation();

    return (
        <Card>
            <Card.Img variant="top" src={imageUrl}/>
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>{cardDescription}</Card.Text>
            </Card.Body>
        </Card>

    );
};

export default CustomCard;
