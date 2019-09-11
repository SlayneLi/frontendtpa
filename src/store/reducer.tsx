const initState = {
    email: "",
    firstname: "",
    lastname: "",
    adultCount: 0,
    childCount: 0,
    infantCount: 0
}

const reducer = (state = initState,action:any) =>{
    switch (action.type){
        case 'LOGIN':
            return{
                ...state,
                email: action.email,
                firstname: action.fName,
                lastname: action.lName
            }
        case 'LOGOUT':
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
    }
    return state;

}

export default reducer;