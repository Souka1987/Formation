// Importer les actions
import {
    GET_USER
} from "../actions/UserActions";

const initialState = {};

export function  UserReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return action.payload;
        default:
            return state;
    }
}