import React from 'react';
import Header from "../components/Homepage/Header";
import Navbar from "../components/Homepage/Navbar";
import Hero from '../components/Homepage/Hero.jsx';
import Awards from "../components/Homepage/Awards.jsx";
import ImageContainer from "../components/Homepage/ImageContainer";
import propTypes from 'prop-types';



const HomePage = (props) => {
    console.log(props.title)
    return ( <>
        <Header  />
        <Navbar  />
        <Hero />
        <Awards />
        <ImageContainer />
    </> );
}
 
export default HomePage;

HomePage.propTypes = {
    name: propTypes.string.isRequired
}

HomePage.defaultProps = {
    title:'This is Home Page'
}

