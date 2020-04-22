const INITIAL_STATE = { email: null, name: null, password: null, items: null }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_VENDOR':
            return { ...state, email: action.payload.email, name: action.payload.name, password: action.payload.password, items: action.payload.items }
        default:
            return state;
    }
}
