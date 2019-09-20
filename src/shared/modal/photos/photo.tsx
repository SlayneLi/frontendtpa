import React, { Fragment } from 'react';
import ReactModal from 'react-modal';
import './photo.scss'
import ReactAliceCarousel from 'react-alice-carousel';

export default class PhotoModal extends React.Component <any,any>{
    resp= {
        o:{
            items: 1
        }
    }
    pad ={
        paddingLeft: 0,
        paddingRight: 0
    }
    render(){
        return(
            <Fragment>
                <ReactModal
                    isOpen ={this.props.openModal}
                    className="PhotoModal"
                    overlayClassName="OverlayPhoto"
                >
                    <div className="closeLogo close-logo-photo" onClick={() => this.props.closeModal()} style={{cursor: "pointer"}}>
                        <i className="fas fa-times"/>
                    </div>
                        <ReactAliceCarousel  infinite={true} startIndex={0} autoHeight={true} responsive={this.resp} showSlideInfo={true} stagePadding={this.pad} >
                        {this.props.pic.map( (i:any)=>{
                            return(
                                <img src={i} alt="pic" className="photos-carousel"/>
                            )
                        })}
                    </ReactAliceCarousel>
                </ReactModal>
            </Fragment>
        );
}}