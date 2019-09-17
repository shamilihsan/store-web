const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_ORDERS':
            return { ...state, orders: action.payload.data }
        default:
            return state;
    }
}