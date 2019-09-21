import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { bindKeyboard } from 'react-swipeable-views-utils'
import SaveComponent from '../../component-template/saved-plan/save-plan-component'
import './save-detail.scss'
import Axios from 'axios';
import PlaceHori from '../../component-template/Places/placeHori';
import {Map as LeafletMap,TileLayer,Marker,Popup} from 'react-leaflet';
import Experience from '../../component-template/experiences/experience';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

export default class SaveDetail extends Component <any,any> {
    
    state = {
        index: 0,
        id: "",
        data:{
            plan_name: "",
            pic_url: "",
            privacy: "",
            id: "",
            plan_date: "",
            guest_count: 0,
        },
        places:[{
            pictures: [],
            amenities: [],
        }],
        exp:[{
            pictures: [],
            amenities: [],
        }],
        lat: 0.0,
        lng: 0.0,
        zoom: 0,
    };

    componentWillMount(){
        this.setState({id: this.props.match.params.id});
        Axios.get(`http://kentang.online:3001/get-save-plan/${this.props.match.params.id}`)
            .then( result => {
                console.log(result);
                let d = result.data
                let p:any[] = []
                let e:any[] = []

                d.place_id.forEach((pi:any) => {
                    Axios.get(`http://kentang.online:3001/get-place/${pi}`)
                    .then( rs =>{
                        p.push(rs.data)
                        console.log(rs);
                    }).catch(error=>{
                        console.log(error)
                    })
                });

                d.experience_id.forEach((ei:any) => {
                    Axios.get(`http://kentang.online:3001/get-experience/${ei}`)
                    .then( rs =>{
                        e.push(rs.data)
                        console.log(rs);
                    }).catch(error=>{
                        console.log(error)
                    })
                });

                this.setState({
                    data: result.data,
                    places: p,
                    exp: e,
                });
                console.log(this.state);
            })
            .catch( error => {
                console.log(error);
            });
        Axios.get("https://geoip-db.com/json/")
            .then(res => {
                this.setState({
                    lat: res.data.latitude,
                    lng: res.data.longitude,
                    zoom: 5
                })
                console.log(res);
            })
    }

    handleChangeIndex = (index:any) => {
        this.setState({
            index,
        });

        if(this.state.index == 0){
            var e = document.getElementById("title") as HTMLDivElement;
            e.innerHTML = "Place"
        }
        else{
            var e = document.getElementById("title") as HTMLDivElement;
            e.innerHTML = "Experience"
        }
    }

    render() {
        const {index} = this.state;

        return (
            <div className="save-detail">
                <div className="left">
                    <div className="title">
                        {this.state.data.plan_name}
                    </div>
                    <div>
                        {this.state.data.plan_date} | {this.state.data.guest_count} Guest(s)
                    </div>
                    <div>
                        <img src={this.state.data.pic_url} alt=""/>
                    </div>
                    <div id="title">
                        Place
                    </div>
                    <BindKeyboardSwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                        <div>
                            {this.state.places.map( (p:any) => {
                                return(
                                    <PlaceHori src = {p.pictures} category={p.place_type} name={p.place_name} price={p.average_price} D="1.5em" rating={p.average_rating} totalRating={p.total_rating} spacing="-0.75em" ame={p.amenities.slice(0,3)} bathroom={p.bath_room_count} beds={p.bed_count} bedroom={p.bed_room_count} guest={p.max_guest} id={p.id} />
                                )
                            } )}
                        </div>
                        <div>
                            {this.state.exp.map( (e:any) => {
                                return(
                                    <Experience src = {e.pictures} cat={e.experience_type} place={e.experience_loc} name={e.experience_name} price={e.price} D="1.5em" rating={e.average_rating} totalRatings={e.total_rating} spacing="-0.75em" hour={e.estimate_hour} ame={e.amenities} isHidden = {true} id={e.id}/>
                                )
                            })}
                        </div>
                    </BindKeyboardSwipeableViews>
                </div>
                <div className="right">
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
        )
    }
}
