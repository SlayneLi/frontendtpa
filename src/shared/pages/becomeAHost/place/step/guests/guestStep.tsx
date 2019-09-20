import React from 'react';
import './guest.scss';
import DayPicker, { DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class GuestStep extends React.Component<any,any> {
    handleSubmit = ()=>{
        let g = document.getElementById("guest-bs") as HTMLInputElement
        let p = document.getElementById("price-input") as HTMLInputElement
        if(g.value === ""){
            alert("Please input the number of guest allowed!");
            return;
        }
        if(this.state.selectedDays.length === 0){
            alert("Please select the available date!");
            return;
        }
        if(p.value === ""){
            alert("Please input the price!");
        }
        this.props.next();
    }

    state = {
        selectedDays: [],
    };
    
    handleDayClick= (day:never, { selected }:any) => {
        const selectedDays  = this.state.selectedDays;
        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay =>
            DateUtils.isSameDay(selectedDay, day)
        );
        selectedDays.splice(selectedIndex, 1);
        } else {
            selectedDays.push(day);
        }
        this.setState({ selectedDays });
    }
    
    render(){
        return(
            <div className="guest-step">
                <div>
                    Guests Number:
                </div>
                <div>
                    <input type="number" min={1} max={16} placeholder="Guests" id="guest-bs" />
                </div>
                <div>
                    Please select available date:
                </div>
                <div>
                    <DayPicker
                        selectedDays={this.state.selectedDays}
                        onDayClick={this.handleDayClick}
                        disabledDays={[
                        {
                            before: new Date()
                        },
                        ]}
                    />
                </div>
                <div>
                    Please input price per night
                </div>
                <div>
                    <input type="number" id="price-input" min={1} step={1000}/>
                </div>
                <div>
                    Please input currencies
                </div>
                <div>
                    <select name="currBar">
                        <option value="usd">USD</option>
                        <option value="jpy">JPY</option>
                        <option value="idr">IDR</option>
                        <option value="sgd">SGD</option>
                        <option value="krw">KRW</option>
                        <option value="thb">THB</option>
                        <option value="cad">CAD</option>
                        <option value="cny">CNY</option>
                        <option value="php">PHP</option>
                        <option value="gbp">GBP</option>
                    </select>
                </div>  
                <div className="handle-gs">
                    <div className="handle-step" onClick={this.handleSubmit}>
                        Submit
                    </div>
                </div>
            </div>
        );
}}