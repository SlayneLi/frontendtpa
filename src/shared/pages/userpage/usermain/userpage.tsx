import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { bindKeyboard } from 'react-swipeable-views-utils'
import './userpage.scss';
import Profile from '../profile/profile'

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

export default class UserPage extends Component {
    state = {
        index: 0,
    }
    
    handleChangeIndex = (index:any) => {
        this.setState({
            index,
        });

        if(this.state.index == 0){
            var e = document.getElementById("title") as HTMLDivElement;
            e.innerHTML = "Profile"
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
                    <div className="account-container">
                        
                    </div>      
                </BindKeyboardSwipeableViews>
            </div>
        )
    }
}
