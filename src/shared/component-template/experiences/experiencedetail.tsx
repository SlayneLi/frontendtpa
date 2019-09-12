import React, { Component } from 'react';
import Axios from 'axios';
import Share from '../share/share';
import PointInfo from '../pointInfo/pointInfo';
import Save from '../save/save';
import Stories from 'react-insta-stories';
import './experiencedetail.scss'
import ReactModal from 'react-modal'

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

export default class experiencedetail extends Component<any,{}> {

    openModal = () =>{
        this.setState({showModal:true});
    }
    
    closeModal = () => {
        this.setState({showModal:false});
    }

    public modalState = ()=>{
        const currState = this.state;
        return currState["showModal"];
    }
    
    
    
    state = {
        showModal: false,
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
        },
        video: '',
        pictures:[],
        openAllAme:false,
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
        var a = [];
        var first = true;
        for(let i = 0;i<this.state.data.amenities.length;i++){
            if(this.state.openAllAme === false && i===5)
                break;
            if(this.state.data.amenities[i].amenity_category !== "Basic" && first){
                first = false;
            }
            a.push(<PointInfo ico={this.state.data.amenities[i].icon_url} text={this.state.data.amenities[i].icon_name} />)
        }
        return a;
    }

    openCloseAme= ()=>{
        var x = !this.state.openAllAme;
        this.setState({openAllAme: x});
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
                    </div>
                    <div className="exp-summary-detail">
                        <div className="summary-header">
                            <div>
                                {this.state.data.experience_type}
                            </div>
                            <div className="misc">
                                <div>
                                    <Share />
                                </div>
                                <div>
                                    <Save />
                                </div>
                            </div>
                        </div>
                        <div className="summary-info">
                            <div className="name-info">
                                {this.state.data.experience_name}
                            </div>
                            <div className="main-info">
                                <PointInfo ico="map-marker" text={this.state.data.experience_loc}/>
                                <PointInfo ico="clock-o" text={this.state.data.estimate_hour + " hour (s)"} />
                                <div className="amenities-info">
                                    {this.showAmenities()}
                                    <ReactModal
                                        isOpen={this.state.showModal}
                                    >
                                        
                                    </ReactModal>
                                </div>
                                <div onClick={this.openCloseAme}>Show All Amenities</div>
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
                    </div>
                </div>
            </div>
        )
    }
}
