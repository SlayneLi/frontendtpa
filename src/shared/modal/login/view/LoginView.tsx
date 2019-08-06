import React from 'react';
import {withFormik, FormikErrors, FormikProps} from 'formik';
import facebook from "../../../Images/fbBlue.svg";
import google from "../../../Images/GoogleLogo.svg";
import email from "../../../Images/email.svg";
import lock from "../../../Images/lock.svg";
import eye from "../../../Images/eye.svg";

interface Props{
    submit: (values:FormValues) => Promise<FormikErrors<FormValues> | null>
}

interface FormValues{
    email: string;
    pass: string;
}

class Login extends React.Component <FormikProps<FormValues> & Props> {
    render(){
        const {values ,handleChange, handleBlur, handleSubmit} = this.props;
        return(
            <form className="login" onSubmit={handleSubmit}>
                <div className="fbLogin">
                    <img src={facebook} alt="fb logo" className="fbLogo"/>
                    <div>Login with Facebook</div>
                </div>
                <div className="googleLogin">
                    <img src={google} alt="google logo" className="gLogo"/>
                    <div>Login with Google</div>
                </div>
                <div className="divider">
                    <hr/>
                    <div>Or</div>
                    <hr/>
                </div>
                <div className="emailBar">
                    <input type="text" name="email" placeholder="Email" onChange={handleChange} value={values.email} onBlur={handleBlur}/>
                    <img src={email} alt="emailLogo"/>
                </div>
                <div className="passBar">
                    <input type="password" name="pass" placeholder="Password" onChange={handleChange} value={values.pass} onBlur={handleBlur}/>
                    <div>
                        <img src={eye} alt="eyeLogo"/>
                        <img src={lock} alt="lockLogo"/>
                    </div>
                </div>
                <div className="remMe">
                    <input type="checkbox" name="remMe"/>
                    <div>Remember me</div>
                </div>
                <div className="loginBtn">
                    <button type="submit">Login</button>
                </div>
                <div>
                    <div>Forget Password</div>
                </div>
                <div>
                    <div>Don't have an account?</div>
                    <div>Sign Up</div>
                </div>
            </form>
        );
}}

export const LoginView = withFormik<Props,FormValues>({
    mapPropsToValues: () => ({ email:'',pass:''}),
    handleSubmit: async(values,{props , setErrors}) =>{
        const errors = await props.submit(values);
        if(errors){
            setErrors(errors);
        }
    }
})(Login);