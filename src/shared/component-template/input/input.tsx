import React from 'react'

export default class Input extends React.Component<any,{}>{

    constructor(props:any){
        super(props);
        this.state = {
            errorDisplay: "none" 
        }
        this.showError = this.showError.bind(this);
        this.hideError = this.hideError.bind(this);
    }

    showError(){
        this.setState({errorDisplay:"block"});
    }

    hideError(){
        this.setState({errorDisplay:"none"});
    }

    render(){
        return (
            <React.Fragment>
                <input type={this.props.type} name={this.props.name} id={this.props.id} className={this.props.className} placeholder={this.props.placeholder} value={this.props.value}/>
                <div className="error-label" hidden id={this.props.errId}>{this.props.errorText}</div>
            </React.Fragment>
        )
    }
}