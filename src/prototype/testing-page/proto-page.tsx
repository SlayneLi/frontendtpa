import React, { Component } from 'react'
import Stepper from '../stepper/horizontal-stepper'
import RxJsInput from '../observable/rxjs-input'
import ImageUploader from '../image-upload/image-upload'
import FacebookShare from '../shareable-link/facebook-share'
import Axios from 'axios'

export default class ProtoPage extends Component {
    
    componentWillMount(){
        Axios.get("https://ipapi.co/json/")
            .then(result => {
                console.log(result);
            })
    }

    render() {
        return (
            <div>
                <FacebookShare link="http://127.0.0.1:3000/experience/5d727c60a22d2ae0c9c36f67" />
                {/* <ImageUploader /> */}
                This is a Testing Prototype Page
                {/* <Stepper /> */}
            </div>
        )
    }
}
