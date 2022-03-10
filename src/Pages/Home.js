import React from 'react';
import Categories from '../Components/Categories';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';
import Offerings from '../Components/Offerings';
import Products from '../Components/Products';
import ShopCollection from '../Components/ShopCollection';
import Slider from '../Components/Slider';
import Testimonials from '../Components/Testimonials';

const Home = () => {
    return (
        <div>
             <Navigation/> 
            <Slider/>
            <Offerings/>
            <Categories/>
            <Products/>
            <Testimonials/>
            <ShopCollection/> 
        </div>
    );
};

export default Home;