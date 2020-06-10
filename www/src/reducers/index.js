import { combineReducers } from 'redux';
import translationsReducer from '../translation/reducer';

export default combineReducers({
    translations: translationsReducer
})