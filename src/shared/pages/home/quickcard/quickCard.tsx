import React from 'react'
import './quickCard.scss'
import Guest from '../../../component-template/guest/guest';

export default class QuickCard extends React.Component{
    render(){
        return (
            <div className="quickcard-section">
                <div className="quickcard-box">
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
                            <input type="date" placeholder="mm/dd/yyyy"/>
                        </div>
                        <div className="check-out">
                            <div>CHECK - OUT</div>
                            <input type="date" placeholder="mm/dd/yyyy"/>
                        </div>
                    </div>
                    <div className="guest-type">
                        {/* <Guest adultCount={0} childCount={0} infantCount={0}/> */}
                    </div>
                </div>
            </div>
        )
    }
}