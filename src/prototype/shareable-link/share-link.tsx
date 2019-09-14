import React, { Component } from 'react'
import EmailShare from 'react-email-share-link'

export default class ShareLink extends Component<any,any> {
    render() {
        return (
            <div>
                <EmailShare
                    email = {this.props.email}
                    subject = {this.props.subject}
                    body = "Share this link"
                >
                    {(link:any) => (
                            <a href={link} data-rel="external">Share this by email</a>
                    )}
                </EmailShare>
            </div>
        )
    }
}
