import React from 'react';
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css';

export default class DatePicker extends React.Component<any,any> {
    render() {
        return (
            <DayPicker 
                numberOfMonths={3} 
                canChangeMonth={true} 
                enableOutsideDaysClick={true} 
                fromMonth={new Date(2019, 9)}
                toMonth={new Date(2019, 12)}
                fixedWeeks
                disabledDays={[
                    // this.props.date.map( (d:any) =>{
                    //     return(
                    //         new Date(d.year,d.month,d.day)
                    //     )
                    // }),
                {
                    before: new Date()
                },
            ]}/>
        );
    }
}