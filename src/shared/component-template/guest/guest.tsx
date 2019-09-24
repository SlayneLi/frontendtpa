import React from 'react'
import './guest.scss'
import { connect } from 'react-redux';
import IndecreGuest from './indecre-but/indecre';

class Guest extends React.Component<any,{}>{

    state ={
        isOpen: false,
        currStyle: {
            display: 'none'
        }
    }

    countGuest(){
        if(this.props.adultCount + this.props.childCount + this.props.infantCount !== 0){
            var text = (this.props.adultCount + this.props.childCount) + " guest (s)"
            if(this.props.infantCount !== 0)
                text += ", "+ this.props.infantCount+" infant (s)"
            return text;
        }
        return "Guests"
    }

    increA = (e:any)=>{
        e.preventDefault();
        if(this.props.adultCount + this.props.childCount >= this.props.maxGuest - 1){
            let in1 = document.getElementById("a-in") as HTMLButtonElement
            let in2 = document.getElementById("c-in") as HTMLButtonElement
            in1.disabled = true;
            in2.disabled = true;
            if(this.props.adultCount + this.props.childCount === this.props.maxGuest){
                return;
            }
        }
        let de1 = document.getElementById("a-de") as HTMLButtonElement
        let de2 = document.getElementById("c-de") as HTMLButtonElement
        de1.disabled = false;
        de2.disabled = false;
        this.props.onAIncre();
    }

    decreA = (e:any)=>{
        e.preventDefault();
        if(this.props.adultCount === 0 || this.props.childCount + this.props.infantCount !==0){
            let de1 = document.getElementById("a-de") as HTMLButtonElement
            de1.disabled = true;
            return;
        }
        if(this.props.adultCount + this.props.childCount <= 1){
            let de1 = document.getElementById("a-de") as HTMLButtonElement
            let de2 = document.getElementById("c-de") as HTMLButtonElement
            de1.disabled = true;
            de2.disabled = true;
            if(this.props.adultCount + this.props.childCount === 0){
                return;
            }
        }
        let in1 = document.getElementById("a-in") as HTMLButtonElement
        let in2 = document.getElementById("c-in") as HTMLButtonElement
        in1.disabled = false;
        in2.disabled = false;
        this.props.onADecre();
    }

    increC = (e:any)=>{
        e.preventDefault();
        if(this.props.adultCount === 0){
            this.props.onAIncre();
        }
        if(this.props.adultCount + this.props.childCount >= this.props.maxGuest - 1){
            let in1 = document.getElementById("a-in") as HTMLButtonElement
            let in2 = document.getElementById("c-in") as HTMLButtonElement
            in1.disabled = true;
            in2.disabled = true;
            if(this.props.adultCount + this.props.childCount === this.props.maxGuest){
                return;
            }
        }
        let de1 = document.getElementById("a-de") as HTMLButtonElement
        let de2 = document.getElementById("c-de") as HTMLButtonElement
        de1.disabled = false;
        de2.disabled = false;
        this.props.onCIncre();
    }

    decreC = (e:any)=>{
        e.preventDefault();
        if(this.props.childCount === 0){
            let de2 = document.getElementById("c-de") as HTMLButtonElement
            de2.disabled = true;
            if(this.props.adultCount !==0){
                let de1 = document.getElementById("a-de") as HTMLButtonElement
                de1.disabled = false;
            }
            return;
        }
        if(this.props.adultCount !==0 && this.props.childCount===1){
            let de1 = document.getElementById("a-de") as HTMLButtonElement
            de1.disabled = false;
        }
        if(this.props.adultCount + this.props.childCount <= 1){
            let de1 = document.getElementById("a-de") as HTMLButtonElement
            let de2 = document.getElementById("c-de") as HTMLButtonElement
            de1.disabled = true;
            de2.disabled = true;
            if(this.props.adultCount + this.props.childCount === 0){
                return;
            }
        }
        let in1 = document.getElementById("a-in") as HTMLButtonElement
        let in2 = document.getElementById("c-in") as HTMLButtonElement
        in1.disabled = false;
        in2.disabled = false;
        this.props.onCDecre();
    }

    increI = (e:any) =>{
        e.preventDefault();
        if(this.props.adultCount === 0){
            this.props.onAIncre();
        }
        if(this.props.infantCount >= 4 ){
            let in1 = document.getElementById("i-in") as HTMLButtonElement;
            in1.disabled = true;
        }
        let de = document.getElementById("i-de") as HTMLButtonElement;
        de.disabled = false;
        this.props.onIIncre();
    }

    decreI = (e:any) =>{
        e.preventDefault()
        if(this.props.infantCount===0){
            let de = document.getElementById("i-de") as HTMLButtonElement;
            de.disabled = true;
            if(this.props.adultCount !==0){
                let de1 = document.getElementById("a-de") as HTMLButtonElement
                de1.disabled = false;
            }
            return;
        }
        if(this.props.adultCount !==0 && this.props.infantCount === 1){
            let de1 = document.getElementById("a-de") as HTMLButtonElement
            de1.disabled = false;
        }
        let in1 = document.getElementById("i-in") as HTMLButtonElement;
            in1.disabled = false;
        this.props.onIDecre();
    }

    showDetail = ()=>{
        console.log(this.props)
        if(this.state.isOpen === false){
            this.setState({currStyle: {display:'flex'},
                        isOpen: true})
        }
        else{
            this.setState({currStyle: {display:'none'},
                        isOpen: false})
        }
    }

    render(){
        return(
            <div className="guest-container">
                <div className="guest-counter" onClick={() => this.showDetail()}>
                    {this.countGuest()}
                </div>
                <div className="indecre-overlay" style={this.state.currStyle}>
                    <IndecreGuest name="Adult" validateDecre={this.decreA} validateIncre={this.increA} count={this.props.adultCount} de="a-de" in="a-in" />
                    <IndecreGuest name="Children" info="2-12" validateDecre={this.decreC} validateIncre={this.increC} count={this.props.childCount} de="c-de" in="c-in" />
                    <IndecreGuest name="Infants" info="Under 2" validateDecre={this.decreI} validateIncre={this.increI} count={this.props.infantCount} de="i-de" in="i-in" />
                </div>
            </div>
        )   
    }
}

const mapStateToProps = (state:any) => {
    return{
        adultCount: state.adultCount,
        childCount: state.childCount,
        infantCount: state.infantCount,
        totalCount: state.totalCount,
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

export default connect(mapStateToProps , mapDispatchToProps )(Guest);