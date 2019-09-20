import React from 'react';
import Stepper from 'react-stepper-horizontal';
import SelfDescStep from './content/selfDesc/selfDesc';
import './experiencePageStep.scss'
import AmenitiesExpStep from './content/amenities/amenitiesStepExp';
import ActivitiesRundownStep from './content/activitiesRundown/activitiesRundown';
import ActivityHeldStep from './content/activityHeld/activityHeldStep';
import GuestBringStep from './content/guestBring/guestBringStep';
import ExperienceNameStep from './content/experienceName/experienceNameStep';
import ExperiencePhotoStep from './content/experiencePhoto/experiencePhotoStep';

export default class ExperiencePageStep extends React.Component <any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            steps: [
                {
                    title:'Self Description',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 0})
                    }
                },
                {
                    title:'Activities Rundown',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 1})
                    }
                },
                {
                    title:'Activity Held Place',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 2})
                    }
                },
                {
                    title:'Amenities',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 3})
                    }
                },
                {
                    title:'Guest Should Bring',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 4})
                    }
                },
                {
                    title:'Experience Title',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 5})
                    }
                },
                {
                    title:'Experience Photo',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 6})
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
                <SelfDescStep next={this.handleStep}/>
            )
        }
        else if(this.state.currentStep === 1){
            return(
                <ActivitiesRundownStep next={this.handleStep} prev={this.handlePrevStep} />
            )
        }
        else if(this.state.currentStep === 2){
            return(
                <ActivityHeldStep next={this.handleStep} prev={this.handlePrevStep} />
                )
            }
        else if(this.state.currentStep === 3){
            return(
                <AmenitiesExpStep next={this.handleStep} prev={this.handlePrevStep} />
            )
        }
        else if(this.state.currentStep === 4){
            return(
                <GuestBringStep next={this.handleStep} prev={this.handlePrevStep} />
            )
        }
        else if(this.state.currentStep === 5){
            return(
                <ExperienceNameStep next={this.handleStep} prev={this.handlePrevStep} />
            )
        }
        else if(this.state.currentStep === 6){
            return(
                <ExperiencePhotoStep next={this.props.next} prev={this.handlePrevStep} />
            )
        }
    }
    
    render(){
        const {steps,currentStep} = this.state
        return(
            <div className="experience-page-step">
                <div>
                    <Stepper steps={ steps } activeStep={ currentStep } />
                </div>
                <div>
                    {this.handleCurrStep()}
                </div>
            </div>
        );
}}