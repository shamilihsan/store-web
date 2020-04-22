const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_VENDOR':
            return { ...state, items: action.payload }
        default:
            return state;
    }
}
