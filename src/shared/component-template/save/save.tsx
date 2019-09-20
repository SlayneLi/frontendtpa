import React from 'react';
import ReactModal from 'react-modal'

export default class Save extends React.Component <any,any>{
    
    state={
        saveModal: false,
    }

    openModal = () => {
        if(localStorage.getItem("email") === null){
            alert("You must login first");
            return;
        }
        else{
            this.setState({saveModal:true});
            console.log(this.state);
        }
    }
    
    closeModal = () => {
        this.setState({saveModal:false});
    }

    render(){
        return(
            <React.Fragment>
                <div onClick={this.openModal}  style={{cursor: "pointer"}}>
                    <i className="fas fa-heart"/> Save
                </div>
                <ReactModal
                    isOpen={this.state.saveModal}
                >
                    <div className="closeLogo"  onClick={this.closeModal}>
                        <i className="fas fa-times "/>
                    </div>
                    <div>
                        {this.props.id}
                    </div>
                    <div>
                        
                    </div>
                </ReactModal>
            </React.Fragment>
        );
}}