import React from 'react'
import './indecre.scss'
import { connect } from 'react-redux';

class IndecreGuest extends React.Component<any,any>{
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
                    <button className="crement-counter" id={this.props.de} onClick={event => this.props.validateDecre(event)}> - </button>
                    <div id={this.props.co}>
                        {this.props.count}
                    </div>
                    <button className="crement-counter" id={this.props.in} onClick={event =>this.props.validateIncre(event)}> + </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:any) => {
    return{
        adultCount: state.adultCount,
        childCount: state.childCount,
        infantCount: state.infantCount
    };
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        onAIncre: () => dispatch({type:'ADULT_COUNT_INCREMENT'}),
        onCIncre: () => dispatch({type:'CHILD_COUNT_INCREMENT'}),
        onIIncre: () => dispatch({type:'INFANT_COUNT_INCREMENT'}),
        onADecre: () => dispatch({type:'ADULT_COUNT_DECREMENT'}),
        onCDecre: () => dispatch({type:'CHILD_COUNT_DECREMENT'}),
        onIDecre: () => dispatch({type:'INFANT_COUNT_DECREMENT'}),
    };
}

export default connect(mapStateToProps , mapDispatchToProps )(IndecreGuest);