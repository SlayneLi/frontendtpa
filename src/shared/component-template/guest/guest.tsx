import React from 'react'
import './indecre-but/indecre.scss'

export default class Guest extends React.Component<any,any>{

    increA(adultCount:number, guestCount:number){
        adultCount+= 1;
        console.log(adultCount);
        console.log(this.props.maxGuest)
        var counter = document.getElementById("adult-counter") as HTMLDivElement;
        if(counter=== null){
            return;
        }
        counter.innerHTML = adultCount+"";
        guestCount = adultCount + this.props.childCount;
        if(guestCount >= this.props.maxGuest){
            if(guestCount>this.props.maxGuest){
                adultCount--;
            }
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
        childCount+=1;
        var counter = document.getElementById("child-counter") as HTMLDivElement;       
        if(counter=== null){
            return;
        }
        counter.innerHTML = childCount+"";
        guestCount = childCount + this.props.adultCount;
        if(guestCount >= this.props.maxGuest){
            if(guestCount > this.props.maxGuest){
                childCount--;
            }
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
        infantCount+=1;
        var counter = document.getElementById("infant-counter") as HTMLDivElement;
        if(counter === null){
            return;
        }
        counter.innerHTML = infantCount+"";
        if(infantCount >= 5){
            infantCount = 5;
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
        adultCount-=1;
        var counter = document.getElementById("adult-counter") as HTMLDivElement;
        if(counter=== null){
            return;
        }
        counter.innerHTML = adultCount+"";
        guestCount = adultCount + this.props.childCount;
        if(guestCount <= 0){
            adultCount = 0;
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
        childCount-=1;
        var counter = document.getElementById("child-counter") as HTMLDivElement;
        if(counter=== null){
            return;
        }
        counter.innerHTML = childCount+"";
        guestCount = childCount + this.props.adultCount;
        if(guestCount <= 0){
            childCount = 0;
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
        infantCount-=1;
        var counter = document.getElementById("infant-counter") as HTMLDivElement;
        if(counter === null){
            return;
        }
        counter.innerHTML = infantCount+"";
        if(infantCount <= 0){
            infantCount = 0;
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
                <div className="indecre-container">
                    <div className="age-clasify">
                        <div>
                            Adults
                        </div>
                    </div>
                    <div className="guest-counter" >
                        <button className="crement-counter" id="adult-de" onClick={() => this.decreA(this.props.adultCount , this.props.guestCount)}> - </button>
                        <div id="adult-counter">
                            {this.props.adultCount}
                        </div>
                        <button className="crement-counter" id="adult-in" onClick={() => this.increA(this.props.adultCount, this.props.guestCount)}> + </button>
                    </div>
                </div>
                <div className="indecre-container">
                    <div className="age-clasify">
                        <div>
                            Children
                        </div>
                        <div>
                            Ages 2-12
                        </div>
                    </div>
                    <div className="guest-counter" >
                        <button className="crement-counter" id="child-de" onClick={() => this.decreC(this.props.childCount, this.props.guestCount)}> - </button>
                        <div id="child-counter">
                            {this.props.childCount}
                        </div>
                        <button className="crement-counter" id="child-in" onClick={() => this.increC(this.props.childCount, this.props.guestCount)}> + </button>
                    </div>
                </div>
                <div className="indecre-container">
                    <div className="age-clasify">
                        <div>
                            Infants
                        </div>
                        <div>
                            Under 2
                        </div>
                    </div>
                    <div className="guest-counter" >
                        <button className="crement-counter" id="infant-de" onClick={() => this.decreI(this.props.infantCount)}> - </button>
                        <div id="infant-counter">
                            {this.props.infantCount}
                        </div>
                        <button className="crement-counter" id="infant-in" onClick={() => this.increI(this.props.childCount)}> + </button>
                    </div>
                </div>
            </div>
        )   
    }
}