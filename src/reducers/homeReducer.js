import data from '../data/data.json';
import { GET_PRODUCTS, GET_ORDERS, ADD_ORDER } from '../Actions';


function homeReducer(state = data, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state }
        case GET_ORDERS:
            return { ...state }
        case ADD_ORDER:
            var orders = [...state.orders];
            orders.push(action);
            return { ...state, orders:orders }
        default:
            return state
    }
}

export default homeReducer;