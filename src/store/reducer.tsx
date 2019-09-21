const initState = {
    email: "",
    firstname: "",
    lastname: "",
    adultCount: 0,
    childCount: 0,
    infantCount: 0,
<<<<<<< HEAD
    currency: "USD",
    rates: 1.0,
=======
    currency: "",
    rates: 0.0,
>>>>>>> ca18c07f21f07aa45148ea4d134b4ea317d386ba
}

const reducer = (state = initState,action:any) =>{
    switch (action.type){
        case 'LOGIN':
            localStorage.setItem("email",action.email);
            localStorage.setItem("firstname",action.fName);
            localStorage.setItem("lastname",action.lName);
            return{
                ...state,
                email: action.email,
                firstname: action.fName,
                lastname: action.lName
            }
        case 'LOGOUT':
            localStorage.removeItem("email");
            localStorage.removeItem("firstname");
            localStorage.removeItem("lastname");
            return{
                ...state,
                email: "",
                firstname: "",
                lastname: ""
            }
        case 'ADULT_COUNT_INCREMENT':
            return{
                ...state,
                adultCount: state.adultCount + 1
            }
        case 'ADULT_COUNT_DECREMENT':
            return{
                ...state,
                adultCount: state.adultCount - 1
            }
        case 'CHILD_COUNT_INCREMENT':
            return{
                ...state,
                childCount: state.childCount + 1
            }
        case 'CHILD_COUNT_DECREMENT':
            return{
                ...state,
                childCount: state.childCount - 1
            }
        case 'INFANT_COUNT_INCREMENT':
            return{
                ...state,
                infantCount: state.infantCount + 1
            }
        case 'INFANT_COUNT_DECREMENT':
            return{
                ...state,
                infantCount: state.infantCount - 1
            }
        case 'CHANGE_CURRENCY':
            return{
                ...state,
                currency: action.currency,
<<<<<<< HEAD
                rates: action.rates
=======
                rates: action.rate,
>>>>>>> ca18c07f21f07aa45148ea4d134b4ea317d386ba
            }
    }
    return state;

}

export default reducer;