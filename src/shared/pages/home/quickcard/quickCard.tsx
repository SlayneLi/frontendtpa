import React from 'react'
import './quickCard.scss'
import Guest from '../../../component-template/guest/guest';
import $ from 'jquery';

export default class QuickCard extends React.Component{

    validate = () =>{
        var ci = $("#check-in").val();
        var co = $("#check-out").val();
        if(co === "" || ci === ""){
            alert("Please fill the check in and checkout date");
            return;
        }
        if(co < ci){
            alert("Check out date cannot before check in date");
            return;
        }
    }

    render(){
        return (
            <div className="quickcard-section">
                <form className="quickcard-box">
                    <div className="title">
                        <h1>Book unique places to stay and things to do.</h1>
                    </div>
                    <div className="search-content">
                        <label>WHERE</label>
                    </div>
                    <div className="place-search">
                        <input type="text" placeholder="Anywhere" value="Paris, France"/>
                    </div>
                    <div className="check-container">
                        <div className="check-in">
                            <div>CHECK - IN</div>
                            <input type="date" placeholder="mm/dd/yyyy" id="check-in"/>
                        </div>
                        <div className="check-out">
                            <div>CHECK - OUT</div>
                            <input type="date" placeholder="mm/dd/yyyy" id="check-out"/>
                        </div>
                    </div>
                    <div className="guest-type">
                        <Guest maxGuest={16}/>
                    </div>
                    <div className="book" onClick={this.validate}>
                        Book!
                    </div>
                </form>
            </div>
        )
    }
}