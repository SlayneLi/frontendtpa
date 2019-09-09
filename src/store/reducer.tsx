const initState = {
    email: "",
    firstname: "",
    lastname: "",
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
    }
    return state;

}

export default reducer;