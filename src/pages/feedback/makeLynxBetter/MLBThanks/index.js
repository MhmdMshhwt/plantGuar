import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { Task, TaskAlt, TaskOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../../context/theme-context";

const MLBThanks = ({isOpenThanks, setIsOpenThanks}) => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const handleDiscoverClick = () => {
        navigate("/home");
    }
    return (
        <Modal 
            open={isOpenThanks}
            onClose={() => setIsOpenThanks(false)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '25px',
                alignSelf: 'stretch',
                flex: '1 0 0',
                minHeight: '100vh',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px 10px',
                    borderRadius: '8px',
                    width: '330px',
                    backgroundColor: theme.palette.lightgrey.lightgrey00,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '290px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            padding: '48px',
                            alignItems: 'flex-start',
                            gap: '8px',
                            borderRadius: '100px',
                            background: 'linear-gradient(160deg, #0F5FF7 9.58%, #9373FF 51.07%, #E81CFF 93.44%)',
                            color: theme.palette.lightgrey.lightgrey00,
                            
                        }}
                    >
                        {/* <img src={icon} alt='file check' /> */}
                        
                    </Box>
                    <Box
                        sx={{
                            m: '20px auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '8px',
                            alignSelf: 'stretch',
                        }}
                    >
                        <Typography variant="h5" color={theme.palette.darkgrey.darkgrey700}
                            sx={{
                                fontSize: '20px',
                                textAlign: 'center',
                                fontWeight: '700',
                            }}
                        >
                        Thank you for your feedback!
                        </Typography>
                        <Typography variant="body1"
                            color={theme.palette.darkgrey.darkgrey500}
                            sx={{
                                textAlign:'center'
                            }}
                        >
                        You are helping to make the PlantGuard community a better place.    
                        </Typography>
                    </Box>
                    <Button variant="contained"
                        onClick={handleDiscoverClick}
                        fullWidth
                    >
                        Back to home
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}

export default MLBThanks;
