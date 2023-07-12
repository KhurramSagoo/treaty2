import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Sample() {
  const gridStyle = {
    height: "100%",
    width: "auto",
    display: "flex",
    flexDirection: "column",
  };

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const style = {
    margin: "20px",
    display: "flex",
    flexDirection: "column",
  };

  const msgStyle = {
    margin: "20px",
    width: "88%",
    padding: "0",
  };

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Item sx={gridStyle}>
            <TextField
              sx={style}
              id="outlined-basic"
              label="NAME*"
              variant="outlined"
            />
            <TextField
              sx={style}
              id="outlined-basic"
              label="EMAIL*"
              variant="outlined"
            />
            <TextField
              sx={style}
              id="outlined-basic"
              label="SUBJECT*"
              variant="outlined"
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item sx={gridStyle}>
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={10}
              defaultValue=""
              sx={msgStyle}
            />
            <Stack direction="row" justifyContent="flex-end">
              <Button variant="contained">Send Message</Button>
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
