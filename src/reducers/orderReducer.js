const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ORDER_PLACED':
            return { ...state, status: action.payload.status }
        case 'ORDER_FAILED':
            return { ...state, status: action.payload.status }
        default:
            return state;
    }
}