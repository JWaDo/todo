import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
    palette: {
        primary: { main: "#5E17EB"},
        secondary: purple,
    },
    overrides: {
        MuiDrawer: {
            paper: {
                padding: "1rem",
            }
        },
        MuiTypography: {
            h6: {
                color: "#FFFFFF"
            }
        }
  },
});

export default theme;
