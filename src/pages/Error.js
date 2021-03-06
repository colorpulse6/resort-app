import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <Hero>
        <Banner title='404' subtititle="page not found">
            <Link to="/">return home</Link>
        </Banner>
        </Hero>
    )
}

export default Error
