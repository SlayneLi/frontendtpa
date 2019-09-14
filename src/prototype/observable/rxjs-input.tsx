import React, { Component } from 'react'
import {fromEvent} from 'rxjs'
import { throttleTime } from 'rxjs/operators'

const input$ = fromEvent(document,'input')

var a = "";

input$
    .pipe(
        throttleTime(700)
    )
    .subscribe((e:any) => {
        console.log('Long Button Click',e.data);
    })

export default class RxJsInput extends Component {
    
    constructor(props:any){
        super(props);
        this.handleEvent = this.handleEvent.bind(this);
    }

    public handleEvent(){
    }

    render() {
        return (
            <div>
                <input type="text" id="testing"/>
            </div>
        )
    }
}
