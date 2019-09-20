import React from 'react';
import './placeTypeStep.scss';

export default class PlaceTypeStep extends React.Component <any,any>{

    state={
        currIndex: 0,
        endIndex: 1
    }

    setProperty= () =>{
        let pt = document.getElementById("place_type") as HTMLSelectElement;
        if(pt.value==="Apartment")
            this.setState({currIndex:1,endIndex:4});
        else if(pt.value === "House")
            this.setState({currIndex:4,endIndex:8});
        else if(pt.value === "Hotel")
            this.setState({currIndex:8,endIndex:11});
        else
            this.setState({currIndex:0,endIndex:1});
    }

    checkPlaceType = () => {
        let pt = document.getElementById("place_type") as HTMLSelectElement;
        let pp = document.getElementById("place_property") as HTMLSelectElement;
        let gwh = document.getElementById("gwh") as HTMLSelectElement;
        let pl = document.getElementById("place_location") as HTMLSelectElement;
        if(pl.value === "0"){
            alert("Please select where the place located!");
            return;
        }
        if(pt.value === "0"){
            alert("Please select place type!");
            return;
        }
        if(pp.value === "0"){
            alert("Please select property type!");
            return;
        }
        if(gwh.value === "0"){
            alert("Please select what guest will have!");
            return;
        }
        this.props.next();
    }
    
    render(){

        var lp = [];
        lp.push(<option value="0">Select Property Type</option>)
        lp.push(<option value="Apartment">Apartment</option>)
        lp.push(<option value="Condominium">Condominium</option>)
        lp.push(<option value="Loft">Loft</option>)
        lp.push(<option value="House">House</option>)
        lp.push(<option value="Bungalow">Bungalow</option>)
        lp.push(<option value="Cabin">Cabin</option>)
        lp.push(<option value="Cottage">Cottage</option>)
        lp.push(<option value="Hotel">Hotel</option>)
        lp.push(<option value="Resort">Resort</option>)
        lp.push(<option value="Nature Lodge">Nature Lodge</option>)

        var currList = lp.slice(this.state.currIndex, this.state.endIndex);

        let type = <select name="" id="place_type" onChange={this.setProperty}>
            <option value="0">Select Place Type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Hotel">Hotel</option>
        </select>
        let property = <select name="" id="place_property">
            {currList}
        </select>
        let entire_place = <select name="" id="gwh">
            <option value="0">What guest will have?</option>
            <option value="Entire Place">Entire place</option>
            <option value="Private Room">Private Room</option>
            <option value="Shared Room">Shared Room</option>
        </select>
        let loc = <select id="place_location">
            <option value="0">Select Place Location</option>
            <option value="City">City</option>
            <option value="Country">Country</option>
        </select>
        return (
            <div className="places-type-step">
                <div className="title-pts">
                    First, let’s narrow things down
                </div>
                <div>
                    Where is the place located?
                </div>
                <div>{loc}</div>
                <div>
                    Plaese choose a place type
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
                <div>
                    <div onClick={this.checkPlaceType} className="handle-step">
                        Next
                    </div>
                </div>
            </div>
        );
}}