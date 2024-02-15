import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../../context/theme-context";

const CreatorType = ({ setIsOpenThanks }) => {
  const { theme } = useTheme();
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // insert into datbase 
    setIsOpenThanks(true);
  };

  const handleCancel = () => {
    navigate("/home");
  };

  return (
    <Box className={styles.creatorType} sx={{}}>
      <Box className={styles.content}>
        <Box className={styles.creatorType2}>
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.darkgrey.darkgrey600,
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Choose Category
          </Typography>
          <FormControl
            sx={{
              color: theme.palette.darkgrey.darkgrey500,
              "& .MuiFormControlLabel-label": {
                fontSize: "14px",
              },
            }}
          >
            <RadioGroup
              name="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <FormControlLabel
                value="New feature suggestion"
                control={<Radio />}
                label="New feature suggestion"
              />
              <FormControlLabel
                value="Bug report & platform issues"
                control={<Radio />}
                label="Bug report & platform issues"
              />
              <FormControlLabel
                value="Login or registration issue"
                control={<Radio />}
                label="Login or registration issue"
              />
              <FormControlLabel
                value="Trouble with disease classification"
                control={<Radio />}
                label="Trouble with disease classification"
              />
              <FormControlLabel
                value="Other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box className={styles.options}>
          <Typography
            variant="body1"
            color={theme.palette.darkgrey.darkgrey600}
          >
            Details
          </Typography>
          <TextField
            sx={{
              background: theme.palette.lightgrey.lightgrey00,
              width: {
                //md: "50%",
              },
            }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            id="outlined-textarea"
            multiline
            rows={4}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'stretch',
            gap: '16px',
          }}
        >
          <Button
            variant="contained"
            onClick={handleSubmit}
            fullWidth
          >
            Submit
          </Button>
          <Button
            onClick={handleCancel}
            variant="text"
            fullWidth
            sx={{
              p: '0px',
              color: theme.palette.darkgrey.darkgrey400,
              textTransform: "capitalize",
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreatorType;
