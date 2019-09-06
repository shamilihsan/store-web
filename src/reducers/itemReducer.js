import _ from 'lodash';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_ITEMS':
            //Converted array to an object of objects to insert into the state easily as state is an object originally
            //Convert this to (...state, action.payload.data.items)
            return { ...state, ..._.mapKeys(action.payload.data, '_id') }
        case 'FETCH_ITEM':
            return { ...state, [action.payload._id]: action.payload }
        default:
            return state;
    }
}
