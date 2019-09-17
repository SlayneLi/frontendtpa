import React, { Component } from 'react'
import FacebookShareLink from 'react-facebook-share-link'

export default class FacebookShare extends Component<any,any> {
    state = {
        data: "http://127.0.0.1:3000/"+this.props.type+"/"+this.props.link
    }
    
    render() {
        return (
            <div className="facebook-share-container">
                <FacebookShareLink link={this.state.data}>
                    {
                        (link:any) => (
                            <a href={link} target='_blank' className="sharable">Facebook!</a>
                        )
                    }
                </FacebookShareLink>
            </div>
        )
    }
}