import translations from './index';
import { TOGGLE_LANGUAGE } from '../actions/index';

const initialState = {
    lang: null,
    translations
}

export default function todos(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_LANGUAGE: {
            return {
                ...state,
                lang: action.payload,
            }
        }
        default:
            return state;
    }
}