const initState = {
    email: "",
    firstname: "",
    lastname: "",
    adultCount: 0,
    childCount: 0,
    infantCount: 0,
    totalCount: 0,
    currency: "USD",
    rates: 1.0,
    fdata: [],
    gdata: [],
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
            localStorage.removeItem("currency");
            localStorage.removeItem("rates");
            var a = document.getElementById("currency") as HTMLSelectElement
            a.value = "USD"
            return{
                ...state,
                email: "",
                firstname: "",
                lastname: "",
                currency: "USD",
                rates: 1.0,
            }
        case 'ADULT_COUNT_INCREMENT':
            return{
                ...state,
                adultCount: state.adultCount + 1,
                totalCount: state.adultCount + 1 + state.childCount
            }
        case 'ADULT_COUNT_DECREMENT':
            return{
                ...state,
                adultCount: state.adultCount - 1,
                totalCount: state.adultCount - 1 + state.childCount                
            }
        case 'CHILD_COUNT_INCREMENT':
            return{
                ...state,
                childCount: state.childCount + 1,
                totalCount: state.adultCount + state.childCount + 1
            }
        case 'CHILD_COUNT_DECREMENT':
            return{
                ...state,
                childCount: state.childCount - 1,
                totalCount: state.adultCount + state.childCount - 1
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
            localStorage.setItem("currency",action.currency);
            localStorage.setItem("rates",action.rates);
            return{
                ...state,
                currency: action.currency,
                rates: action.rates,
            }
        case 'RETRIEVE_FACEBOOK_DATA':
            return{
                ...state,
                fdata: action.fdata,
            }
        case 'RETRIEVE_GOOGLE_DATA':
            return{
                ...state,
                gdata: action.gdata,
            }
    }
    return state;

}

export default reducer;