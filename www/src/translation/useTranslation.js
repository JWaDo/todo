import { useSelector } from 'react-redux'
import { TOGGLE_LANGUAGE } from '../actions/index';
import { useDispatch } from 'react-redux'
import transitions from '@material-ui/core/styles/transitions';

export default function useTranslation() {

    const _translations = useSelector((state) => state.translations);
    const dispatch = useDispatch();

    const methods = {
        toggleLanguage: (id) => dispatch({
            type: TOGGLE_LANGUAGE,
            payload: id
        }),
        getLang: () => _translations.lang,
        message: (_key) => {
            const { lang, translations } = _translations;
            const keys = Object.keys(translations);
            const validKey = keys.find((key) => key === _key)
            return validKey && translations[validKey] ? 
                translations[validKey][lang] 
                :
                 _key
        }
    }

    return methods;
};