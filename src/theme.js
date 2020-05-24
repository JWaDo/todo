import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: purple,
    },
    overrides: {
        MuiDrawer: {
            paper: {
                padding: "1rem",
            }
        },
  },
});

export default theme;
