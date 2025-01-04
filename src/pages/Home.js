import React from 'react';
import {useTranslation} from 'react-i18next';
import CustomCarousel from "../components/CustomCarousel";
import HighlightsSection from "../components/HighlightSection";

const Home = () => {
    const {t} = useTranslation();

    return (
        <div className="container pt-5">
            {/* Hero Section */}
            <h1 className="text-center mb-4">{t('welcomeToOurSchool')}</h1>
            <p className="text-center mb-5">{t('discoverOurPrograms')}</p>

            <div className="mb-5">
                <HighlightsSection/>
            </div>

            <div>
                <CustomCarousel/>
            </div>

        </div>
    );
};

export default Home;
