import React, { Component } from 'react';
import Axios from 'axios';
import Share from '../share/share';
import PointInfo from '../pointInfo/pointInfo';
import Save from '../save/save';
import Stories from 'react-insta-stories';
import './experiencedetail.scss'
import ReactModal from 'react-modal'
import PhotoModal from '../../modal/photos/photo';
import StarRatings from 'react-star-ratings'
import Review from '../review/review';

function ShuffleArray(arr:any){
    let temp,num;
    for(let i = arr.length -1 ; i > 0 ; i--){
        num = Math.floor(Math.random() * (i + 1));
        temp = arr[num];
        arr[num] = arr[i];
        arr[i] = temp;
    }
    console.log(arr)
    return arr;
}

export default class experiencedetail extends Component<any,any> {
    private instaStoryRef: React.RefObject<Component>
    constructor(props:any){
        super(props);

        this.instaStoryRef = React.createRef();
    }

    openModal = () =>{
        this.setState({openAllAme:true});
    }
    
    closeModal = () => {
        this.setState({openAllAme:false});
    }

    state = {
        playPause: "pause",
        id : "",
        data : {
            experience_type: "",
            experience_name:"",
            experience_loc:"",
            experience_description:"",
            experience_what_to_bring:[],
            experience_rundown: "",
            estimate_hour: 0,
            amenities: [{
                icon_url: "",
                icon_name: "",
                amenity_category: "",
            }],
            host_info: {
                host_name: "",
                host_picture: "",
                language: [],

            },
            average_rating: 0.00,
            total_rating: 0,
            reviews:[{
                people_name:"",
                people_picture:"",
                posted_time:"",
                review_content:"",
            }],
            location:0,
            value:0,

        },
        video: '',
        pictures:[],
        openAllAme:false,
        openPic:false,
    }

    componentWillMount(){
        this.setState({id: this.props.match.params.id});
        Axios.get(`http://kentang.online:3001/get-experience/${this.props.match.params.id}`)
            .then( result => {
                console.log(result);
                this.setState({data: result.data,
                            pictures: ShuffleArray(result.data.pictures),
                            video: result.data.video
                });
            })
            .catch( error => {
                console.log(error);
            });
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

    openCloseAme= ()=>{
        var x = !this.state.openAllAme;
        this.setState({openAllAme: x});
    }

    openClosePhotos = () =>{
        var x = !this.state.openPic;
        this.setState({openPic: x});
    }

    playAndPause = (e:any) =>{
        e.preventDefault();
        if(this.state.playPause === "play"){
            this.setState({playPause:"pause"})
        }
        else{
            this.setState({playPause:"play"})
        }
    }

    render() {
        return (
            <div className="experience-detail-container">
                <div className="overview-detail-exp">
                    <div className="stories-detail-exp">
                        <Stories
                            stories = {
                                [{
                                    url: this.state.pictures[0],
                                },
                                {
                                    url: this.state.video,
                                    type: 'video'
                                }]
                                
                            }
                            defaultInterval={5000}
                            width={350}
                            heigh={400}
                        />
                        <button onClick={(event) =>this.playAndPause(event)}> <i className={"fa fa-"+this.state.playPause}></i></button>
                    </div>
                    <div className="exp-summary-detail">
                        <div className="summary-header">
                            <div>
                                {this.state.data.experience_type}
                            </div>
                            <div className="misc">
                                <div>
                                    <Share link={this.props.match.params.id} type="experience"/>
                                </div>
                                <div>
                                    <Save exp={this.state.id}/>
                                </div>
                            </div>
                        </div>
                        <div className="summary-info">
                            <div className="name-info">
                                {this.state.data.experience_name}
                            </div>
                            <div className="main-info">
                                <PointInfo ico="fas fa-map-marker-alt" text={this.state.data.experience_loc}/>
                                <PointInfo ico="far fa-clock" text={this.state.data.estimate_hour + " hour (s)"} />
                                <div className="amenities-info">
                                    {this.state.data.amenities.slice(0,5).map((a:any) => {
                                        return(
                                            <PointInfo ico={a.icon_url} text={a.icon_name} />
                                        )
                                    })}
                                    <ReactModal
                                        isOpen={this.state.openAllAme}
                                    >
                                        <div className=" closeLogo" onClick={this.closeModal}>
                                            <i className="fas fa-times" />
                                        </div>
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
                                <div onClick={this.openCloseAme} style={{cursor: "pointer"}}>Show All Amenities</div>
                            </div>
                        </div>
                        <hr/>
                        <div className="about-host">
                            <div className="host-detail">
                                <div>
                                    <img src={this.state.data.host_info.host_picture} alt="pic"/>
                                </div>
                                <div>
                                    {this.state.data.host_info.host_name}
                                </div>
                            </div>
                            <div className="host-language">
                                {this.state.data.host_info.language.map((e:any) =>{
                                    if(e === this.state.data.host_info.language[0])
                                        return(
                                            <div>
                                                {e} - Primary Language
                                            </div>
                                        )
                                    else
                                        return(
                                            <div>{e}</div>
                                        )
                                })}
                            </div>
                            <div>
                                Contact Host
                            </div>
                        </div>
                        <hr/>
                        <div className="exp-desc">
                            About the place: <br/>
                            {this.state.data.experience_description}
                        </div>
                        <hr/>
                        <div className='exp-rundown'>
                            Experience rundown: <br/>
                            {this.state.data.experience_rundown}
                        </div>
                        <hr/>
                        <div className="what-to-bring">
                            What you must bring:
                            <ul>
                                {this.state.data.experience_what_to_bring.map((e:any)=>{
                                    return(
                                        <li>{e}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="galery-section">
                    <div className="galery-section-side">
                        Guest Photos
                    </div>
                    <div className="photos-exp">
                        <div>
                            <img src={this.state.pictures[0]} alt="pic"/>
                            <img src={this.state.pictures[1]} alt="pic"/>
                            <img src={this.state.pictures[2]} alt="pic"/>
                        </div>
                        <div>
                            <img src={this.state.pictures[3]} alt="pic"/>
                            <img src={this.state.pictures[4]} alt="pic"/>
                            <img src={this.state.pictures[5]} alt="pic"/>
                        </div>
                        <div onClick={this.openClosePhotos}>
                            See more photos
                        </div>
                        <PhotoModal pic={this.state.pictures} openModal={this.state.openPic} closeModal={this.openClosePhotos}/>
                    </div>
                </div>
                <hr/>
                <div className="rating-section">
                    <div className="rating-side-section">
                        <div>
                            Average Rating :
                        </div>
                        <div>
                            <StarRatings rating={this.state.data.average_rating} starDimension="1em" starSpacing="-0.75em"/> ({this.state.data.total_rating})
                        </div>
                    </div>
                    <div>
                        <div className="category-review">
                            <div>
                                <div>
                                    <div>
                                        Location
                                    </div>
                                    <StarRatings rating={this.state.data.location} starDimension="1em" starSpacing="-0.75em"/>
                                </div>
                                <div>
                                    <div>
                                        Value
                                    </div>
                                    <StarRatings rating={this.state.data.value} starDimension="1em" starSpacing="-0.75em"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Review review={this.state.data.reviews} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
