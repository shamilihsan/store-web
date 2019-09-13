let INITIAL_STATE = {}

if(!(localStorage.getItem('user'))) {
    INITIAL_STATE = {
        isLoggedIn: false
    }
} else {
    INITIAL_STATE = {
        isLoggedIn: true
    }
}



export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, isLoggedIn: true }
        case 'LOGIN_FAIL':
            return { ...state, isLoggedIn: false }
        case 'LOGOUT':
            return { ...state, isLoggedIn: false }
        default:
            return state;
    }
}
