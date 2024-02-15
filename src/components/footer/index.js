import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../context/theme-context';
import { AppBar, BottomNavigationAction, Toolbar } from '@mui/material';

export default function Footer() {
    const { theme } = useTheme();
    const { pathname } = useLocation();
  
    if (
        pathname === "/"  
    )
        return <div></div>;
    
    return (
        <Box 
            sx={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                height: '3rem',
                bgcolor: '#000',
                width: '100%'                
            }}
        >
        </Box>
    );
}