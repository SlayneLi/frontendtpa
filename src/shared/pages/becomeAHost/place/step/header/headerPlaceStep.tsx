import React from 'react';
import Stepper from 'react-stepper-horizontal';
import './headerStep.scss'
import BasicStepHeader from '../basics/basic-step-header';
import SceneStepHeader from '../scene/scene-step-header';
import GuestStep from '../guests/guestStep';

export default class HeaderPlaceSteps extends React.Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            steps: [
                {
                    title:'Basics',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 0})
                    }
                },
                {
                    title:'Scene',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 1})
                    }
                },
                {
                    title:'Guests',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 2})
                    }
                },
            ],
            currentStep: 0,
        };
        this.handleStep = this.handleStep.bind(this);
    }

    handleStep= ()=>{
        let curr = this.state.currentStep
        this.setState({
            currentStep: curr + 1
        });
    }

    handlePrevStep = ()=>{
        let curr = this.state.currentStep
        this.setState({
            currentStep: curr - 1
        });
    }

    handleSubmit = ()=>{
        alert("Success input new places!");
        window.location.href = "http://localhost:3000/"
    }

    handleCurrStep= ()=>{
        if(this.state.currentStep === 0){
            return(
                <BasicStepHeader next={this.handleStep} />
            )
        }
        else if(this.state.currentStep === 1){
            return(
                <SceneStepHeader next={this.handleStep} />
            )
        }
        else if(this.state.currentStep === 2){
            return(
                <GuestStep next={this.handleSubmit}/>
            )
        }
    }
    
    render(){
        const {steps,currentStep} = this.state
        return (
            <div>
                <div onClick={this.handleStep}>
                    a
                </div>
                <div>
                    <Stepper steps={ steps } activeStep={ currentStep } />
                </div>
                <div>
                    {this.handleCurrStep()}
                </div>
            </div>
        );
}}