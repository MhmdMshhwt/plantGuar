import { Box, Button, Container, Stack, Typography } from "@mui/material";
import styles from './style.module.css';
import bgImage from '../../assets/images/pexels-agnieszka-palmowska-631909.jpg';
import { useNavigate } from "react-router-dom";

function Landing() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${process.env.PUBLIC_URL}/home`);
    };

    return (
        <Box
            className={styles.landing}
            sx={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <Box className={styles.overlay}></Box>   
            <Box className={styles.content}>
                <Box className={styles.text}>
                    <Box>
                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: '700',
                                fontSize: '20px',
                                fontStyle: 'italic',
                                color: '#FFF'
                            }}
                        >
                            Welcome to 
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: '700',
                                fontSize: '32px',
                                color: '#FFF',
                                letterSpacing: '1.5px'
                            }}
                        >
                            PlantGuard
                        </Typography>
                    </Box>
                    <Typography
                        variant="body"
                        sx={{
                            color: '#FFF'
                        }}
                    >
                        Empower your gardening journey with PlantGuard – the smart solution for diagnosing and treating plant diseases. Simply upload a photo of your plant, and let our advanced technology analyze its health instantly. Get accurate results, personalized treatment suggestions, and embark on a path to greener, healthier plants. Elevate your gardening experience with PlantGuard - where precision meets plant care.
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    className={styles.button}
                    sx={{
                        width: '300px',
                    }} 
                    onClick={handleClick}
                >
                    get started
                </Button>
                
            </Box>
        </Box>       
    )
};

export default Landing;