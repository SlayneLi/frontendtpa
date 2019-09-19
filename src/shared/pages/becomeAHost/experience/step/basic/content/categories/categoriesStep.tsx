import React from 'react';

export default class CategoriesStep extends React.Component<any,any> {
    checkBasic = () => {
        let c = document.getElementById("categories-selector") as HTMLSelectElement;
        if(c.value === "0"){
            alert("Please select experiences categories!");
            return;
        }
        this.props.next();
    }

    handlePrev = () => {
        this.props.prev();
    }
    
    render(){
        let cat = [];
        cat.push(
            <React.Fragment >
                <option value="0">Select Categories</option>
                <option value="craft-class">Craft Class</option>
                <option value="food-tasting">Food Tasting</option>
                <option value="4-day-trip">4 Day Trip</option>
                <option value="overnight-trip">Overnight Trip</option>
                <option value="photo-shoot">Photo Shoot</option>
                <option value="bike-ride">Bike Ride</option>
                <option value="workshop">Workshop</option>
                <option value="food-walk">Food Walk</option>
                <option value="culture-walk">Culture Walk</option>
                <option value="nature-walk">Nature Walk</option>
            </React.Fragment>
        )
        return(
            <div className="categories-step">
                <div className="title-text">
                    What type of experience will you host
                </div>
                <div>
                    <select id="categories-selector">
                        {cat}
                    </select>
                </div>
                <div className="handle-bt">
                    <div className="handle-step" onClick={this.handlePrev}>
                        Prev
                    </div>
                    <div className="handle-step" onClick={this.checkBasic}>
                        Next
                    </div>
                </div>
            </div>
        );
}}