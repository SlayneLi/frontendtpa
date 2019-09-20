import React from 'react';
import Stepper from 'react-stepper-horizontal';
import PlaceTypeStep from './content/place-type/placeTypeStep';
import BedroomStep from './content/bedroom-step/bedroom-step';
import BathroomStep from './content/bathroomStep/bathroomStep';
import LocationStep from './content/locationStep/locationStep';
import AmenitiesStep from './content/amenitiesStep/amenitiesStep';


export default class BasicStepHeader extends React.Component <any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            steps: [
                {
                    title:'Place Type',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 0})
                    }
                },
                {
                    title:'Bedrooms',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 1})
                    }
                },
                {
                    title:'Baths',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 2})
                    }
                },
                {
                    title:'Location',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 3})
                    }
                },
                {
                    title:'Amenities',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 4})
                    }
                },
            ],
            currentStep: 0,
        };
        this.handleStep = this.handleStep.bind(this);
    }

    handleStep= ()=>{
        let curr = this.state.currentStep
        if(curr=== 4){
            this.props.next();
            return;
        }
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
                <PlaceTypeStep next={this.handleStep}/>
            )
        }
        else if(this.state.currentStep === 1){
            return(
                <BedroomStep next={this.handleStep} prev={this.handlePrevStep}/>
            )
        }
        else if(this.state.currentStep === 2){
            return(
                <BathroomStep next={this.handleStep} prev={this.handlePrevStep} />
            )
        }
        else if(this.state.currentStep === 3){
            return(
                <LocationStep next={this.handleStep} prev={this.handlePrevStep} />
            )
        }
        else if(this.state.currentStep === 4){
            return(
                <AmenitiesStep next={this.handleStep} prev={this.handlePrevStep}/>
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