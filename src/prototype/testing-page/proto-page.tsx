import React, { Component } from 'react'
import Stepper from '../stepper/horizontal-stepper'
import RxJsInput from '../observable/rxjs-input'
import FacebookShare from '../shareable-link/facebook-share'
import Profile from '../../shared/pages/profile/profile'
import ImageUpload from '../../shared/image-upload/imageUpload'
import ChatDetail from '../../shared/pages/chatdetail/chat-detail'
import ImagesUpload from 'react-images-upload'
import SavePlan from '../../shared/component-template/saved-plan/save-plan-component'
import SaveDetail from '../../shared/pages/saveplanDetail/save-detail-page'
import Axios from 'axios'
import './proto-page.scss'

export default class ProtoPage extends Component {
    
    state = {
        pictures: [],
    }

    componentWillMount(){
        Axios.get("https://ipapi.co/json/")
            .then(result => {
                console.log(result);
            })
    }

    onDrop = (picture:any) =>{
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    render() {
        return (
            <div>
                {/* <Profile name="Reich Vitz" /> */}
                {/* <br/> */}
                {/* <FacebookShare link="http://127.0.0.1:3000/experience/5d727c60a22d2ae0c9c36f67" /> */}
                {/* <ImageUploader /> */}
                {/* <Stepper /> */}
                {/* <ImageUpload /> */}
                {/* <ChatDetail /> */}
                {/* <div className="image-upload">
                    <ImagesUpload 
                        withIcon={true}
                        buttonText='Choose images'
                        onChange={this.onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                        withPreview={true}
                    />
                </div> */}
                {/* <SavePlan /> */}
                <SaveDetail />
            </div>
        )
    }
}
