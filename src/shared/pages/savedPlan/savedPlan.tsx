import React from 'react';
import ReactModal from 'react-modal';
import './savedPlan.scss';
import SavedPlanModal from '../../modal/savedPlan/savedPlanModal';
import Axios from 'axios';
import SavePlan from '../../component-template/saved-plan/save-plan-component';
import { Link } from 'react-router-dom';


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
export default class SavedPlan extends React.Component <any,any> {
    state={
        isOpen: false,
        savedPlan: [{
            plan_name: "",
            pic_url: "",
            privacy: "",
            id: "",
        }],
        publicPlan: [{
            plan_name: "",
            pic_url: "",
            privacy: "",
            id: "",
        }],
    }

    componentDidMount = () => {
        Axios.get("http://kentang.online:3001/get-save-plans")
                .then( result=> {
                    let sp = result.data;
                    let pp:any[] = []
                    sp.forEach( (s:any) => {
                        if(s.privacy === "Public"){
                            pp.push(s);
                        }
                    });
                    this.setState({
                        savedPlan:result.data,
                        publicPlan: ShuffleArray(pp)
                    })
                    console.log(result);
                }).catch( error => {
                    console.log(error);
                });
    }

    handleModal = () =>{
        let x = !this.state.isOpen;
        this.setState({isOpen:x})
    }
    


    render(){
        return(
            <div className="saved-plan-page">
                <SavedPlanModal modalState={this.state.isOpen} closeModal={this.handleModal}/>
                <div className="saved-plan-top">
                    <div>List</div>
                    <div className="create-list-button" onClick={this.handleModal}>Create List</div>
                </div>
                <div className="sp-container">
                    <div className="sp-details">
                        <div className="sp-title">Save and share</div>
                        <div className="sp-title">anything on</div>
                        <div className="sp-title">Aivbnb</div>
                        <div className="sp-little">List make it easy to find the perfect</div>
                        <div className="sp-little">spot and plan a trip with others.</div>
                        <div className="create-list-button" onClick={this.handleModal}>Create List</div>                        
                    </div>
                    <div className="sp-image"></div>
                </div>
                <div>
                    Popular List
                </div>
                <div className="popular-list-sp">
                    <div>
                        {this.state.publicPlan.slice(1,4).map( (s:any) => {
                            return(
                                <Link to={"/save-plan/"+s.id}>
                                    <SavePlan title={s.plan_name} url={s.pic_url}/>
                                </Link>
                            )
                        })}
                    </div>
                    <div>
                        {this.state.publicPlan.slice(4,7).map( (s:any) => {
                            return(
                                <Link to={"/save-plan/"+s.id}>
                                    <SavePlan title={s.plan_name} url={s.pic_url}/>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
}}