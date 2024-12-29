import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaHome, FaMusic, FaChalkboardTeacher, FaPhoneAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { t, i18n } = useTranslation(); // Use translation hook

    // Change language and store it in localStorage
    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng); // Store the language in localStorage
    };

    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <span>{t('华西教育')}</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" className="d-flex align-items-center">
                                <FaHome className="me-2" /> {t('home')}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/arts" className="d-flex align-items-center">
                                <FaMusic className="me-2" /> {t('arts')}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/chinese" className="d-flex align-items-center">
                                <FaChalkboardTeacher className="me-2" /> {t('chinese')}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/teachers" className="d-flex align-items-center">
                                <FaChalkboardTeacher className="me-2" /> {t('teachers')}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/contact" className="d-flex align-items-center">
                                <FaPhoneAlt className="me-2" /> {t('contact')}
                            </Nav.Link>
                        </Nav.Item>

                        {/* Language Switcher */}
                        <NavDropdown title={t('language')} id="navbarScrollingDropdown">
                            <NavDropdown.Item onClick={() => handleLanguageChange('es')}>
                                <img src="https://flagcdn.com/w320/es.png" alt="Spain Flag" width="20" className="me-2" />
                                Español
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleLanguageChange('en')}>
                                <img src="https://flagcdn.com/w320/gb.png" alt="UK Flag" width="20" className="me-2" />
                                English
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleLanguageChange('zh')}>
                                <img src="https://flagcdn.com/w320/cn.png" alt="China Flag" width="20" className="me-2" />
                                中文
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Social Media Links */}
                        <NavDropdown title={t('socialMedia')} id="navbarScrollingDropdown">
                            <NavDropdown.Item href="https://facebook.com" target="_blank">
                                <FaFacebook className="me-2" /> {t('facebook')}
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://instagram.com" target="_blank">
                                <FaInstagram className="me-2" /> {t('instagram')}
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
