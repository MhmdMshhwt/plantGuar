import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Link, Paper, Box } from '@mui/material';
import { useTheme } from '../../context/theme-context';

const HelpPage = () => {
    const { theme } = useTheme();

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                // bgcolor: theme.palette.lightgrey.lightgrey400
            }}
        >
        <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Help!
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to the PlantGuard Help Page! Here you will find detailed instructions on how to use the website effectively. Follow these steps to diagnose and treat your plants using our app:
        </Typography>

        <Typography variant="h5" gutterBottom>
          1. Home Page Overview
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Navigation Bar: Use the navigation bar on the left to access different sections of the website such as Home, Help, and Login." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Theme Switcher: Toggle between light and dark mode using the buttons located just below the navigation bar." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Introduction Text: Read the brief introduction about the PlantGuard app and its functionality." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Upload Section: This is where you can upload images of your plants for analysis." />
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          2. Creating an Account
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Sign-Up: Click on the 'Login' option in the navigation bar and then select 'Sign-Up'." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Fill in Details: Provide your email address, create a password, and fill in any additional information such as your name and location." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email Verification: Check your email for a verification link. Click on the link to verify your account." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Profile Setup: Complete your profile by adding information about your plants and gardening preferences." />
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          3. Logging In
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Login: Click on the 'Login' option in the navigation bar." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Enter Credentials: Enter your registered email and password." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Access Account: Once logged in, you can access your profile, upload history, and personalized recommendations." />
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          4. Uploading an Image
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Navigate to Home Page: Ensure you are on the home page." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Upload Plant Image Box: Click on the 'Upload Plant Image' box." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Select Image: Choose an image from your device that clearly shows the plant or affected area." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Upload Button: Click the 'UPLOAD' button to submit the image for analysis." />
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          5. Viewing Results
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Processing: The AI model will process the uploaded image to detect any plant diseases." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Classification Results: Once processing is complete, the results will be displayed. This includes:" />
          </ListItem>
          <List>
            <ListItem>
              <ListItemText primary="Detected disease" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Severity level" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Recommended treatments" />
            </ListItem>
          </List>
          <ListItem>
            <ListItemText primary="Detailed Analysis: Visual markers may highlight affected areas on the uploaded image, providing a clear understanding of the diagnosis." />
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          6. Providing Feedback
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Feedback Form: Navigate to the feedback section and fill out the form to provide your feedback about the app and the accuracy of the diagnosis." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Submit Feedback: Your feedback will be used to continuously improve the model and the application." />
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          7. Managing Your Profile
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Profile Management: Access your profile to manage your personal information and gardening preferences." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Upload History: View your upload history to track the health of your plants over time." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Personalized Recommendations: Access personalized care and treatment recommendations based on your profile and previous uploads." />
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          8. Additional Features
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Help Section: Refer to this help page whenever you need assistance." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Dark Mode: Switch between light and dark themes as per your preference for a comfortable viewing experience." />
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          Contact Support
        </Typography>
        <Typography variant="body1" paragraph>
          If you encounter any issues or have further questions, please contact our support team at <Link href="mailto:support@plantguard.com">support@plantguard.com</Link>.
        </Typography>

        <Typography variant="body1" paragraph>
          We hope this guide helps you navigate and utilize the PlantGuard app effectively. Happy gardening!
        </Typography>
      </Paper>
            </Container>
    </Box>
  );
};

export default HelpPage;
