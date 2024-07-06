import { Box, Button, Typography } from "@mui/material";
import styles from './style.module.css';
import { useTheme } from "../../../../context/theme-context";
import { ChevronLeft } from "@mui/icons-material";

function TreatmentSuggestions({isDiseased, severity, treatment, reUpload}) {
    const { theme } = useTheme();

    const handlereUpload = () => {
        reUpload();
    }
    return (
        <Box className={styles.TreatmentSuggestions}
            sx={{
                background: theme.palette.lightgrey.lightgrey600
            }}
        >
            <Box className={styles.content}
                sx={{
                    bgcolor: theme.palette.lightgrey.lightgrey00
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: '600',
                        fontSize: '20px',
                    }}
                >
                    {isDiseased ? 'Plant is Diseased' : 'Plant is Healthy'}
                </Typography>
                {isDiseased && (
                    <Box className={styles.result}>
                        <Box className={styles.resultItem}>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.darkgrey.darkgrey500
                                }}
                            >
                                Causes 
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: theme.palette.darkgrey.darkgrey600
                                }}
                            >
                            {severity}
                            </Typography>
                        </Box>
                        <Box className={styles.resultItem}>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.darkgrey.darkgrey500
                                }}
                            >
                                Prevention 
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: theme.palette.darkgrey.darkgrey600
                                }}
                            >
                            {treatment}
                            </Typography>
                        </Box>
                        <Box className={styles.resultItem}>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.darkgrey.darkgrey500
                                }}
                            >
                                Remedies 
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: theme.palette.darkgrey.darkgrey600
                                }}
                            >
                            {treatment}
                            </Typography>
                        </Box>
                    </Box>
                )}
            </Box>
            <Box className={styles.buttonContainer}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={handlereUpload}
                    startIcon={
                        <ChevronLeft
                            sx={{
                                background: '#FFF',
                                color: theme.palette.primary.main,
                                borderRadius: '5px',
                                height: '30px',
                                width: '40px'
                            }}
                        />
                    }
                    sx={{
                        justifyContent: 'flex-start',
                        p: '12px 16px',
                        gap: '1rem',
                        textTransform: 'capitalize',
                        height: '50px'
                    }}
                >Reupload New Image</Button>
            </Box>
        </Box>
    )
};

export default TreatmentSuggestions;