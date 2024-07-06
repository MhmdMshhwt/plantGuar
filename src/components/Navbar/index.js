import { Edit, Feedback, Help, Home, Login, Logout, Menu, Settings } from "@mui/icons-material";
import { AppBar, Avatar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
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
import { UserContext } from "../../context/user-context";

const Navbar = () => {
    const [openLeft, setOpenLeft] = React.useState(false);
    const { theme, toggleToDarkMode, toggleToLightMode } = useTheme();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const location = useLocation();
    const { user, setUser } = React.useContext(UserContext);
    console.log(pathname);

    const handlDelete = () => {
        setUser({});
    }

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
            {Object.keys(user).length !== 0 &&
                <Stack direction="row" spacing={2}
                    sx={{
                        alignItems: 'center',
                        p:2
                    }}
                >
                    <Avatar sx={{ bgcolor: theme.palette.primary.main }}>{user?.userName[0]}</Avatar>
                    <Typography variant="body1">{user?.userName}</Typography>
                </Stack>
            }
            <Box sx={{px:2}}>
                <Divider/>
            </Box>
            <List>
                {['Home', 'Feedback', 'Help!'].map((text, index) => {
                    if (Object.keys(user).length === 0 && text === "Feedback") {
                        return   
                    }
                    else {
                        return (    
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    onClick={() => handleNavigate(text)}
                                >
                                    <ListItemIcon>
                                        {text === 'Home' && <Home />}
                                        {text === 'Feedback' && <Feedback />}
                                        {text === 'Help!' && <Help />}
                                        {text === 'Settings' && <Settings />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    }
                })}
            </List>
            <Divider />
            
            <List>
                {Object.keys(user).length === 0 ? (
                    <>
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
                    </>
                ) : ( 
                    <>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => handleNavigate('edit')}
                            >
                                <ListItemIcon>
                                    <Edit /> 
                                </ListItemIcon>
                                <ListItemText primary={'Edit'} />
                            </ListItemButton>            
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                    onClick={() => { handlDelete(); handleNavigate('login')}}
                            >
                                <ListItemIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="#E2848A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg> 
                                </ListItemIcon>
                                <ListItemText primary={'Delete Account'} />
                            </ListItemButton>            
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => handlDelete()}
                            >
                                <ListItemIcon>
                                    <Logout /> 
                                </ListItemIcon>
                                <ListItemText primary={'Sign out'} />
                            </ListItemButton>            
                        </ListItem>
                    </>    
                )}
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
        pathname === `/plantGuard` ||
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