const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log(action.payload, 'Payload');
            return { ...state }
        default:
            return state;
    }
}
