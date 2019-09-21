import React, { Component } from 'react'
import './save-plan.scss'

export default class SavePlan extends Component<any,any> {
    
    customStyle = {
        backgroundImage: 'url('+this.props.url+')',
        backgroundSize: 'cover',
        width: '20vw',
        height: '25vh'
    };

    render() {
        return (
            <div className="save-container" style={this.customStyle}>
                <div className="title">
                    {this.props.title}
                </div>
            </div>
        )
    }
}
