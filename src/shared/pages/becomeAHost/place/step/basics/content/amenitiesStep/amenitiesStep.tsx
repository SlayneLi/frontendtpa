import React from 'react';
import PointInfo from '../../../../../../../component-template/pointInfo/pointInfo';
import axios from 'axios';
import './amenitiesStep.scss';

export default class AmenitiesStep extends React.Component <any,any>{
    state = {
        ame: [],
        count:0,
        isExist: [-1]
    }
    
    handlePrev = () =>{
        this.props.prev();
    }
    
    handleNext = () => {
        if(this.state.count===0){
            alert("Please select at least one amenity!");
            return;
        }
        this.props.next();
    }

    handleAme = (a:any) => {
        let ck = document.getElementById("chk-"+a) as HTMLInputElement;
        let nb = document.getElementById("nmb-"+a) as HTMLInputElement;
        if(ck.checked === false){
            nb.value = "0";
            nb.hidden = true;
            let c = this.state.count;
            c--;
            this.setState({count: c});
        }
        else{
            nb.value = "0";
            nb.hidden = false;
            let c = this.state.count;
            c++;
            this.setState({count: c});
        }
    }

    handleValue = (a:any) =>{
        let nb = document.getElementById("nmb-"+a) as HTMLInputElement;
        if(this.state.isExist.indexOf(+nb.value) !== -1 && nb.value !== "" && nb.value !== "0"){
            alert("Another amenity has this priority number!");
            nb.value = "0";
            return;
        }
        else if(nb.value === "" || nb.value === "0"){
            let x = [-1];
            this.setState({isExist:x});
        }
        else{
            let x = this.state.isExist;
            x.push(+nb.value)
            this.setState({isExist:x})
        }
    }

    componentWillMount(){
        axios.get("http://kentang.online:3001/get-amenities")
                .then( result => {
                    this.setState({
                        ame: result.data
                    })
                    console.log(result);
                }).catch( error => {
                    console.log(error);
                });
        
    }
    
    render(){
        return(
            <div className="amenities-step">
                <div className="as-title">
                    Amenities
                </div>
                <div>
                    Basic:
                </div>
                <div className="amenity-list">
                    {this.state.ame.map( (a:any) => {
                        if(a.amenity_category === "Basic"){
                            return(
                                <div className="amenity-stp" id={"ame-"+a.icon_url}>
                                    <input type="checkbox" id={"chk-"+a.icon_url} onClick={()=> this.handleAme(a.icon_url)}/>
                                    <PointInfo ico={a.icon_url} text={a.icon_name}/>
                                    <input type="number" id={"nmb-"+a.icon_url} hidden onChange={() => this.handleValue(a.icon_url)}/>
                                </div>
                            )
                        }
                        else return(<React.Fragment></React.Fragment>)
                    })}
                </div>
                <div>
                    Safety:
                </div>
                <div className="amenity-list">
                    {this.state.ame.map( (a:any) => {
                        if(a.amenity_category === "Safety Features"){
                            return(
                                <div className="amenity-stp" id={"ame-"+a.icon_name}>
                                    <input type="checkbox" id={"chk-"+a.icon_name} onClick={()=> this.handleAme(a.icon_url)}/>
                                    <PointInfo ico={a.icon_url} text={a.icon_name}/>
                                    <input type="number" id={"nmb-"+a.icon_name} hidden onChange={() => this.handleValue(a.icon_url)}/>
                                </div>
                            )
                        }
                        else return(<React.Fragment></React.Fragment>)
                    })}
                </div>
                <div className="handle-bt">
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