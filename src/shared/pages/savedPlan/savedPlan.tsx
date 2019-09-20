import React from 'react';
import './savedPlan.scss';

export default class SavedPlan extends React.Component <any,any> {
    render(){
        return(
            <div className="saved-plan-page">
                <div className="saved-plan-top">
                    <div>List</div>
                    <div className="create-list-button">Create List</div>
                </div>
                <div className="sp-container">
                    <div className="sp-details">
                        <div className="sp-title">Save and share</div>
                        <div className="sp-title">anything on</div>
                        <div className="sp-title">Aivbnb</div>
                        <div className="sp-little">List make it easy to find the perfect</div>
                        <div className="sp-little">spot and plan a trip with others.</div>
                        <div className="create-list-button">Create List</div>                        
                    </div>
                    <div className="sp-image"></div>
                </div>
            </div>
        );
}}