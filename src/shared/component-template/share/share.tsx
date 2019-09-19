import React from 'react';
import ReactModal from 'react-modal'


export default class Share extends React.Component <any,any>{

    state={
        shareModal: false,
    }

    openModal = () => {
        this.setState({shareModal:true});
    }
    
    closeModal = () => {
        this.setState({shareModal:false});
    }

    render(){
        return(
            <React.Fragment>
                <div onClick={this.openModal} style={{cursor: "pointer"}} >
                    <i className="fas fa-share-square" /> Share
                </div>
                <ReactModal
                    isOpen={this.state.shareModal}
                >
                    <i className="fas fa-times closeLogo" onClick={this.closeModal}/>
                    <div>
                        Share
                    </div>
                    <div>
                        
                    </div>
                </ReactModal>
            </React.Fragment>
        );
}}