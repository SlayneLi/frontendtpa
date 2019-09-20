import React from "react";
import "./header.scss";
import airbnb_black from "../Images/airbnb_black.svg"
import magnifierSeach from "../Images/magnifierSeach.svg"
import LoginModal from "../modal/login/login";
import SignUpModal from "../modal/signup/signUp";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import firebase from 'firebase'
// import {Observable} from 'rxjs';
import Axios from "axios";
import $ from "jquery";

class HeaderComponent extends React.Component<any,any>{

    state = {
        curval: 0.0,
        place: [],
        exp: [],
        res: [{
            id: "",
            name: "",
            type: "",
        }],
    }

    constructor(props:any){
        super(props);
        this.onCurrencyChange = this.onCurrencyChange.bind(this);
    }

    signOut(){
        firebase.auth().signOut(); 
        this.props.onLogout();
    }

    componentDidMount = () =>{
        Axios.get("http://kentang.online:3001/get-places")
                .then( result => {
                    this.setState({
                        place:result.data
                    })
                    console.log(result);
                }).catch( error => {
                    console.log(error);
                });
        Axios.get("http://kentang.online:3001/get-experiences")
                .then( result=> {
                    this.setState({
                        exp:result.data
                    })
                    console.log(result);
                }).catch( error => {
                    console.log(error);
                });
    }

    usercontrol(){
        if(this.props.email !== ""){
            return(
                <React.Fragment>
                    <Link to={"/become-place-host/"}>
                        <div>
                            Become a Place Host
                        </div>
                    </Link>
                    <Link to={"/become-experience-host"}>
                        <div>
                            Become a Experience Host
                        </div>
                    </Link>
                    <div>
                        Hello, {this.props.firstname}
                    </div>
                    <div className="out-button" onClick={() => this.signOut()}>
                        SIGNOUT
                    </div>
                </React.Fragment>
            )
        }
        else{
            return(
                <React.Fragment>
                    <div className="session-ctrl">
                        <SignUpModal />
                        <LoginModal />
                    </div>
                </React.Fragment>
            )
        }
    }

    handleStream = ()=>{
        // Observable.create((observer:any) => {
        //     observer.next('hi');
        // })
        let sr = $("#input-stays").val();
        if(sr===""){
            this.setState({res: []})
            return;
        }
        let filter:any[] = [];
        let pl = this.state.place;
        let ex = this.state.exp;
        pl.forEach((p:any) => {
            if(p.place_name.search(sr) !== -1)
                filter.push({
                    id:p.id,
                    name:p.place_name,
                    type:"place"
                })
        });
        ex.forEach((e:any) => {
            if(e.experience_name.search(sr) !== -1)
                filter.push({
                    id:e.id,
                    name:e.experience_name,
                    type:"experience"
                })
        });
        this.setState({res:filter});
    }

    checkCache = () =>{
        if(localStorage.getItem("email") !== null && localStorage.getItem("email")!== ""){
            this.props.onLogin(localStorage.getItem("email"),localStorage.getItem("firstname"),localStorage.getItem("lastname"))
        }
    }

    async onCurrencyChange(){
        var e = document.getElementById("currency") as HTMLSelectElement;
        await Axios.get("https://api.exchangeratesapi.io/latest?base="+localStorage.getItem("currency")+"&symbols="+e.value)
                    .then(result => {
                        console.log(result.data.rates);
                        this.setState({curval:result.data.rates});
                        console.log("curval",this.state.curval);
                        console.log(this.state.curval * 5);
                        localStorage.setItem("currency",e.value);
                    })
    }

    render(){
        return(
            <header onLoad={this.checkCache}>
                <Link to={`/`}>
                    <img src={airbnb_black} alt="mainLogo" className="mainLogo"/>
                </Link>
                <div className="search">
                    <div className="searchBar">
                        <img src={magnifierSeach} alt="searchLogo" className="searchLogo" />
                        <input type="text" name="stays" id="input-stays" placeholder="Stays" onChange={this.handleStream}/>
                    </div>
                    <div id="search-bar-result" >
                        {this.state.res.map( (r:any) => {
                            return(
                                <div>
                                    <Link to={'/'+r.type+"/"+r.id}>
                                        {r.name}
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="menu">
                    <div>
                        <select name="currBar" id="currency" onChange={this.onCurrencyChange}>
                            <option value="USD">USD</option>
                            <option value="JPY">JPY</option>
                            <option value="IDR">IDR</option>
                            <option value="SGD">SGD</option>
                            <option value="KRW">KRW</option>
                            <option value="THB">THB</option>
                            <option value="CAD">CAD</option>
                            <option value="CNY">CNY</option>
                            <option value="PHP">PHP</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </div>   
                    {this.usercontrol()}
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state:any) =>{
    return{
        email: state.email,
        firstname: state.firstname,
        lastname: state.lastname
    }
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        onLogin: (email:string,firstname:string,lastname:string) => dispatch({type: 'LOGIN',email:email, fName:firstname, lName:lastname }),
        onLogout: () => dispatch({type: 'LOGOUT'})
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderComponent);
