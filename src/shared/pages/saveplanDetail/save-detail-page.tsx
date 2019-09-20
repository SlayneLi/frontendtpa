import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { bindKeyboard } from 'react-swipeable-views-utils'
import SaveComponent from '../../component-template/saved-plan/save-plan-component'
import './save-detail.scss'

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

export default class SaveDetail extends Component {
    
    state = {
        index: 0,
    };

    handleChangeIndex = (index:any) => {
        this.setState({
            index,
        });

        if(this.state.index == 0){
            var e = document.getElementById("title") as HTMLDivElement;
            e.innerHTML = "Place"
        }
        else{
            var e = document.getElementById("title") as HTMLDivElement;
            e.innerHTML = "Experience"
        }
    }

    render() {
        const {index} = this.state;

        return (
            <div>
                <div id="title">
                    Place
                </div>
                <BindKeyboardSwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                    <div>
                        <SaveComponent />
                        <SaveComponent />
                    </div>
                    <div>
                        <SaveComponent />
                        <SaveComponent />
                    </div>
                </BindKeyboardSwipeableViews>
            </div>
        )
    }
}
