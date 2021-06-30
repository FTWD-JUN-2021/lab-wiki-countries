import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';


function CountriesList(props) {

    console.log(countries);

    function listOfCountries() {
        return countries.map((eachCountry) => {
            return (
         
                    <Link className="list-group-item list-group-item-action" to={`/country/${eachCountry.cca3}`}> {eachCountry.name.common}</Link>
             
            )
        })
    }

    return (
        <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
                {listOfCountries()}
            </div>
            </div>
        </div>
        </div>
    );
}

export default CountriesList;