import React, { useContext, useState } from "react";
import styles from "./step1.module.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useTheme } from "../../../context/theme-context";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/user-context";
import axios from "axios";

const Login = ({ onButtonClick }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(password);
  }

  const handleSubmit = async() => {
    const data = {
      email: email,
      password: password,
    };

    setUser({
      userName: 'Mohamed',
      email,
      password
    })
        navigate(`${process.env.PUBLIC_URL}/home`)

    // try {
    //   const response = await axios.post('http://localhost:3000/user/login', data, {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });
  
    //   if (response.status === 200) {
    //     setUser(response.data.user);
    //     navigate(`${process.env.PUBLIC_URL}/home`)
    //   }
    //   console.log('Success:', response.data);
    // } catch (error) {
    //   if (error.response) {
    //     // Server responded with a status other than 200 range
    //     console.error('Error response:', error.response.data);
    //     console.error('Error status:', error.response.status);
    //     console.error('Error headers:', error.response.headers);
    //   } else if (error.request) {
    //     // Request was made but no response received
    //     console.error('Error request:', error.request);
    //   } else {
    //     // Something else happened
    //     console.error('Error message:', error.message);
    //   }
    // }
    
  }
  const [formData, setFormData] = useState({
    priorityCode: "",
  });
  const [ periorityCode, setPeriorityCode ] = useState();

  return (
    <Box className={styles.form}
      sx={{
        bgcolor: theme.palette.lightgrey.lightgrey400,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: '1.5rem',
          bgcolor: theme.palette.lightgrey.lightgrey600,
          width:{
            xs: '100%',
            sm: '100%',
            md: '430px',
            
          },
          borderRadius:'10px'
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
          Login
        </Typography>
        <TextField
          label="Enter Email"
          name="email"
          value={email}
          onChange={handleEmailChange}
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
          value={password}
          onChange={handlePasswordChange}
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
            onClick={handleSubmit}
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
            Login
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
            You don't have an account!
          </Typography>
          <Typography
            onClick={()=> navigate(`${process.env.PUBLIC_URL}/signup`)}
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
            Sign Up
          </Typography>          
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
