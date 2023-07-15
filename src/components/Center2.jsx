import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import sidephoto from "../assets/sliceing.png";

export default function Center2() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box
    // sx={{ flexGrow: 1 }}
    >
      <Grid
        style={{
          margin: "0px",
          padding: "20px",
        }}
        container
        xs={12}
        spacing={{ xs: 2, md: 4, sm: 3 }}
        // columns={{ xs:12, sm:12, md: 12 }}
      >
        {/* {Array.from(Array(6)).map((_, index) => ( */}
        <Grid
          item
          className="left-grid"
          xs={12}
          sm={12}
          md={5}
          //  key={index}
        >
          <Item>
            <img
              className="container-image"
              src={sidephoto}
              alt="side mobile photo"
              style={{ width: "100%" }}
            />
          </Item>
        </Grid>
        <Grid
          item
          className="left-grid"
          xs={12}
          sm={12}
          md={7}
          //    key={index}
        >
          <Item className="center-item">
            <Typography variant="h6" component="h2">
              OUR AMAZING SERVICES
            </Typography>

            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              className="center-text"
            >
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              className="center-text"
            >
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              className="center-text"
            >
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              className="center-text"
            >
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              className="center-text"
            >
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
