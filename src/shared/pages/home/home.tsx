import React from "react";
import './home.scss';
import QuickCard from "./quickcard/quickCard";
import Place from "../../component-template/Places/placeCard";
import axios from 'axios';
import Experience from "../../component-template/experiences/experience";
import { Link } from "react-router-dom";
import Gopher from "../../Images/Background/galaxy-gopher.png"

function compareR(a:any,b:any){
    const rateA = a.average_rating;
    const rateB = b.average_rating;

    let comparition = 0;
    if(rateA <= rateB){
        comparition = 1;
    }
    else{
        comparition = -1;
    }
    return comparition;
}

function compareRev(a:any,b:any){
    const rateA = a.total_rating;
    const rateB = b.total_rating;

    let comparition = 0;
    if(rateA <= rateB){
        comparition = 1;
    }
    else{
        comparition = -1;
    }
    return comparition;
}

export default class HomeComponent extends React.Component <any,any>{
    state = {
        place: [],
        exp: []
    }

    componentDidMount(){
        axios.get("http://kentang.online:3001/get-places")
                .then( result => {
                    result.data = result.data.sort(compareR)
                    console.log(result.data)
                    this.setState({
                        place:result.data
                    })
                    console.log(result);
                }).catch( error => {
                    console.log(error);
                });
        axios.get("http://kentang.online:3001/get-experiences")
                .then( result=> {
                    result.data = result.data.sort(compareRev)
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
                <img src={Gopher} alt="background" className="background-home-image"/>
                <QuickCard />
                <div className="recomended-place">
                    Recomended Places based on Ratings
                </div>
                <div className="place-around-section">
                    {this.state.place.slice(0,4).map((p:any) =>{
                        return(
                            <Link to={`/place/${p.id}`}>
                                <Place src = {p.pictures} category={p.place_type} loc={p.place_loc} name={p.place_name} currency={this.props.currency} price={p.average_price} D="1.5em" rating={p.average_rating} totalRating={p.total_rating} spacing="-0.75em"/>
                            </Link>
                        )
                    })}
                </div>
                {
                    <Link to={"/places"}>
                        <div className="show-all">
                            Show all places>>
                        </div>
                    </Link>
                }
                <div className="experiences-in-the-spotlight">
                    Experiences in the spotlight based on most reviews
                </div>
                <div className="experience-section">
                    {this.state.exp.slice(0,4).map((e:any) =>{
                        return(
                            <Experience src = {e.pictures} cat={e.experience_type} place={e.experience_loc} name={e.experience_name} currency={this.props.currency} price={e.price} D="1.5em" rating={e.average_rating} totalRatings={e.total_rating} spacing="-0.75em" hour={e.estimate_hour} ame={e.amenities} isHidden = {true} id={e.id}/>
                        )
                    })}
                </div>
                <Link to={"/experiences"}>
                    <div className="show-all">
                        Show all experiences>>
                    </div>
                </Link>
            </React.Fragment>
        );
    }
}
