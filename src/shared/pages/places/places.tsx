import React from 'react';
import PlaceHori from '../../component-template/Places/placeHori';
import axios from 'axios';
import {Map as LeafletMap,TileLayer,Marker,Popup} from 'react-leaflet';
import './places.scss'

export default class AllPlace extends React.Component <any,any>{

    state = {
        lat: 0.0,
        lng: 0.0,
        zoom: 0,
        place: [],
        amenity_set: [],
        geolocation: [],
    }

    componentDidMount(){
        axios.get("http://kentang.online:3001/get-places")
                .then( result => {
                    this.setState({
                        place:result.data,
                        amenity_set: result.data.amenities
                    })
                    console.log(result);
                }).catch( error => {
                    console.log(error);
                });
        axios.get("https://geoip-db.com/json/")
                .then(res => {
                    this.setState({
                        lat: res.data.latitude,
                        lng: res.data.longitude,
                        zoom: 5
                    })
                    console.log(res);
                })
    }
    
    render(){
        return(
            <div className="place-and-map">
                <div className="places-container">
                {this.state.place.map((p:any) =>{
                        return(
                            <div>
                                <PlaceHori src = {p.pictures} category={p.place_type} name={p.place_name} price={p.average_price} D="1.5em" rating={p.average_rating} totalRating={p.total_rating} spacing="-0.75em" ame={p.amenities.slice(0,3)} bathroom={p.bath_room_count} beds={p.bed_count} bedroom={p.bed_room_count} guest={p.max_guest} id={p.id} />
                            </div>
                        )
                    })}
                </div>
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
            </div>
        );
}}