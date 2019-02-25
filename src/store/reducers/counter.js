import { handleActions } from 'redux-actions'
import { GET_DATA, UP_DATA } from '../types/counter'

export default handleActions({
    [GET_DATA](state, action) {
        state = [...state, ...action.payload];
        return state;
    },
    [UP_DATA](state, action) {
        state = [];
        return state;
    }
}, [])