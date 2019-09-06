import React from 'react'
import IndecreGuest from './indecre-but/indecre';

export default class Guest extends React.Component<any,any>{
    componentDidMount(){
        this.increA = this.increA.bind(this);
        this.increC = this.increC.bind(this);
        this.increI = this.increI.bind(this);
        this.decreA = this.decreA.bind(this);
        this.decreC = this.decreC.bind(this);
        this.decreI = this.decreI.bind(this);
    }
    
    componentWillReceiveProps(){
        this.increA = this.increA.bind(this);
        this.increC = this.increC.bind(this);
        this.increI = this.increI.bind(this);
        this.decreA = this.decreA.bind(this);
        this.decreC = this.decreC.bind(this);
        this.decreI = this.decreI.bind(this);
    }

    increA(adultCount:number, guestCount:number){
        adultCount++;
        var counter = document.getElementById("adult-counter") as HTMLDivElement;
        if(counter=== null){
            return;
        }
        counter.innerHTML = adultCount+"";
        guestCount = adultCount + this.props.childCount;
        if(this.props.guestCount === this.props.maxGuest){
            var incre = document.getElementById("adult-in") as HTMLButtonElement;
            if(incre=== null){
                return;
            }
            incre.disabled = true;
            incre = document.getElementById("child-in") as HTMLButtonElement;
            if(incre=== null){
                return;
            }
            incre.disabled = true;
        }
        var decre = document.getElementById("adult-de") as HTMLButtonElement;
        if(decre=== null){
            return;
        }
        decre.disabled = false;
        decre = document.getElementById("child-de") as HTMLButtonElement;
        if(decre=== null){
            return;
        }
        decre.disabled = false;
    }

    increC(childCount:number, guestCount:number){
        childCount++;
        var counter = document.getElementById("child-counter") as HTMLDivElement;       
        if(counter=== null){
            return;
        }
        counter.innerHTML = childCount+"";
        guestCount = childCount + this.props.adultCount;
        if(this.props.guestCount === this.props.maxGuest){
            var incre = document.getElementById("adult-in") as HTMLButtonElement;
            if(incre=== null){
                return;
            }
            incre.disabled = true;
            incre = document.getElementById("child-in") as HTMLButtonElement;
            if(incre=== null){
                return;
            }
            incre.disabled = true;
        }
        var decre = document.getElementById("adult-de") as HTMLButtonElement;
        if(decre=== null){
            return;
        }
        decre.disabled = false;
        decre = document.getElementById("child-de") as HTMLButtonElement;
        if(decre=== null){
            return;
        }
        decre.disabled = false;
    }

    increI(infantCount:number){
        infantCount++;
        var counter = document.getElementById("infant-counter") as HTMLDivElement;
        if(counter === null){
            return;
        }
        counter.innerHTML = infantCount+"";
        if(infantCount === 5){
            var incre = document.getElementById("infant-in") as HTMLButtonElement;
            if(incre=== null){
                return;
            }
            incre.disabled = true;
        }
        var decre = document.getElementById("infant-de") as HTMLButtonElement;
        if(decre=== null){
            return;
        }
        decre.disabled = false;
    }

    decreA(adultCount:number , guestCount:number){
        adultCount--;
        var counter = document.getElementById("adult-counter") as HTMLDivElement;
        if(counter=== null){
            return;
        }
        counter.innerHTML = adultCount+"";
        guestCount = adultCount + this.props.childCount;
        if(this.props.guestCount === 0){
            var decre = document.getElementById("adult-de") as HTMLButtonElement;
            if(decre=== null){
                return;
            }
            decre.disabled = true;
            decre = document.getElementById("child-de") as HTMLButtonElement;
            if(decre=== null){
                return;
            }
            decre.disabled = true;
        }
        var incre = document.getElementById("adult-in") as HTMLButtonElement;
        if(incre=== null){
            return;
        }
        incre.disabled = false;
        incre = document.getElementById("child-in") as HTMLButtonElement;
        if(incre=== null){
            return;
        }
        incre.disabled = false;
    }

    decreC(childCount:number , guestCount:number){
        childCount--;
        var counter = document.getElementById("child-counter") as HTMLDivElement;
        if(counter=== null){
            return;
        }
        counter.innerHTML = childCount+"";
        guestCount = childCount + this.props.adultCount;
        if(this.props.guestCount === 0){
            var decre = document.getElementById("adult-de") as HTMLButtonElement;
            if(decre=== null){
                return;
            }
            decre.disabled = true;
            decre = document.getElementById("child-de") as HTMLButtonElement;
            if(decre=== null){
                return;
            }
            decre.disabled = true;
        }
        var incre = document.getElementById("adult-in") as HTMLButtonElement;
        if(incre=== null){
            return;
        }
        incre.disabled = false;
        incre = document.getElementById("child-in") as HTMLButtonElement;
        if(incre=== null){
            return;
        }
        incre.disabled = false;
    }

    decreI(infantCount:number){
        infantCount--;
        var counter = document.getElementById("infant-counter") as HTMLDivElement;
        if(counter === null){
            return;
        }
        counter.innerHTML = infantCount+"";
        if(infantCount === 5){
            var decre = document.getElementById("infant-de") as HTMLButtonElement;
            if(decre=== null){
                return;
            }
            decre.disabled = true;
        }
        var incre = document.getElementById("infant-in") as HTMLButtonElement;
        if(incre=== null){
            return;
        }
        incre.disabled = false;
    }


    render(){
        return(
            <div className="guest-container">
                <IndecreGuest 
                    name="Adults" 
                    validateIncre = {this.increA(this.props.adultCount, this.props.guestCount)} 
                    validateDecre={this.decreA(this.props.adultCount, this.props.guestCount)} 
                    count={this.props.adultCount}
                    co="adult-counter"
                    de="adult-de" 
                    in="adult-in"/>
                <IndecreGuest 
                    name="Children" 
                    info="Ages 2-12"
                    validateIncre = {this.increC(this.props.childCount, this.props.guestCount)}
                    validateDecre = {this.decreC(this.props.childCount, this.props.guestCount)}
                    count={this.props.childCount}
                    co="child-counter"
                    de="child-de"
                    in="child-in"/>
                <IndecreGuest 
                    name="Infants" 
                    info="Under 2"
                    validateIncre = {this.increI(this.props.infantCount)}
                    validateDecre = {this.decreI(this.props.infantCount)}
                    count={this.props.infantCount}
                    co="infant-counter"
                    de="infant-de"
                    in="infant-in"/>
            </div>
        )   
    }
}