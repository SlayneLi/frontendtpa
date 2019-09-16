import React, { Component } from 'react'
import Stepper from 'react-stepper-horizontal';
import AllPlace from '../../shared/pages/places/places';
import AllExperience from '../../shared/pages/experiences/experiences';
import Draggable from '../draggable-list/draggable-proto';

export default class HorizontalStepper extends Component<any,any> {
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

    handleCurrStep= ()=>{
        if(this.state.currentStep === 0){
            return(
                    <AllExperience />
                )
        }
        else if(this.state.currentStep === 1){
            return(
                    <AllPlace />
                )
        }
        else{
            return(
                <Draggable />
            )
        }
    }

    handlerStep = () =>{
        let handle = []
        if(this.state.currentStep > 0)
            handle.push(<div id="prev-step" onClick={this.handlePrevStep}>Prev</div>)
        if(this.state.currentStep < 2)
            handle.push(<div id="next-step" onClick={this.handleStep}>NEXT</div>)

        return handle;
    }

    render() {
        const {steps,currentStep} = this.state
        return (
            <div>
                <div>
                    <Stepper steps={ steps } activeStep={ currentStep } />
                    {this.handlerStep()}
                </div>
                <div>
                    {this.handleCurrStep()}
                </div>
            </div>
        );
    }
}