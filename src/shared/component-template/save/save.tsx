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
                    <i className="fa fa-heart-o"/> Save
                </div>
                <ReactModal
                    isOpen={this.state.saveModal}
                >
                    <i className="fa fa-close closeLogo" onClick={this.closeModal}/>
                    <div>
                        {this.props.id}
                    </div>
                    <div>
                        
                    </div>
                </ReactModal>
            </React.Fragment>
        );
}}