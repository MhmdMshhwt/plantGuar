import { Box, Button } from "@mui/material";
import styles from "./style.module.css";
import { FileUploadOutlined } from "@mui/icons-material";
import { useTheme } from "../../../../context/theme-context";
import { useState } from "react";

const ImageUpload = ({ onUpload }) => {
    const { theme, darkMode } = useTheme();
    const [selectedImages, setSelectedImages] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const imageUrls = files.map(file => URL.createObjectURL(file));
        setSelectedImages(imageUrls);
    };

    const handleUpload = () => {
        if (selectedImages.length > 0) {
            onUpload(selectedImages);
        } else {
            alert('Please select at least one image before uploading.');
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
                        backgroundImage: selectedImages.length > 0
                        ? `url(${selectedImages[0]})`
                        : "none",
                    }}
                >
                    {selectedImages.length === 0 &&
                        <Box className={styles.content}>
                            <input
                                type="file"
                                accept="image/*"
                                id="imageInput"
                                style={{ display: "none" }}
                                multiple
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
                                Upload Plant Images
                            </Button>
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
