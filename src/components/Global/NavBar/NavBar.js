import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuIcon from '@material-ui/icons/Menu';

import routes, { getRoutePathByName } from '../../../routes/index';

import './style.css';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);
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
                    <Typography variant="h6">Spotline</Typography>

                    <Hidden mdUp>   
                        <Drawer 
                            open={open}
                            onClose={() => toggleDrawer(false)}
                        >
                            <Tabs 
                                value={selectedItem} 
                                onChange={handleChange}
                                orientation="vertical"
                            >
                                {routes && routes.map((link) => (
                                    <Tab label={link.name} onClick={() => toggleDrawer(false)}/>
                                ))}
                            </Tabs>
                        </Drawer>
                    </Hidden>


                    <Hidden smDown>                  
                        <div className="sideLinks">
                        <Tabs value={selectedItem} onChange={handleChange}>
                            { routes && routes.map((link) => (
                                <Tab label={link.name}/>
                            ))}
                        </Tabs>
                        </div>
                    </Hidden>
                </Toolbar>
            </AppBar>
            { history.push(getRoutePathByName(routes[selectedItem].name))}
        </>
    );
}
 
export default NavBar;