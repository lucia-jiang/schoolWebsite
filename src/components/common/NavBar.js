import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {FaHome, FaMusic, FaChalkboardTeacher, FaPhoneAlt} from 'react-icons/fa';
import {useTranslation} from 'react-i18next';

const NavBar = () => {
    const {t, i18n} = useTranslation(); // Use translation hook

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
                <Navbar.Toggle aria-controls="navbar-nav"/>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" className="d-flex align-items-center">
                                <FaHome className="me-2"/> {t('ourAcademy')}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/music" className="d-flex align-items-center">
                                <FaMusic className="me-2"/> {t('music')}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/academicSupport" className="d-flex align-items-center">
                                <FaChalkboardTeacher className="me-2"/> {t('academicSupport')}
                            </Nav.Link>
                        </Nav.Item>

                        {/* Language Switcher */}
                        {/*//TODO: add flag for each language*/}
                        <NavDropdown title={t('language')} id="navbarScrollingDropdown">
                            <NavDropdown.Item onClick={() => handleLanguageChange('es')}>
                                <img src="https://flagcdn.com/w320/es.png" alt="Spain Flag" width="20"
                                     className="me-2"/>
                                Español
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleLanguageChange('en')}>
                                <img src="https://flagcdn.com/w320/gb.png" alt="UK Flag" width="20" className="me-2"/>
                                English
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleLanguageChange('zh')}>
                                <img src="https://flagcdn.com/w320/cn.png" alt="China Flag" width="20"
                                     className="me-2"/>
                                中文
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/contact" className="d-flex align-items-center">
                                <FaPhoneAlt className="me-2"/> {t('contact')}
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
