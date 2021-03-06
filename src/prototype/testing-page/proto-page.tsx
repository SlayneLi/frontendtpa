import React, { Component } from 'react'
import Stepper from '../stepper/horizontal-stepper'
import RxJsInput from '../observable/rxjs-input'
import FacebookShare from '../shareable-link/facebook-share'
import Profile from '../../shared/pages/userpage/profile/profile'
import ImageUpload from '../../shared/image-upload/imageUpload'
import ChatDetail from '../../shared/pages/chatdetail/chat-detail'
import ImagesUpload from 'react-images-upload'
import SavePlan from '../../shared/component-template/saved-plan/save-plan-component'
import SaveDetail from '../../shared/pages/saveplanDetail/save-detail-page'
import BookingPlace from '../../shared/pages/booking/bookingplace/bookingplace'
import BookingExperience from '../../shared/pages/booking/bookingexperience/bookingexperience'
import LoginHistory from '../../shared/component-template/login-history/login-history'
import ChatFragment from '../../shared/component-template/chat-fragment/chat-fragment'

import Axios from 'axios'
import './proto-page.scss'

export default class ProtoPage extends Component<any,any> {

    constructor(props:any) {
        super(props);
    }

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
                This is a Testing Prototype Page
                <ChatFragment />
                {/* <LoginHistory location="Jakarta" login="September 21"/> */}
                {/* <BookingExperience /> */}
                {/* <BookingPlace /> */}
                {/* <i className="fas fa-camera"></i>
                <i className="fab fa-product-hunt"></i>
                <i className="fas fa-wifi"></i>
                <i className="fas fa-utensils"></i>
                <i className="fas fa-bus"></i>
                <i className="fas fa-suitcase"></i>
                <i className="fas fa-language"></i>
                <i className="fas fa-ticket-alt"></i>
                <i className="fas fa-bath"></i>
                <i className="fas fa-fire-extinguisher"></i>
                <i className="fas fa-medkit"></i>
                <i className="fas fa-bell"></i> */}
                {/* <Profile email="vintzclagoz@gmail.com" /> */}
                {/* <Test/> */}
                {/* <ProfilePage /> */}
                {/* <i className="fas fa-wifi"></i> */}
                {/* <Profile name="Reich Vitz" /> */}
                {/* <br/> */}
                {/* <FacebookShare link="http://127.0.0.1:3000/experience/5d727c60a22d2ae0c9c36f67" /> */}
                {/* <ImageUploader /> */}
                {/* <Stepper /> */}
                {/* <ImageUpload /> */}
                {/* <ChatDetail/> */}
                {/* <div className="image-upload">
                    <ImagesUpload
                        withIcon={false}
                        onChange={this.onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                        withPreview={true}
                    />
                </div> */}
                {/* <SavePlan /> */}
                {/* <SaveDetail /> */}
            </div>
        )
    }
}
