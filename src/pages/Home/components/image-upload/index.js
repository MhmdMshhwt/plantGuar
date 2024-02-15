import { Box, Button } from "@mui/material";
import styles from "./style.module.css";
import { FileUploadOutlined } from "@mui/icons-material";
import { useTheme } from "../../../../context/theme-context";
import { useState } from "react";
const ImageUpload = ({onUpload}) => {
    const { theme, darkMode } = useTheme();
    const [selectedImage, setSelectedImage] = useState();

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        // Process the selected file as needed
        if (selectedFile) {
          // Do something with the file
          setSelectedImage(URL.createObjectURL(selectedFile));
        }    
    };

    const handleUpload = () => {
        // Check if an image is selected before proceeding
        if (selectedImage) {
          // Call the parent component function to handle the upload
          onUpload(selectedImage);
        } else {
          // Optionally, provide feedback to the user if no image is selected
          alert('Please select an image before uploading.');
        }
    };

    return (
        <Box className={styles.upload}>
            <Box className={styles.primarySkills}
                sx={{
                    borderColor: theme.palette.lightgrey.lightgrey800,
                    background: theme.palette.lightgrey.lightgrey00,
                }}
            >
                <Box className={styles.primaryImg}
                    sx={{
                        backgroundImage: selectedImage
                        ? `url(${selectedImage})`
                        : "none",
                    }}
                >
                    {!selectedImage &&
                        <Box className={styles.content}>
                            {/* <Box className={styles.uploadPhoto}> */}
                                <input
                                type="file"
                                accept="image/*"
                                id="imageInput"
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                                />
                                <Button
                                    variant="text"
                                    onClick={() => document.getElementById("imageInput").click()}
                                    startIcon={<FileUploadOutlined />}
                                    sx={{
                                        color: darkMode
                                        ? theme.palette.darkgrey.darkgrey300
                                        : theme.palette.darkgrey.darkgrey400,
                                        textTransform: "capitalize",
                                    }}
                                >
                                    Upload Plant Image
                                </Button>
                            {/* </Box> */}
                        </Box>
                    }
                </Box>
            </Box>
            <Button
                variant="contained"
                fullWidth
                onClick={handleUpload}
            >
                Upload
            </Button>
        </Box>
    );
};
export default ImageUpload;
