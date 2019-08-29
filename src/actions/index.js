import streams from '../apis/store'
//import history from '../history';

export const getItems = () => async dispatch => {
    const response = await streams.get('/items')
    
    dispatch({ type: 'FETCH_ITEMS', payload: response })
}

export const getItem = id => async dispatch => {
    const response = await streams.get(`/item/${id}`)

    dispatch({ type: 'FETCH_ITEM', payload: response.data })
}