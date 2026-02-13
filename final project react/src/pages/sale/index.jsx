import React from 'react';
import TopBar from '../../components/Header/TopBar';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Search from './partials/search';

const Sale = () => {
    return (
        <div>
            <TopBar />
            <Navbar />
            <Search />
            <Footer />
        </div>
    );
};

export default Sale;