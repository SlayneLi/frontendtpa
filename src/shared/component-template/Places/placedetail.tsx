import React, { Component } from 'react';
import Axios from 'axios';
import './placedetail.scss'
import Guest from '../guest/guest';
import Share from '../share/share';
import Save from '../save/save';
import PhotoModal from '../../modal/photos/photo';
import PointInfo from '../pointInfo/pointInfo';
import ReactModal from 'react-modal'
import DatePicker from '../date-picker/date-picker';
import StarRatings from 'react-star-ratings';
import UserReview from '../review/userReview';

export default class placedetail extends Component<any,any> {
    state = {
        id : "",
        data : {
            max_guest: 0,
            place_name: "",
            place_loc: "",
            host_info: {
                host_name: "",
                host_picture: ""
            },
            bed_room_count: 0,
            bed_count: 0,
            bath_room_count: 0,
            amenities: [{
                icon_name: "",
                icon_url: "",
                amenity_category: "",
            }],
            accuration: 0,
            communication: 0,
            clean: 0,
            location: 0,
            total_rating: 0,
            average_rating: 0,
            average_price:0,
            reviews:[{
                people_name:"",
                people_picture:"",
                posted_time:"",
                review_content:"",
            }],
            place_desc:"",
        },
        pic: [],
        openPic:false,
        openAllAme:false,
    }

    openModal = () =>{
        this.setState({openAllAme:true});
    }
    
    closeModal = () => {
        this.setState({openAllAme:false});
    }

    showAmenities = ()=>{
        var b = []
        b.push(
            <div className="basic-ame">
                <div>
                    Basic:
                </div>
                <div>
                    {this.state.data.amenities.map((a:any) => {
                        if(a.amenity_category === "Basic"){
                            return(
                                <span>
                                    <PointInfo ico={a.icon_url} text={a.icon_name} />
                                </span>)
                        }
                        return(<span></span>)
                    })}
                </div>
            </div>
        );
        b.push(
            <div className="safety-ame">
                <div>
                    Safety:
                </div>
                <div>
                    {this.state.data.amenities.map((a:any)=>{
                        if(a.amenity_category !== "Basic"){
                            return(
                                <span>
                                    <PointInfo ico={a.icon_url} text={a.icon_name}/>
                                </span>)
                        }
                        return(<span></span>)
                    })}
                </div>
            </div>
        )
        return b;
        
    }

    openClosePhotos = () =>{
        var x = !this.state.openPic;
        this.setState({openPic: x});
    }

    openCloseAme= ()=>{
        var x = !this.state.openAllAme;
        this.setState({openAllAme: x});
    }

    componentWillMount(){
        this.setState({id: this.props.match.params.id});
        Axios.get(`http://kentang.online:3001/get-place/${this.props.match.params.id}`)
            .then( result => {
                this.setState({data: result.data,
                                pic: result.data.pictures});
                console.log(result);
            })
            .catch( error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="place-detail-container">
                <div className="flying-button">
                    <div onClick={this.openClosePhotos}>
                        View
                    </div>
                    <PhotoModal pic={this.state.pic} openModal={this.state.openPic} closeModal={this.openClosePhotos}/>
                    <Share />
                    <Save id={this.state.id}/>
                </div>
                <div className="place-detail-image">
                    <div>
                        <img src={this.state.pic[0]} alt="plc"/>
                        <img src={this.state.pic[1]} alt="plc"/>
                        <img src={this.state.pic[2]} alt="plc"/>
                    </div>
                    <div>
                        <img src={this.state.pic[3]} alt="plc"/>
                        <img src={this.state.pic[4]} alt="plc"/>
                        <img src={this.state.pic[5]} alt="plc"/>
                    </div>
                </div>
                <div className="details-container">
                    <div className="info-container">
                        <div className="info-header">
                            <div className="info-title">
                                <div className="info-name">
                                    {this.state.data.place_name}
                                </div>
                                <div>
                                    {this.state.data.place_loc}
                                </div>
                            </div>
                            <div className="contact-info">
                                <div>
                                    <img src={this.state.data.host_info.host_picture} alt="pic"/>
                                </div>
                                <div>
                                    {this.state.data.host_info.host_name}
                                </div>
                            </div>
                        </div>
                        <div className="spec-info">
                            <div>
                                <PointInfo ico="fas fa-home" text="Entire Apartment"/>
                                <div className="text-spec">
                                    {this.state.data.max_guest} guest(s) {this.state.data.bed_room_count} bedroom(s) {this.state.data.bed_count} bed(s) {this.state.data.bath_room_count} bath(s)                                    
                                </div>
                            </div>
                        </div>
                        <div className="place-detail-desc" style={{textAlign: "left" , wordWrap: "break-word"}}>
                            {this.state.data.place_desc}
                        </div>
                        <hr/>
                        <div className="place-ame-detail">
                            <div>
                                Amenities:
                            </div>
                            <div>
                                {this.state.data.amenities.slice(0,4).map( (a:any) => {
                                    return(
                                        <PointInfo ico={a.icon_url} text={a.icon_name}/>
                                    )
                                })}
                            </div>
                            <div style={{cursor: "pointer", textAlign: "left"}} onClick={this.openCloseAme}>
                                Show all amenities
                            </div>
                            <ReactModal
                                isOpen={this.state.openAllAme}
                            >
                                <i className="fa fa-close closeLogo" onClick={this.closeModal}></i>
                                <div className="amenities-modal">
                                    <div>
                                        All Amenities:
                                    </div>
                                    <div>
                                        {this.showAmenities()}                                        
                                    </div>
                                </div>
                            </ReactModal>
                        </div>
                        <hr/>
                        <div className="Availability">
                            <div>
                                Available date
                            </div>
                            <DatePicker date={[]}/>
                        </div>
                        <hr/>
                        <div className="Review-Header">
                            <div>
                                {this.state.data.total_rating} Review(s) <StarRatings rating={this.state.data.average_rating} starDimension="1em" starSpacing="-0.75em"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Search Review"/>
                            </div>
                        </div>
                        <div className="category-review">
                            <div>
                                <div>
                                    <div>
                                        Accuracy
                                    </div>
                                    <StarRatings rating={this.state.data.accuration} starDimension="1em" starSpacing="-0.75em"/>
                                </div>
                                <div>
                                    <div>
                                        Communication
                                    </div>
                                    <StarRatings rating={this.state.data.communication} starDimension="1em" starSpacing="-0.75em"/>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        Cleanliness
                                    </div>
                                    <StarRatings rating={this.state.data.clean} starDimension="1em" starSpacing="-0.75em"/>
                                </div>
                                <div>
                                    <div>
                                        Location
                                    </div>
                                    <StarRatings rating={this.state.data.location} starDimension="1em" starSpacing="-0.75em"/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div>
                            {this.state.data.reviews.map( (r:any) => {
                                return(
                                    <UserReview img={r.people_picture} name={r.people_name} jday={r.posted_time} rating={r.review_rate} det={r.review_content}/>
                                )
                            })}
                        </div>
                        <hr/>
                        <div className="host-complete-info">
                            <div className="host-desc">
                                <div className="host-name">
                                    Hosted by {this.state.data.host_info.host_name}
                                </div>
                                div
                            </div>
                            <div className="host-pp">
                                <img src={this.state.data.host_info.host_picture} alt="hostPP"/>
                            </div>
                        </div>
                    </div>
                    <div className="guest-info-container">
                        <div style={{textAlign:"left",margin: "0 7%"}}>
                            {this.state.data.average_price} / night
                        </div>
                        <div style={{textAlign:"left",margin: "0 7%"}}>
                        <StarRatings rating={this.state.data.average_rating} starDimension="1em" starSpacing="-0.75em"/> ({this.state.data.total_rating})
                        </div>
                        <div>
                            <input type="date" placeholder="Check-in"/> -> <input type="date" placeholder="Checkout"/>
                        </div>
                        <Guest maxGuest={this.state.data.max_guest}/>
                        <button>Book</button>
                    </div>
                </div>
            </div>
        )
    }
}
