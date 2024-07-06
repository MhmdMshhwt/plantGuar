import React, { useContext, useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import styles from "./style.module.css";
import { useTheme } from "../../context/theme-context";

const DeleteConfirmation = (props) => {
  const { theme, darkMode } = useTheme();
  const handleClose = () => {
    // setOpenDeleteConfirmation(false);
  };
  const handleAccountDelete = async () => {
    // setOpenDeleteConfirmation(false);
    // setIsLoading(true);

    localStorage.clear();
  //   await supabase.from("users").delete().eq("id", user.id);
  //   logout();
  //   // setIsLoading(false);
  // };

  return (
    <Modal open={openDeleteConfirmation} onClose={handleClose}>
      <Box
        className={styles.delConfirm}
        sx={{
          bgcolor: theme.palette.lightgrey.lightgrey00,
          width: {
            xs: "320px",
            // sm: "360px",
          },
        }}
      >
        <Box className={styles.content}>
          <Box className={styles.frame}>
            <Box className={styles.icon}>
              <img src={trash} alt="delete" />
            </Box>
            <Box className={styles.text}>
              <Typography
                variant="body1"
                component="h4"
                sx={{
                  color: theme.palette.darkgrey.darkgrey600,
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                Do you want delete your account?
              </Typography>
            </Box>
          </Box>
          <Box className={styles.buttons}>
            <Button
              variant="text"
              onClick={handleClose}
              sx={{
                textTransform: "capitalize",
                color: theme.palette.darkgrey.darkgrey300,
                bgcolor: darkMode
                  ? "#3D3D3D"
                  : theme.palette.lightgrey.lightgrey500,
                padding: "8px",
                boxShadow: "none",
                fontSize: "16px",
                width: "120px",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                color: "#FFF",
                bgcolor: theme.palette.danger.red500,
                padding: "8px",
                width: "120px",
                fontSize: "16px",
              }}
              onClick={handleAccountDelete}
            >
              Yes
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
export default DeleteConfirmation;
