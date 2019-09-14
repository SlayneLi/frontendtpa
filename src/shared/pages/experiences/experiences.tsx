import React from 'react';
import Axios from 'axios';
import Experience from '../../component-template/experiences/experience';
import './experiences.scss'

export default class AllExperience extends React.Component {
    state = {
        exp: [],
    }

    componentDidMount = () =>{
        Axios.get("http://kentang.online:3001/get-experiences")
                .then( result=> {
                    this.setState({
                        exp:result.data
                    })
                    console.log(result);
                }).catch( error => {
                    console.log(error);
                });
    }

    render(){
        return(
            <div className="all-exp">
                <div className="experience-section">
                    {this.state.exp.map( (e:any)=>{
                        return(
                            <React.Fragment>
                                <Experience src = {e.pictures} cat={e.experience_type} place={e.experience_loc} name={e.experience_name} price={e.price} D="1.5em" rating={e.average_rating} totalRatings={e.total_rating} spacing="-0.75em" hour={e.estimate_hour} ame={e.amenities} id={e.id} isHidden={false}/>
                            </React.Fragment>
                        )
                    } )}
                </div>
            </div>
        );
}}  