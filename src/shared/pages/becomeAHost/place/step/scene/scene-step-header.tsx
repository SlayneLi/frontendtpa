import React from 'react';
import Stepper from 'react-stepper-horizontal';
import PhotoStep from './content/photosStep/photoStep';
import DescStep from './content/descStep/descStep';
import TitleStep from './content/titleStep/titleStep';

export default class SceneStepHeader extends React.Component <any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            steps: [
                {
                    title:'Photos',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 0})
                    }
                },
                {
                    title:'Description',
                    onClick: (e:any) => {
                        e.preventDefault();
                        this.setState({currentStep: 1})
                    }
                },
                {
                    title:'Title',
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
                <PhotoStep next={this.handleStep} />
            )
        }
        else if(this.state.currentStep === 1){
            return(
                <DescStep next={this.handleStep} prev={this.handlePrevStep}/>
            )
        }
        else if(this.state.currentStep === 2){
            return(
                <TitleStep next={this.props.next} prev={this.handlePrevStep}/>
            )
        }
    }

    render(){
        const {steps,currentStep} = this.state
        return(
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