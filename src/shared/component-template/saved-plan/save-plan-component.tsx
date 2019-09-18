import React, { Component } from 'react'
import './save-plan.scss'

export default class SavePlan extends Component<any,any> {
    
    customStyle = {
        backgroundImage: 'url(' + 'https://animemangalnvn.files.wordpress.com/2017/06/araragi-koyomi-hentai-face-amlnvn.png' + ')',
        backgroundSize: 'cover',
        width: '20vw',
        height: '25vh'
    };

    render() {
        return (
            <div className="save-container" style={this.customStyle}>
                <div className="title">
                    Rencana Bulan Madu
                </div>
            </div>
        )
    }
}
