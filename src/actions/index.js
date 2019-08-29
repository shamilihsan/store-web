import streams from '../apis/store'
//import history from '../history';

export const getItems = () => async dispatch => {
    const response = await streams.get('/items')
    console.log(response);
    
    dispatch({ type: 'FETCH_ITEMS', payload: response })
}