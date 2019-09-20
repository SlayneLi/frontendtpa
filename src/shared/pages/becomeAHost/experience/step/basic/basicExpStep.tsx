import React from 'react';
import Stepper from 'react-stepper-horizontal';
import LocationStep from './content/Location/locationstep';
import LanguageStep from './content/Language/languageStep';
import CategoriesStep from './content/categories/categoriesStep';
import './basicExpStep.scss';

export default class BasicExpStep extends React.Component <any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            steps: [
                {
                    title:'Location',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 0})
                    }
                },
                {
                    title:'Language',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 1})
                    }
                },
                {
                    title:'Categories',
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
                <LocationStep next={this.handleStep}/>
            )
        }
        else if(this.state.currentStep === 1){
            return(
                <LanguageStep next={this.handleStep} prev={this.handlePrevStep} />
            )
        }
        else if(this.state.currentStep === 2){
            return(
                <CategoriesStep next={this.props.next} prev={this.handlePrevStep} />
            )
        }
    }
    
    render(){
        const {steps,currentStep} = this.state
        return(
            <div className="basic-exp-step">
                <div>
                    <Stepper steps={ steps } activeStep={ currentStep } />
                </div>
                <div>
                    {this.handleCurrStep()}
                </div>
            </div>
        );
}}