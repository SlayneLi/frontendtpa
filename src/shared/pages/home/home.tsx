import React from "react";
import './home.scss';
import QuickCard from "./quickcard/quickCard";
import Place from "../../component-template/Places/places";
import gopherStand from '../../Images/Dummy/gopher-stand.svg';
import gopherFront from "../../Images/Dummy/gopher-front.svg";
import gopher from "../../Images/Dummy/gopher.svg";
import gopherSide from "../../Images/Dummy/gopher-side_color.svg";
import axios from 'axios';

export default class HomeComponent extends React.Component{
    
    async componentDidMount(){
        await axios.get("http://kentang.online:3001/get-places")
                    .then( result => {
                        console.log(result);
                    }).catch( error => {
                        console.log(error);
                    });
    }
    
    render(){
        return(
            <React.Fragment>
                <QuickCard />
                <div className="place-around-section">
                    <div className="place-container">
                        <Place src = {gopher} category="go" loc="golang" name="Cute Gopher" price = "200" rating={3.33} ratName="goper-rating" starDimension={1.15}/>
                    </div>
                    <div className="place-container">
                        <Place src = {gopherFront} category="go" loc="golang" name="Cute Gopher" price = "200" rating={3} ratName="goper-rating"/>
                    </div>
                    <div className="place-container">
                        <Place src = {gopherStand} category="go" loc="golang" name="Cute Gopher" price = "200" rating={3} ratName="goper-rating"/>
                    </div>
                    <div className="place-container">
                        <Place src = {gopherSide} category="go" loc="golang" name="Cute Gopher" price = "200" rating={3} ratName="goper-rating"/>
                    </div>

                </div>
                <div className="experience-section">

                </div>
            </React.Fragment>
        );
    }
}