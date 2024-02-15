import React, { useContext, useState } from "react";
import styles from "./step1.module.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useTheme } from "../../../context/theme-context";
import { useNavigate } from "react-router-dom";

const SignUp = ({ onButtonClick }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    priorityCode: "",
  });
  const [ periorityCode, setPeriorityCode ] = useState();

  return (
    <div className={styles.form}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: '1.5rem',
          bgcolor: theme.palette.lightgrey.lightgrey400,
          height: '100vh'
        }}
      >
        <Typography
          variant="body1"
          sx={{
              fontWeight: '700',
              fontSize: '32px',
              p: '1rem 0px 2.5rem',
              letterSpacing: '1.5px',
            textAlign: 'center'
          }}
        >
          PlantGuard
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: '600',
            fontSize: '18px',
            // p: '1rem 0px 2.5rem',
            letterSpacing: '1px',
            textAlign: 'center',
            textDecoration: 'underline'
          }}
        >
          Register
        </Typography>
        <TextField
          label="Enter User Name"
          name="uerName"
          // value={}
          // onChange={(e) => setPeriorityCode(e.target.value)}
          variant="outlined"
          className={styles.textField}
          fullWidth
          sx={{
            backgroundColor: theme.palette.lightgrey.lightgrey00,
            width: {
              //md: "50%",
            },
          }}
        />
        <TextField
          label="Enter Email"
          name="email"
          // value={periorityCode}
          // onChange={(e) => setPeriorityCode(e.target.value)}
          variant="outlined"
          className={styles.textField}
          fullWidth
          sx={{
            backgroundColor: theme.palette.lightgrey.lightgrey00,
            width: {
              //md: "50%",
            },
          }}
        />
        <TextField
          label="Enter Password"
          type="password"
          name="password"
          // value={periorityCode}
          // onChange={(e) => setPeriorityCode(e.target.value)}
          variant="outlined"
          className={styles.textField}
          fullWidth
          sx={{
            backgroundColor: theme.palette.lightgrey.lightgrey00,
            width: {
              //md: "50%",
            },
          }}
        />
        <Box sx={{p: '1.5rem'}}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            onClick={()=> navigate('/home')}
            endIcon={
              <ChevronRight/>
            }
            sx={{
              p: "8px 13px 8px 24px",
              justifyContent: 'space-between',
              "& span:nth-of-type(1)": {
                background: '#FFF',
                color: theme.palette.primary.main,
                height: '2em',
                width: '2em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
              }
            }}
          >
            Register
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // gap: '.3rem'
          }}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
            }}
          >
            Have an account!
          </Typography>
          <Typography
            onClick={()=> navigate('/login')}
            variant="body1"
            component={'button'}
            sx={{
              textAlign: 'center',
              textDecoration: 'underline',
              fontWeight: '600',
              color: theme.palette.secondary.main,
              bgcolor: 'inherit',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Login
          </Typography>          
        </Box>
      </Box>
    </div>
  );
};

export default SignUp;
