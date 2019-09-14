import React, { Component } from 'react'
import {FacebookShareButton,EmailShareButton} from 'react-share'

export default class FacebookShare extends Component<any,any> {
    render() {
        return (
            <div>
                <FacebookShareButton
                    url = {this.props.url}
                >
                    {
                        (shareCount:any) => (
                            <span>{shareCount}</span>
                        )
                    }
                </FacebookShareButton>
                <EmailShareButton url={this.props.url}/>
            </div>
        )
    }
}
