import React from 'react';
import ReactModal from 'react-modal';

export default class SavedPlanModal extends React.Component <any,any>{
    render(){
        return(
            <ReactModal
                    isOpen={this.props.modalState}
                >
                    <div className="closeLogo"  onClick={this.props.closeModal}>
                        <i className="fas fa-times "/>
                    </div>
                    <div>
                        Save to list
                    </div>
                    <div>
                        Name
                    </div>
                    <div>
                        <input type="text" id="name-list" placeholder="Name your list"/>
                    </div>
                    <div>
                        Privacy settings
                    </div>
                    <div>
                        <select id="privacy">
                            <option value="0">Select Privacy</option>
                            <option value="private">Private</option>
                            <option value="public">Public</option>
                        </select>
                    </div>
                    <div style={{cursor:"pointer", padding: "4%", width: "20%", color:"#ffffff",backgroundColor:"#28B9AB" }}>
                        Save
                    </div>
            </ReactModal>
        );
}}