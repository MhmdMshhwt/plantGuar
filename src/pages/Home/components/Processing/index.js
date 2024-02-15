import { Box, Typography } from "@mui/material";
import './Processing.css'; // Import your CSS file

function Processing() {
    return (
        <Box className="processing-container">
            <Typography
                variant="body1"
                sx={{
                    color: '#FFF',
                    fontStyle: 'italic',
                    letterSpacing: '1px'
                }}
            >Processing Image...</Typography>
            <Box className="loading-spinner"></Box>
        </Box>
    )
};

export default Processing;