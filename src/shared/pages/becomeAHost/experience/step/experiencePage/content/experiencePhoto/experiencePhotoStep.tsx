import React from 'react';
import ImageUploader from 'react-images-upload';

export default class ExperiencePhotoStep extends React.Component <any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            picture: []
        }
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture:any){
        this.setState({ picture: this.state.picture.concat(picture) })
        console.log("picture",this.state.picture)
    }

    checkBasic = () => {
        this.props.next();
    }

    handlePrev = () => {
        this.props.prev();
    }

    render(){
        return(
            <div className="activity-held-step">
                <div className="title-text">
                    Cover Photo
                </div>
                <div className="photo-step-upload">
                    <div className="photo-upload">
                        <ImageUploader 
                            withIcon={false}
                            imgExtension={['.jpg','.jpeg','.png','.JPG','.JPEG']}
                            onChange = {this.onDrop}
                            maxFileSize={5242880}
                            singleImage={true}
                            withPreview={true}
                        />
                    </div>
                    <div className="video-upload">
                        <ImageUploader
                            withIcon={false}
                            onChange = {this.onDrop}
                            imgExtension={['.gif','.mp4','.flv','.webm','.mkv']}
                            maxFileSize={5242880}
                            singleImage={true}
                            withPreview={true}
                        />
                    </div>
                </div>
                <div className="handle-bt">
                    <div className="handle-step" onClick={this.handlePrev}>
                        Prev
                    </div>
                    <div className="handle-step" onClick={this.checkBasic}>
                        Next
                    </div>
                </div>
            </div>
        );
}}