import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import routes, { getRoutePathByName, navRoutes } from '../../../routes/index';
import logo from "../../../img/logoS4.png";

import './style.css';

const useStyles = makeStyles({
    title: {
        textAlign: "center",
        margin: "1rem",
    },
    hr: {
        marginBottom: "1rem",
    },
    img: {
        width: "30px",
        marginRight: "10px",
    },
    titleSM:{
     color: "#5E17EB"   
    },
    titleLG:{
     color: "#FFFFFF"   
    }
});


const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);

    const classes = useStyles();
    let history = useHistory();

    const handleChange = (event, newValue) => {
        setSelectedItem(newValue);
    };
    
    const toggleDrawer = (status) => {
        setOpen(status);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Hidden mdUp>   
                        <IconButton 
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            className="iconMenu"
                            onClick={() => toggleDrawer(true)} >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>

                    <Hidden mdDown>
                        <img src={logo} className={classes.img} alt=""/>
                        <Link to={getRoutePathByName("landing")}>
                            <Typography variant="h6" className={classes.titleLG}>Skilled 4</Typography>
                        </Link>
                    </Hidden> 

                    <Hidden mdUp>   
                        <Drawer 
                            open={open}
                            onClose={() => toggleDrawer(false)}
                        >
                            <Box p={2}>
                                <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                                >
                                    <img src={logo} className={classes.img} alt=""/>
                                    <Typography variant="h6" className={classes.titleSM}>Skilled 4</Typography>
                                </Grid>
                            </Box>
                            <Divider variant="middle" className={classes.hr}/>

                            <Tabs 
                                value={selectedItem} 
                                onChange={handleChange}
                                orientation="vertical"
                            >
                                {navRoutes && navRoutes.map((link) => (
                                    <Tab label={link.name} onClick={(e) => {
                                        console.log(e);
                                        console.log(link.name);
                                        history.push(getRoutePathByName(link.name));
                                    }}/>
                                ))}
                            </Tabs>
                        </Drawer>
                    </Hidden>


                    <Hidden smDown>
                        <div className="sideLinks">
                        <Tabs value={selectedItem} onChange={handleChange}>
                            { navRoutes && navRoutes.map((link) => (
                                <Tab label={link.name} onClick={(e) => {
                                    history.push(getRoutePathByName(link.name));
                                }}/>
                            ))}
                        </Tabs>
                        </div>
                    </Hidden>
                </Toolbar>
            </AppBar>
            {/* { history.push(getRoutePathByName(navRoutes[selectedItem].name))} */}
        </>
    );
}
 
export default NavBar;