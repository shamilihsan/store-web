const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ORDER_PLACED':
            return { ...state, status: action.payload }
        case 'ORDER_FAILED':
            return { ...state, status: action.payload }
        default:
            return state;
    }
}