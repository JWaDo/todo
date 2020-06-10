import React from 'react';
import SwitchLanguage from '../components/SwitchLanguage';
import useTranslation from '../translation/useTranslation'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { getRoutePathByName } from '../routes/index';
import { useHistory } from "react-router-dom";

const LandingPage = () => {

    const trl = useTranslation();
    let history = useHistory();

    return (
        <>
            <h1>{trl.message("LandingPage.title")}</h1>
            <SwitchLanguage />

            <Box>
                <Typography onClick={() =>
                    history.push(getRoutePathByName('Transformation digitale'))
                }>Transformation digitale</Typography>
            </Box>
        </>
    );
}
 
export default LandingPage;