import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const QuiSommesNousPage = () => {
    return (
        <Grid container alignItems="center"
        justify="center">
            <Grid item align="center" xs={12} md={4} spacing={3}>
                <Typography>Hello my gorgeous friends</Typography>         
            </Grid>
            <Grid item xs={12} md={4} spacing={3}>
                <Typography align="center"variant="p">Hello my gorgeous friends</Typography>         
            </Grid>
        </Grid>
    );
}
 
export default QuiSommesNousPage;