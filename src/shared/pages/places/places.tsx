import React from 'react';
import PlaceHori from '../../component-template/Places/placeHori';
import axios from 'axios';


export default class AllPlace extends React.Component <any,any>{
    state = {
        place: []
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
    }

    render(){
        return(
            <div className="place-and-map">
                <div className="places-container">
                {this.state.place.map((p:any) =>{
                        return(
                            <div>
                                <PlaceHori src = {p.pictures} category={p.place_type} name={p.place_name} price={p.average_price} D="1.5em" rating={p.average_rating} totalRating={p.total_rating} spacing="-0.75em"/>
                            </div>
                        )
                    })}
                </div>
                <div className="map-container">

                </div>
            </div>
        );
}}