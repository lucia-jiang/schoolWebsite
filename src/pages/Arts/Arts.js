import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from "react-i18next";

const Arts = () => {
    const {t} = useTranslation();

    return (
        <div className="container pt-3">
            <h1>{t('arts')}</h1>
            <ul>
                <li><Link to="/arts/music">{t('music')}</Link></li>
                <li><Link to="/arts/dance">{t('dance')}</Link></li>
            </ul>
        </div>
    )
};

export default Arts;
