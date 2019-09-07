import React from 'react'
import './indecre.scss'

export default class IndecreGuest extends React.Component<any,any>{
    render(){
        return(
            <div className="indecre-container">
                <div className="age-clasify">
                    <div>
                        {this.props.name}
                    </div>
                    <div>
                        {this.props.info}
                    </div>
                </div>
                <div className="guest-counter" >
                    <button className="crement-counter" id={this.props.de} onClick={this.props.validateDecre}> - </button>
                    <div id={this.props.co}>
                        {this.props.count}
                    </div>
                    <button className="crement-counter" id={this.props.in} onClick={this.props.validateIncre}> + </button>
                </div>
            </div>
        )
    }
}