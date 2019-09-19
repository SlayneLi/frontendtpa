import React from 'react';
import {Map as LeafletMap,TileLayer,Marker,Popup} from 'react-leaflet';

export default class MeetingLocationStep extends React.Component<any,any> {
    state={
        lat: 0.0,
        lng: 0.0,
        zoom: 0,
    }
    
    checkBasic = () => {
        let c = document.getElementById("country-input") as HTMLInputElement;
        let sa = document.getElementById("street-address-input") as HTMLInputElement;
        let ci = document.getElementById("city-input") as HTMLInputElement;
        let si = document.getElementById("state-input") as HTMLInputElement;
        let zpi = document.getElementById("zip-code-input") as HTMLInputElement;
        let lni = document.getElementById("location-name-input") as HTMLInputElement;
        
        if(c.value === ""){
            alert("Please fill the country where the experience located!");
            return;
        }
        if(sa.value === ""){
            alert("Please fill the street address where the experience located!");
            return;
        }
        if(ci.value === ""){
            alert("Please fill the city where the experience located!");
            return;
        }
        if(si.value === ""){
            alert("Please fill the state where the experience located!");
            return;
        }
        if(zpi.value === ""){
            alert("Please fill the zip code!");
            return;
        }
        if(lni.value === ""){
            alert("Please fill the location name where the experience located!");
            return;
        }
        this.props.next();
    }

    render(){
        return(
            <div className="meeting-location-step">
                <div className="title-text">
                    Where should the guest meet you?
                </div>
                <div>
                    Country / Region
                </div>
                <div>
                    <input type="text" id="country-input" placeholder="Country"/>
                </div>
                <div>
                    Street Address
                </div>
                <div>
                    <input type="text" id="street-address-input" placeholder="Street Address"/>
                </div>
                <div className="city-state">
                    <div>
                        <div>
                            City
                        </div>
                        <div>
                            <input type="text" id="city-input" placeholder="City"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            State
                        </div>
                        <div>
                            <input type="text" id="state-input" placeholder="State"/>
                        </div>
                    </div>
                </div>
                <div>
                    Zip Code
                </div>
                <div>
                    <input type="text" id="zip-code-input" placeholder="Zip Code"/>
                </div>
                <div>
                    Location Name
                </div>
                <div>
                    <input type="text" id="location-name-input" placeholder="Location Name"/>
                </div>
                <div>
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
                    <div className="handle-step" onClick={this.checkBasic}>
                        Next
                    </div>
                </div>
                
            </div>
        );
}}