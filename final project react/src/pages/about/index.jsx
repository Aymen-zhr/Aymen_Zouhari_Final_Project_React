import React from 'react';
import TopBar from '../../components/Header/TopBar';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Title from '../../components/Header/title';
import AboutText from './partials/about-text';

const  About = () => {
    return (
        <div>
            <TopBar />
            <Navbar />
            <Title />
            <AboutText />
            <Footer />
        </div>
    );
};

export default About;