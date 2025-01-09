import React from 'react';
import {useTranslation} from 'react-i18next';

const AcademicSupport = () => {
    const {t} = useTranslation();

    return (
        <div className="container pt-5">
            <h1 className="text-center mb-4">{t('schoolSupport')}</h1>
        </div>
    );
};

export default AcademicSupport;
