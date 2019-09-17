import React, { Component } from 'react'
import './imageUpload.scss'
import {storage} from '../firebase'

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
                <input type="file" name="" id="" onChange={this.handleChange}/>
                <button onClick={this.handleUpload}>UPLOAD</button>
                <img src={this.state.url} alt="uploaded image" height={400} width={400}/>
            </div>
        )
    }
}
