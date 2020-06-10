import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import { TOGGLE_LANGUAGE } from '../actions/index';
import useTranslation from '../translation/useTranslation';

const SwitchLanguage = () => {

    const languages = ["fr", "en"];
    const methods = useTranslation();
    const [check,setCheck] = useState(methods.getLang() !== 'en');

    const handleChange = () => {
        setCheck(!check);
        methods.toggleLanguage(check ? languages[1] : languages[0]);
    }

    return (
        <Grid 
            container 
            alignItems="center"
            spacing={1}
        >
            <Grid item>{ languages[1] }</Grid>
            <Grid item>
                <Switch
                    checked={check}
                    onChange={handleChange}
                    name="checkedA"
                />
            </Grid>
            <Grid item>{ languages[0] }</Grid>
        </Grid>
    );
}
 
export default SwitchLanguage;