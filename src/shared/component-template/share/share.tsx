import React from 'react';
import ReactModal from 'react-modal'
import FacebookShare from '../../share-link/facebook-share'
import CopyToClipboard from "react-copy-to-clipboard"
import {EmailShareButton} from 'react-share';

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
                    <div onClick={this.closeModal} className="closeLogo">
                        <i className="fas fa-times" />
                    </div>
                    <div>
                        Share
                    </div>
                    <div>
                        <FacebookShare link={this.props.link} type={this.props.type} />
                    </div>
                    <div>
                        <EmailShareButton url={window.location.href}>
                            <div>
                                EmailShare
                            </div>
                        </EmailShareButton>
                    </div>
                    <div>
                        <CopyToClipboard text={window.location.href}>
                            <div>
                                COPY LINK!
                            </div>
                        </CopyToClipboard>
                    </div>
                </ReactModal>
            </React.Fragment>
        );
}}