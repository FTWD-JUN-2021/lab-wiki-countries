import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';


function CountriesList(props) {

    console.log(countries);

    function listOfCountries() {
        return countries.map((eachCountry) => {
            return (
                <li>
                    <Link to={`/country/${eachCountry.cca3}`}> {eachCountry.name.common}</Link>
                </li>
            )
        })
    }

    return (
        <div>
            <ul>
                {listOfCountries()}
            </ul>
        </div>
    );
}

export default CountriesList;