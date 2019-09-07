import React, { Component } from 'react';
import Axios from 'axios';

export default class experiencedetail extends Component<any,{}> {
    state = {
        id : "",
        data : []
    }

    componentWillMount(){
        this.setState({id: this.props.match.params.id});
        Axios.get(`http://kentang.online:3001/get-experience/${this.props.match.params.id}`)
            .then( result => {
                this.setState({data: result.data});
            })
            .catch( error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                {this.state.id}
            </div>
        )
    }
}
