import React from 'react';
import './stepper.scss'
export default class PlaceType extends React.Component <any,any>{
    render() {  
        
        let type = <select name="" id="basic_type">
            <option value="0">Type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Hotel">Hotel</option>
        </select>
        let property = <select name="" id="basic_property">
        <option value="0">Type</option>
        <option value="Apartment">Apartment</option>
        <option value="Condominium">Condominium</option>
        <option value="Loft">Loft</option>
        </select>
        let entire_place = <select name="" id="">
            <option value="0">Entire place</option>
            <option value="Private Room">Private Room</option>
            <option value="Shared Room">Shared Room</option>
        </select>
        return (
            <div id="step1_1">
                <div>
                    First, let’s narrow things down
                </div>
                <div>{type}</div>
                <div>
                    Now choose a property type
                </div>
                <div>{property}</div>
                <div>
                    What will guests have?
                </div>
                <div>{entire_place}</div>
            </div>
        );
    }

}