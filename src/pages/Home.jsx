import React, { Fragment } from 'react';
import AboutUs from '../components/About-us/AboutUs';
import ChooseUs from '../components/Choose-us/ChooseUs';
import Company from '../components/Company/Company';
import Courses from '../components/Courses/Courses';
import Features from '../components/Features/Features';
import FreeCourse from '../components/FreeCourse/FreeCourse';
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
            <ChooseUs />
            <Features />
            <FreeCourse />
        </Fragment>
    );
};

export default Home;