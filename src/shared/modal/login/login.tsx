import React from 'react';
import ReactModal from 'react-modal';
import close from "../../Images/close.svg";
import "./login.scss";
import { LoginView } from './view/LoginView';

export default class LoginModal extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            showModal: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal (){
        this.setState({showModal:true});
    }
    
    closeModal(){
        this.setState({showModal:false});
    }

    public modalState(){
        const currState = this.state;
        return currState["showModal"];
    }

    dummySubmit = async(values: any) =>{
        console.log(values);
        return null;
    }

    render(){
        return(
            <div>
                <div onClick={this.openModal}>Login</div>
                <ReactModal
                    isOpen={this.modalState()}
                >
                    <img src={close} alt="close logo" onClick={this.closeModal} className="closeLogo"/>                    
                    <LoginView submit={this.dummySubmit}/>
                </ReactModal>
            </div>
        );
    }

}