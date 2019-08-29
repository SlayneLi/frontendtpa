import React from "react";
import './home.scss';

export default class HomeComponent extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="quickcard-section">
                    <div className="quickcard-box">
                        <div className="title">
                            <h1>Book unique places to stay and things to do.</h1>
                        </div>
                        <div className="search-content">
                            <label htmlFor="">WHERE</label>
                        </div>
                    </div>
                </div>
                <div className="explore-section">

                </div>
                <div className="place-around-section">

                </div>
                <div className="experience-section">

                </div>
            </React.Fragment>
        );
    }
}