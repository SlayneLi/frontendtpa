import React from 'react';

export default class LanguageStep extends React.Component<any,any> {
    checkBasic = () => {
        let pi = document.getElementById("primary") as HTMLSelectElement;
        let sp = document.getElementById("spoken") as HTMLSelectElement;
        
        if(pi.value=== "0"){
            alert("Please select primary language!");
            return;
        }
        if(sp.value === "0"){
            alert("Please select spoken language!");
            return;
        }
        this.props.next();
    }

    
    render(){
        let lang = [];
        lang.push(
            <React.Fragment >
                <option value="0">Select Language</option>
                <option value="english">English</option>
                <option value="indonesia">Indonesia</option>
                <option value="thai">Thai</option>
                <option value="chinese">Chinese</option>
            </React.Fragment>
        )
        return(
            <div>
                <div>
                    Primary Language
                </div>
                <div>
                    <select id="primary">
                        {lang}
                    </select>
                </div>
                <div>
                    Spoken Language
                </div>
                <div>
                    <select id="spoken">
                        {lang}
                    </select>
                </div>
                <div>
                <div onClick={this.checkBasic} className="handle-step">
                    Next
                </div>
            </div>
        </div>
        );
}}