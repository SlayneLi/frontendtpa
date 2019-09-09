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
    }
    return state;

}

export default reducer;