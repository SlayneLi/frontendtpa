import React, { Component } from 'react'
import './image-upload.scss'
import {storage} from './index'

export default class ImageUpload extends Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            image: null,
            url: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    
    handleChange = (e:any) =>{
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    }

    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
        (snapshot:any) => {

        },
        (error:any) => {
            console.log(error);
        },
        () => {
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url});
            })
        });
    }

    render() {
        return (
            <div className="upload-container">
                <div className="image-container">
                    <img src={this.state.url} alt="upl-file"/>
                </div>
                <input type="file" name="" id="" onChange={this.handleChange}/>
                <button onClick={this.handleUpload}>UPLOAD</button>
            </div>
        )
    }
}
