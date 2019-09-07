import React, { Component } from 'react';
import Axios from 'axios';

export default class placedetail extends Component<any,{}> {
    state = {
        id : "",
        data : []
    }

    componentWillMount(){
        this.setState({id: this.props.match.params.id});
        Axios.get(`http://kentang.online:3001/get-place/${this.props.match.params.id}`)
            .then( result => {
                this.setState({data: result.data});
                console.log(result);
            })
            .catch( error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                {this.state.id}
            </div>
        )
    }
}