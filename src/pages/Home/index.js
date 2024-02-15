import { Box, Typography } from "@mui/material";
import { useTheme } from "../../context/theme-context";
import styles from './style.module.css';
import ImageUpload from "./components/image-upload";
import { useState } from "react";
import Processing from "./components/Processing";
import TreatmentSuggestions from "./components/result";
import Navbar from "../../components/Navbar";

function Home() {
    const { theme } = useTheme();
    const [selectedImage, setSelectedImage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [detectionResult, setDetectionResult] = useState(null);

    const handleUpload = (image) => {
        // Set the selected image and start processing
        setIsProcessing(true);
    
        // Simulate processing (replace this with your actual processing logic)
        setTimeout(() => {
          // Mock result for demonstration purposes
          const result = {
            isDiseased: true,
            severity: 'Moderate',
            treatment: 'Watering and pruning recommended.',
          };
    
          // Set the detection result and stop processing
            setIsProcessing(false);
            setDetectionResult(result);
            setSelectedImage(image);

        }, 2000);
    };

    const reUpload = () => {
        setDetectionResult(null);
        setSelectedImage(null);
    }

    return (
        <Box
            className = {styles.home}    
            sx={{
                bgcolor: theme.palette.lightgrey.lightgrey400
            }}
        >
            {/* <Navbar/> */}
            <Typography
                variant="body1"
                sx={{
                    fontWeight: '700',
                    fontSize: '32px',
                    p: '1rem 0px 2.5rem',
                    letterSpacing: '1.5px',
                }}
            >
                PlantGuard
            </Typography>
            {/* Upload Component */}
            {!selectedImage && !detectionResult && <ImageUpload onUpload={handleUpload} />}

            {/* Processing Component */}
            {isProcessing && <Processing />}

            {detectionResult && (
                <TreatmentSuggestions
                    isDiseased={detectionResult.isDiseased}
                    severity={detectionResult.severity}
                    treatment={detectionResult.treatment}
                    reUpload={reUpload}
                />
            )}

        </Box>
    )
};

export default Home;