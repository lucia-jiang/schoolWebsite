import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import {FaWhatsapp, FaInstagram, FaPhone, FaMapMarkerAlt, FaEnvelope} from 'react-icons/fa'; // Import icons
import {SiWechat, SiXiaohongshu} from 'react-icons/si';

import './Footer.css'; // Make sure to create and import the CSS file

const Footer = () => {
    const {t} = useTranslation();

    return (<footer className="footer bg-custom text-white text-center text-lg-start mt-3">
        <Container className="p-4">
            <div>
                <Row className="g-4">
                    <Col md={4}>
                        <h2 className="mb-2">华西教育</h2>
                        <p><a href="tel:+34688171681" style={{color: 'white'}}> <FaPhone/> +34 688171681</a></p>
                        <p>
                            <a href="mailto:academiahuaxi@gmail.com"
                               style={{color: 'white'}}> <FaEnvelope/> academiahuaxi@gmail.com</a>
                        </p>
                        <p>
                            <a href="https://www.google.com/maps?q=C.+de+los+Mártires,+9,+28660+Boadilla+del+Monte,+Madrid"
                               target="_blank" rel="noopener noreferrer"
                               style={{color: 'white'}}> C. de los Mártires, 9, 28660 Boadilla del Monte, Madrid</a>
                        </p>
                        <p>
                            <a href="https://www.google.com/maps?q=C.+de+los+Mártires,+9,+28660+Boadilla+del+Monte,+Madrid"
                               target="_blank" rel="noopener noreferrer"
                               style={{color: 'white'}}> <FaMapMarkerAlt/> {t('map')}</a>
                        </p>
                    </Col>
                    <Col md={3}>
                        <p><SiWechat/> {t('wechat')}: hxsy688171681 </p>
                        <p>
                            <a href="https://wa.me/34688171681" target="_blank" rel="noopener noreferrer"
                               style={{color: 'white'}}>
                                <FaWhatsapp/> WhatsApp: 688171681
                            </a>
                        </p>
                        <p>
                            <a href="https://www.instagram.com/huaxi.educacion" target="_blank"
                               rel="noopener noreferrer" style={{color: 'white'}}>
                                <FaInstagram/> Instagram: huaxi.educacion
                            </a>
                        </p>
                        <p>
                            <a href="https://www.xiaohongshu.com/user/profile/6338b673000000000a022bea?xsec_token=YBToTcAp31p4-bndKU0dhbY7x7jmVPBaD_EEk6tloMDYs=&xsec_source=app_share&xhsshare=CopyLink&appuid=56e2fbd584edcd05d87c455c&apptime=1736453986&share_id=5d8f6eddeb6043678a671841770d5b6c"
                               target="_blank"
                               rel="noopener noreferrer" style={{color: 'white'}}>
                                <SiXiaohongshu/> {t('redbook')}: 1579782243
                            </a>
                        </p>
                    </Col>
                </Row>
            </div>
        </Container>
    </footer>);
};

export default Footer;
