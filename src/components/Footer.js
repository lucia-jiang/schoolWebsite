import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start mt-3">
            <Container className="p-4">
                <p className="mb-0">© {new Date().getFullYear()} School Website. All rights reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;
