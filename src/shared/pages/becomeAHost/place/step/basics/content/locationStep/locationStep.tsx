import React from 'react';
import './locationStep.scss';
import {Map as LeafletMap,TileLayer,Marker,Popup} from 'react-leaflet';

export default class LocationStep extends React.Component <any,any>{
    state={
        lat: 0.0,
        lng: 0.0,
        zoom: 0,
    }

    handleNext = () =>{
        let l = document.getElementById("location-input") as HTMLInputElement
        if(l.value=== ""){
            alert("Please input where the place located")
            return;
        }
        this.props.next();
    }

    handlePrev = () =>{
        this.props.prev();
    }

    render(){
        return(
            <div className="location-step">
                <div className="map-container">
                    <LeafletMap
                        center = {[this.state.lat,this.state.lng]}
                        zoom = {this.state.zoom}
                        maxZoom = {15}
                        attributionControl = {true}
                        zoomControl={true}
                        doubleClickZoom={true}
                        scrollWheelZoom={true}
                        dragging={true}
                    >
                        <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
                        <Marker position = {[this.state.lat,this.state.lng]}>
                            <Popup>
                                Popup for any custom information.
                            </Popup>
                        </Marker>
                    </LeafletMap>
                </div>
                <div>
                    <input type="text" placeholder="Input the location" id="location-input"/>
                </div>

                <div>Please Select the place located!</div>
                <div className="handle-ls">
                    <div className="handle-step" onClick={this.handlePrev}>
                        Prev
                    </div>
                    <div className="handle-step" onClick={this.handleNext}>
                        Next
                    </div>
                </div>
            </div>
        );
}}