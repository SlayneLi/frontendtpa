import React from 'react';
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css';

export default class DatePicker extends React.Component<any,any> {
    render() {
        return (
            <DayPicker 
                numberOfMonths={1} 
                // canChangeMonth={true} 
                // enableOutsideDaysClick={true} 
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
                ]}
            />
        )}
}