import React from 'react';
import PlaceHori from '../../component-template/Places/placeHori';

export default class AllPlace extends React.Component <any,any>{
    state = {
        place: []
    }

    render(){
        return(
            <div className="place-and-map">
                <div className="places-container">
                {this.state.place.map((p:any) =>{
                        return(
                            <div>
                                <PlaceHori />
                            </div>
                        )
                    })}
                </div>
                <div className="map-container">

                </div>
            </div>
        );
}}