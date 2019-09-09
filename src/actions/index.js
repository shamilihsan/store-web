import store from '../apis/store'
//import history from '../history';

export const getItems = () => async dispatch => {
    const response = await store.get('/items')

    dispatch({ type: 'FETCH_ITEMS', payload: response })
}

export const getItem = id => async dispatch => {
    const response = await store.get(`/item/${id}`)

    dispatch({ type: 'FETCH_ITEM', payload: response.data })
}

export const login = (formValues, callback) => async dispatch => {
    //{...formValues} destructures it accordingly i.e ({email: 'sample', password: 'sample'})
    try {
        const response = await store.post('/auth/login', { ...formValues });
        callback(response)
    } catch (error) {
        callback(error.response)
    }
}