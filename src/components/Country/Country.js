import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const {name, capital, region} = props.country;
    const history = useHistory()
    const showHandleBtn = (name) => {
        const url = `/country/${name}`
        history.push(url)
    }
    const countryStyle ={
        border: '1px solid purple',
        borderRadius: '10px',
        margin: '10px',
        padding: '20px',
        width:  '300px',
        height: '300px',
        float: 'left'
    }
    return (
        <div style={countryStyle}>
            <h2>Name: {name}</h2>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <br />
            <Link to={`/country/${name}`} ><p>Show Detail</p></Link>
            <button onClick={() => showHandleBtn(name)} >Show Detail</button>
        </div>
    );
};

export default Country;