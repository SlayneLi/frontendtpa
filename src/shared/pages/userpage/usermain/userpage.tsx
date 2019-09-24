import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { bindKeyboard } from 'react-swipeable-views-utils'
import './userpage.scss';
import Profile from '../profile/profile'
import {connect} from 'react-redux'
import Axios from 'axios';
import Review from '../../../component-template/review/review'

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

class UserPage extends Component<any,any> {
    
    state = {
        index:  0,
        user_reviews:[{
            people_name:"",
            people_picture:"",
            posted_time:"",
            review_content:"",
            email: ""
        }],
        people_reviews:[{
            people_name:"",
            people_picture:"",
            posted_time:"",
            review_content:"",
            email: ""
        }],
    }

    componentDidMount(){
        Axios.get("http://kentang.online:3001/get-user-reviews/"+this.props.email)
            .then(ures => {
                this.setState({user_reviews : ures.data});
            });
        Axios.get("http://kentang.online:3001/get-people-reviews/"+this.props.email)
            .then(pres => {
                this.setState({people_reviews : pres.data});
            });
    }

    handleChangeIndex = (index:any) => {
        this.setState({
            index,
        });

        if(this.state.index == 0){
            var e = document.getElementById("title") as HTMLDivElement;
            e.innerHTML = "Profile"
        }
        else if (this.state.index == 1){
            var e = document.getElementById("title") as HTMLDivElement;
            e.innerHTML = "Reviews"
        }
        else{
            var e = document.getElementById("title") as HTMLDivElement;
            e.innerHTML = "Account"
        }
    }
    
    render() {
        const {index} = this.state;
        return (
            <div className="userpage-container">
                <div className="nav">
                    <div id="left">
                        <i className="fas fa-chevron-left"></i>
                    </div>
                    <div id="title">
                        Profile
                    </div>
                    <div id="right">
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
                <BindKeyboardSwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                    <Profile />
                    <div className="reviews">
                        <Review review={this.state.user_reviews} />
                        <hr/>
                        <Review review={this.state.people_reviews} />
                    </div>
                    <div className="account-container">
                        
                    </div>      
                </BindKeyboardSwipeableViews>
            </div>
        )
    }
}

const mapStateToProps = (state:any) =>{
    return{
        email: state.email,
        firstname: state.firstname,
        lastname: state.lastname,
        rates: state.rates,
        currency: state.currency,
    }
}

export default connect(mapStateToProps)(UserPage);