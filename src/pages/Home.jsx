import React, { Fragment } from 'react';
import Company from '../components/Company/Company';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection />
            <Company />
        </Fragment>
    );
};

export default Home;