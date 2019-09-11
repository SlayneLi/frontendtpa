import React from 'react';
import AvatarEditor from 'react-avatar-editor'
import gopher from '../../../Images/Background/galaxy-gopher.png'

export default class EditPic extends React.Component <any,any>{
    constructor(props:any){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.setFilter = this.setFilter.bind(this);
    }


    state = {
        filter: '',
        scale: 1,
        rotate: 0,
        positionX: 0.8,
        positionY: 0.8,
        borderRadius: 0,
        position:{x:0.8,y:0.8},
        brightness: 100,
        contrast: 100
    }

    handleChange(event:any){
        let name = event.target.name;
        let value = event.target.value;

        switch(name){
            case "scale": 
                this.setState({scale:value});
                break;
            case "xpos":
                this.setState({positionX:value});
                this.setState({position:{x:this.state.positionX , y:this.state.positionY}});
                break;
            case "ypos":
                this.setState({positionY:value});
                this.setState({position:{x:this.state.positionX , y:this.state.positionY}});
                break;
            case "rotate":
                this.setState({rotate:value});
                break;
            case "brightness":
                this.setState({brightness:value});
                this.setFilter();
                break;
            case "contrast":
                this.setState({contrast:value});
                this.setFilter();
                break;
        }
    }

    setFilter() {
        const f = {
            filter: `contrast(${this.state.contrast}%)
                    brightness(${this.state.brightness}%)`
        }
        this.setState({ filter: f });
    }

    saveImg(){
        
    }

    render(){
        return(
            <div style={{display: "flex", width:"80%", margin: "0 10%", alignItems:"center"}}>
                <div>
                    <AvatarEditor 
                        className = "cvs"
                        style={this.state.filter}
                        width={500}
                        height={500}
                        image={gopher}
                        scale={this.state.scale}
                        rotate={this.state.rotate}
                        position={this.state.position}
                    />
                </div>
                <div>
                    <label>Scale</label>
                    <input type="range" step="0.01" min="1" max="2" name="scale" value={this.state.scale} onChange={this.handleChange}/> <br/>
                    <label>Position X</label>
                    <input type="range" step="0.01" min="0" max="1" name="xpos" value={this.state.positionX} onChange={this.handleChange}/> <br/>
                    <label>Position Y</label>
                    <input type="range" step="0.01" min="0" max="1" name="ypos" value={this.state.positionY} onChange={this.handleChange}/> <br/>
                    <label>Rotation Degree</label>
                    <input type="number" min="0" max="360" name="rotate" value={this.state.rotate} onChange={this.handleChange}/> <br/>
                    <label>Brightness</label>
                    <input type="range" step="10" min="0" max="200" name="brightness" value={this.state.brightness} onChange={this.handleChange}/> <br/>
                    <label>Contrast</label>
                    <input type="range" step="10" min="0" max="200" name="contrast" value={this.state.contrast} onChange={this.handleChange}/><br/>

                    <button onClick={this.saveImg}>Save Change</button>
                </div>
            </div>
        );
}}