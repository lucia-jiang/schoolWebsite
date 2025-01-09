import React from 'react';
import {useTranslation} from "react-i18next";
import GoogleMapEmbed from "../components/GoogleMapEmbed";

const Contact = () => {
    const {t} = useTranslation();

    return (
        <div className="container pt-3">
            {/* Contact Title */}
            <h1>{t('contact')}</h1>

            {/* Contact Information Section */}
            <section>
                <h2>{t('contactInformation')}</h2>
                <p>{t('contactAddress')}</p>
                <ul>
                    <li><strong>{t('phone')}: </strong> +34</li>
                    <li><strong>{t('email')}: </strong>info@chineseschool.com</li>
                    <li><strong>{t('hours')}: </strong>{t('workingHours')}</li>
                </ul>
            </section>

            {/* Google Map Embed */}
            <section className="map-section my-4">
                <h2>{t('findUs')}</h2>
                <GoogleMapEmbed/>
            </section>

            {/* Contact Form Section */}
            <section>
                <h2>{t('contactForm')}</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">{t('name')}</label>
                        <input type="text" className="form-control" id="name" placeholder={t('enterName')} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">{t('email')}</label>
                        <input type="email" className="form-control" id="email" placeholder={t('enterEmail')} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">{t('message')}</label>
                        <textarea className="form-control" id="message" rows="4" placeholder={t('enterMessage')}
                                  required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">{t('submit')}</button>
                </form>
            </section>
        </div>
    );
};

export default Contact;
