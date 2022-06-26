import React, { Fragment } from 'react';
import AboutUs from '../components/About-us/AboutUs';
import Company from '../components/Company/Company';
import Courses from '../components/Courses/Courses';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection />
            <Company />
            <AboutUs />
            <Courses />
        </Fragment>
    );
};

export default Home;