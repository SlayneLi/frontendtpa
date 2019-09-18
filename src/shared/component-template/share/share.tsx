import React from 'react';
import ReactModal from 'react-modal'
import FacebookShare from '../../share-link/facebook-share'

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
                    <i className="fa fa-share" /> Share
                </div>
                <ReactModal
                    isOpen={this.state.shareModal}
                >
                    <i className="fa fa-close closeLogo" onClick={this.closeModal}/>
                    <div>
                        Share
                    </div>
                    <div>
                        <FacebookShare link={this.props.link} type={this.props.type} />
                    </div>
                </ReactModal>
            </React.Fragment>
        );
}}