import React, { Component } from 'react'
import Test from '../draggable-list/draggable-proto';
import ProfilePage from '../../shared/pages/profile/profile';

export default class ProtoPage extends Component {
    render() {
        return (
            <div>
                This is a Testing Prototype Page
                {/* <Test/> */}
                <ProfilePage />
            </div>
        )
    }
}
