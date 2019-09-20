import React from 'react';

export default class PointInfo extends React.Component <any,any>{
    state={
        style: {
            display: "flex",
        },
        style2: {
            marginRight: "3%",
            width: "10%"
        }
        
    }
    
    render(){
        return(
            <div style={this.state.style}>
                <div style={this.state.style2}>
                    <i className={this.props.ico}/>
                </div>
                <div>
                    {"  "+this.props.text}
                </div>
            </div>
        );
}}