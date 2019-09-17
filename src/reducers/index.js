import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import itemReducer from './itemReducer'
import authReducer from './authReducer'
import orderReducer from './orderReducer'

export default combineReducers({
    items: itemReducer,
    auth: authReducer,
    order: orderReducer,
    form: formReducer,
})