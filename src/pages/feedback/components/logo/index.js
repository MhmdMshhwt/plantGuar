import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styles from "./style.module.css";
import { useTheme } from "../../../../context/theme-context";


const Logo = () => {
    const { theme } = useTheme();

    return (
        <Box className={styles.logo}>
            <Box className={styles.content}>
                <Box className={styles.text}>
                    <Typography variant="h4"
                        sx={{
                            color: theme.palette.darkgrey.darkgrey700,
                            fontWeight: '700',
                            fontSize: '20px',
                        }}
                    >Make PlantGuard Better</Typography>
                    <Box className={styles.frame}>
                        <Typography variant="body2"
                            sx={{
                                color: theme.palette.darkgrey.darkgrey500,
                                textAlign: 'center',
                            }}
                        >Thanks for taking an interest in the PlantGuard community!</Typography>
                        <Typography variant="body2"
                            sx={{
                                color: theme.palette.darkgrey.darkgrey500,
                                textAlign:'center',
                            }}
                        >Please share your experiences, issues and suggestions with us below:</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Logo;