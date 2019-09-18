import React, { Component } from 'react'
import FacebookShareLink from 'react-facebook-share-link'

export default class FacebookShare extends Component<any,any> {
    render() {
        return (
            <div>
                <FacebookShareLink link={this.props.link}>
                    {
                        (link:any) => (
                            <a href={link} target='_blank'>Share this on Facebook!</a>
                        )
                    }
                </FacebookShareLink>
            </div>
        )
    }
}
