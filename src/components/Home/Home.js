import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countris, setCountris] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountris(data))
    }, [])
   
    return (
        <div>
            <h1 style={{textAlign : 'center'}}>All Country Info</h1>
            {
                countris.map(country => <Country country={country} key={country.alpha3Code} />)
            }
        </div>
    );
};

export default Home;