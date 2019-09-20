import React, { Component } from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { connect } from 'react-redux'
import "./auth.scss"
import '../image-upload/index';

class Authentication extends Component <any,any> {
    state = {
        isSignedIn: false,
        email: '',
        name:'',
        photo:''
    }
    
    uiConfig = {
        signInFLow: "popup",
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
    }

    componentDidMount= () => {        
        firebase.auth().onAuthStateChanged(  (user:any) => {
            this.setState(
                {
                isSignedIn: !!user
                })
            if(user!= null){
                var name = user.displayName.split(" ")
                this.props.onLogin(user.email,name[0],name[name.length - 1])
                this.setState({
                    name:user.displayName,
                    photo:user.photoURL})
            }
            console.log("user",user)
        })
    }

    handleSign(){
        if(this.state.isSignedIn){ 
            return(
                <div>
                    <div className="signed-in">SIGNED IN!!</div>
                    <h1>
                        {this.state.email}
                        <br/>
                        {this.state.name}
                        <br/>
                        <img src={this.state.photo} alt="signed-in"/>
                    </h1>
                    <img src="https://upload.wikimedia.org/wikipedia/en/8/88/DuckDuckGo_logo.svg"  alt="profile"/>
                    <button onClick={() => firebase.auth().signOut()}>SIGNOUT!!</button>
                </div>
            ) }
        else{
            return (
                <div>
                    <StyledFirebaseAuth 
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                </div>
            )
        }
        
    }

    render() {
        return (
            <div className="auth-container">
                {this.handleSign()}
            </div>
        )
    }
}

const mapStateToProps = (state:any) =>{
    return{
        email: state.email,
        firstname: state.firstname,
        lastname: state.lastname
    };
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        onLogin: (email:string,firstname:string,lastname:string) => dispatch({type: 'LOGIN',email:email, fName:firstname, lName:lastname })
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
