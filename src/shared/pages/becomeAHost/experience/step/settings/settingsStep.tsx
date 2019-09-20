import React from 'react';
import Stepper from 'react-stepper-horizontal';
import MeetingLocationStep from './content/meetingLocation/meetingLocationStep';
import './settingsStep.scss'
import MaximumAllowedPersonStep from './content/maximumAllowedPerson/maximumAllowedPersonStep';
import PricePerPersonStep from './content/pricePerPerson/pricePerPersonStep';
import ExpScheduleStep from './content/expSchedule/expScheduleStep';

export default class SettingStep extends React.Component <any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            steps: [
                {
                    title:'Meeting Location',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 0})
                    }
                },
                {
                    title:'Maximum Allowed Person',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 1})
                    }
                },
                {
                    title:'Price Per Person',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 2})
                    }
                },
                {
                    title:'Experience Schedule',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 3})
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
                <MeetingLocationStep next={this.handleStep} />
            )
        }
        else if(this.state.currentStep === 1){
            return(
                <MaximumAllowedPersonStep next={this.handleStep} prev={this.handlePrevStep} />
            )
        }
        else if(this.state.currentStep === 2){
            return(
                <PricePerPersonStep next={this.handleStep} prev={this.handlePrevStep} />
                )
            }
        else if(this.state.currentStep === 3){
            return(
                <ExpScheduleStep next={this.props.next} prev={this.handlePrevStep} />
            )
        }
    }
    
    render(){
        const {steps,currentStep} = this.state
        return(
            <div className="settings-step">
                <div>
                    <Stepper steps={ steps } activeStep={ currentStep } />
                </div>
                <div>
                    {this.handleCurrStep()}
                </div>
            </div>
        );
}}