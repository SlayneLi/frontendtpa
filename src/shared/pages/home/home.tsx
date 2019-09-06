import React from "react";
import './home.scss';
import QuickCard from "./quickcard/quickCard";
import Place from "../../component-template/Places/places";
// import gopherStand from '../../Images/Dummy/gopher-stand.svg';
// import gopherFront from "../../Images/Dummy/gopher-front.svg";
// import gopher from "../../Images/Dummy/gopher.svg";
// import gopherSide from "../../Images/Dummy/gopher-side_color.svg";
import axios from 'axios';
import Experience from "../../component-template/experiences/experience";

export default class HomeComponent extends React.Component{
    state = {
        place: [],
        exp: []
    }

    componentDidMount(){
        axios.get("http://kentang.online:3001/get-places")
                .then( result => {
                    this.setState({
                        place:result.data
                    })
                    console.log(result);
                }).catch( error => {
                    console.log(error);
                });
        axios.get("http://kentang.online:3001/get-experiences")
                .then( result=> {
                    this.setState({
                        exp:result.data
                    })
                    console.log(result);
                }).catch( error => {
                    console.log(error);
                });
    }
    
    render(){
        return(
            <React.Fragment>
                <QuickCard />
                <div className="recomended-place">
                    Recomended Places
                </div>
                <div className="place-around-section">
                    {this.state.place.slice(0,4).map((p:any) =>{
                        return(
                            <div className="place-container">
                                <Place src = {p.pictures} category={p.place_type} loc={p.place_loc} name={p.place_name} price={p.average_price} D="1.5em" rating={p.average_rating} totalRating={p.total_rating} spacing="-0.75em"/>
                            </div>
                        )
                    })}
                    
                    {/* dummy data */}
                    {/* <div className="place-container">
                        <Place src = {gopher} category="category" loc="location" name="Cute Gopher" price = "200" rating={3.33} ratName="goper-rating" D="1.50em"/>
                    </div>
                    <div className="place-container">
                        <Place src = {gopherFront} category="category" loc="location" name="Cute Gopher" price = "200" rating={3} ratName="goper-rating" D="1.50em"/>
                    </div>
                    <div className="place-container">
                        <Place src = {gopherStand} category="category" loc="location" name="Cute Gopher" price = "200" rating={3} ratName="goper-rating" D="1.50em"/>
                    </div>
                    <div className="place-container">
                        <Place src = {gopherSide} category="category" loc="location" name="Cute Gopher" price = "200" rating={3} ratName="goper-rating" D="1.50em"/>
                    </div> */}
                </div>
                <div className="experiences-in-the-spotlight">
                    Experiences in the spotlight
                </div>
                <div className="experience-section">
                    {this.state.exp.slice(0,4).map((e:any) =>{
                        return(
                            <div className="exp-container">
                                <Experience src = {e.pictures} cat={e.experience_type} place={e.experience_loc} name={e.experience_name} price={e.price} D="1.5em" rating={e.average_rating} totalRatings={e.total_rating} spacing="-0.75em"/>
                            </div>
                        )
                    })}
                    {/* <div className="exp-container">
                        <Experience src = {gopher} cat="category" place ="place" name="SUPER GOPHER" price="500" rating={4.86} D="1.5em" totalRatings="312" spacing="-0.75em"/>
                    </div>
                    <div className="exp-container">
                        <Experience src = {gopher} cat="category" place ="place" name="SUPER GOPHER" price="500" rating={4.86} D="1.5em" totalRatings="312" spacing="-0.75em"/>
                    </div>
                    <div className="exp-container">
                        <Experience src = {gopher} cat="category" place ="place" name="SUPER GOPHER" price="500" rating={4.86} D="1.5em" totalRatings="312" spacing="-0.75em"/>
                    </div>
                    <div className="exp-container">
                        <Experience src = {gopher} cat="category" place ="place" name="SUPER GOPHER" price="500" rating={4.86} D="1.5em" totalRatings="312" spacing="-0.75em"/>
                    </div> */}
                </div>
            </React.Fragment>
        );
    }
}