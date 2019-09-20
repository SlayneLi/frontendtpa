import React from 'react';
import UserReview from './userReview';
import $ from 'jquery';

export default class Review extends React.Component<any,any> {

    state={
        fReview: [],
    }

    componentDidMount=()=>{
        this.setState({fReview: this.props.review});
    }

    handleSearch = () =>{
        let sr = $("#search-review").val();
        let filter:any[] = [];
        let rev = this.props.review;
        rev.forEach((r:any) => {
            if(r.review_content.search(sr) !== -1)
                filter.push(r)
        });
        this.setState({fReview:filter});
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <input type="text" placeholder="Search Review" id="search-review" onChange={() => this.handleSearch()}/>
                </div>
                <div style={{cursor: "pointer"}}>
                    translate!
                </div>
                {($("#search-review").val() === ""?this.props.review:this.state.fReview).map( (r:any) => {
                    return(
                        <UserReview img={r.people_picture} name={r.people_name} jday={r.posted_time} rating={r.review_rate} det={r.review_content}/>
                    )
                })} 
            </React.Fragment>

        );
}}