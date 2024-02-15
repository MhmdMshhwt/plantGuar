import { Feedback, Help, Home, Login, Menu, Settings } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ThemeContext } from "@emotion/react";
import { useTheme } from "../../context/theme-context";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [openLeft, setOpenLeft] = React.useState(false);
    const { theme, toggleToDarkMode, toggleToLightMode } = useTheme();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const location = useLocation();
    
    const handleNavigate = (dest) => {
        navigate(`${process.env.PUBLIC_URL}/${dest}`);
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setOpenLeft(open);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {/* <Typography variant="h6" component={"div"}
                sx={{
                    padding: '1rem 1rem 0px'
                }}
            >PlantGuard</Typography> */}
            <List>
                {['Home', 'Feedback','Settings' ,'Help!'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            onClick={() => handleNavigate(text)}
                        >
                            <ListItemIcon>
                                {text === 'Home' && <Home /> }
                                {text === 'Feedback' && <Feedback /> }
                                {text === 'Help!' && <Help /> }
                                {text === 'Settings' && <Settings /> }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => handleNavigate('login')}
                    >
                        <ListItemIcon>
                            <Login /> 
                        </ListItemIcon>
                        <ListItemText primary={'Login'} />
                    </ListItemButton>            
                </ListItem>
                <ListItem
                    sx={{
                        gap: '.75rem',
                        bgcolor: theme.palette.lightgrey.lightgrey500,
                        p: '1rem',
                        justifyContent: 'center',
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            p: '3px 16px',
                            fontSize: '16px',
                            fontWeight: '500'
                        }}
                        onClick={toggleToLightMode}
                    >Light</Button>
                    <Button
                        variant="contained"
                        sx={{
                            p: '3px 16px',
                            fontSize: '16px',
                            fontWeight: '500',
                            bgcolor: '#9e9e9e'
                        }}
                        onClick={toggleToDarkMode}
                    >Dark</Button>
                </ListItem>
            </List>
        </Box>
    );
    
    if (
        pathname === `${process.env.PUBLIC_URL}/` ||
        pathname === `${process.env.PUBLIC_URL}/signup` 
      )
        return <div></div>;

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component={"div"} sx={{flexGrow: 1}}>PlantGuard</Typography>
                <Box>
                    <Menu onClick={toggleDrawer('left', true)}/>
                </Box>
                <Drawer
                    anchor={'left'}
                    open={openLeft}
                    onClose={toggleDrawer('left', false)}
                >
                    {list('left')}
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;