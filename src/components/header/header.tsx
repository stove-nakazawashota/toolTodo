import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "./header.module.scss";

const header = () => {
  return (
    <div className={styles.root}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={styles.app_bar}>
          <Toolbar className={styles.tool_bars}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className={styles.title}
            >
              ReduxToolKitTodo
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default header;
