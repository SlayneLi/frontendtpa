import React from 'react';
import Stepper from 'react-stepper-horizontal';
import './headerStep.scss'
import BasicExpStep from '../basic/basicExpStep';

export default class HeaderExpSteps extends React.Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            steps: [
                {
                    title:'Basic',
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

    handleCurrStep= ()=>{
        if(this.state.currentStep === 0){
            return(
                <BasicExpStep next={this.handleStep}/>
            )
        }
        else if(this.state.currentStep === 1){
            return(
                <div></div>
            )
        }
        else if(this.state.currentStep === 2){
            return(
                <div></div>
            )
        }
    }
    
    render(){
        const {steps,currentStep} = this.state
        return (
            <div>
                <div>
                    <Stepper steps={ steps } activeStep={ currentStep } />
                </div>
                <div>
                    {this.handleCurrStep()}
                </div>
            </div>
        );
}}