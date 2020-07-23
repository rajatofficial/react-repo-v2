import data from '../data/data.json';
import { GET_USERS, CHANGE_PASSWORD, CHANGE_USER, CHANGE_STATUS } from '../Actions';


function loginReducer(state = data, action) {
    switch (action.type) {
        case GET_USERS:
            return { ...state }
        case CHANGE_USER:
            return {...state, Username: action}
        case CHANGE_PASSWORD:
            return {...state, Password: action}
        case CHANGE_STATUS:
            return {}
        default:
            return state
    }
}

export default loginReducer;
