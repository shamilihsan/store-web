import store from '../apis/store'
import { async } from 'q'
//import history from '../history';

export const getItems = () => async dispatch => {
    const response = await store.get('/items')

    dispatch({ type: 'FETCH_ITEMS', payload: response })
}

export const getItem = id => async dispatch => {
    const response = await store.get(`/item/${id}`)

    dispatch({ type: 'FETCH_ITEM', payload: response.data })
}

export const login = formValues => async dispatch => {
    const response = await store.post('/login');

    dispatch({ type: 'LOGIN', payload: response.data })
}