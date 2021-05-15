
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './CountryDetail.css'

const CountryDetail = () => {
    const { countryName } = useParams();
    const [details, setDetails] = useState({})
    const history = useHistory()
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data[0]))
    }, [])

    const { name, flag, capital, region, population } = details
  
    return (
        <div className="detail-container">
            <img src={flag} alt="" />
            <div>
                <h3>Name: {name}</h3>
                <p>Capital: {capital}</p>
                <p>Region: {region}</p>
                <p>Population: {population}</p>
                <button onClick={history.goBack}>Back</button>
            </div>
        </div>
    );
};

export default CountryDetail;