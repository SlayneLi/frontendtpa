import React from 'react';

const PB = require('react-progressbar');

export default class BcHeader extends React.Component<any,any> {
    render(){
        return(
            <header className="bcheader">
                <div className="upper-header">
                    
                </div> 
                <div className="lower-header">
                    <PB completed={this.props.idx}/>
                </div> 
            </header>
        );
}}