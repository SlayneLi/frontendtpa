import React from 'react';
import Axios from 'axios';
import Experience from '../../component-template/experiences/experience';
import './experiences.scss'

export default class AllExperience extends React.Component {
    state = {
        exp: [],
        res: [],
        price: 10
    }

    componentDidMount = () =>{
        Axios.get("http://kentang.online:3001/get-experiences")
                .then( result=> {
                    this.setState({
                        exp:result.data,
                        res:result.data
                    })
                    console.log(result);
                }).catch( error => {
                    console.log(error);
                });
    }

    handleFilter = (event:any) => {
        let value = event.target.value;
        let filter:any[] = []
        let ex = this.state.exp;
        ex.forEach((e:any) => {
            if(e.price <= value)
                filter.push(e);
        });
        this.setState({price:value, res:filter});
    }

    render(){
        return(
            <div className="all-exp">
                <div className="search">
                    <div className="searchBar">
                        Filter Price
                        <input type="range" id="filter-price" name="range-filter" min={1} max={1000} onChange={this.handleFilter} value={this.state.price} step={10}/>
                        <input type="number" step={100} value={this.state.price} name="number-filter" onChange={this.handleFilter} id="numeric-filter"/>
                    </div>
                </div>
                <div className="experience-section">
                    {this.state.res.map( (e:any)=>{
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