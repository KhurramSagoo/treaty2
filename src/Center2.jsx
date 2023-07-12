import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import sidephoto from "./assets/sliceing.png";
// import { styled } from '@mui/material/styles';

export default function Center2() {
  //     const theme = createTheme({
  //     components: {
  //       MuiTypography: {
  //         defaultProps: {
  //           variantMapping: {
  //             h1: 'h2',
  //             h2: 'h2',
  //             h3: 'h2',
  //             h4: 'h2',
  //             h5: 'h2',
  //             h6: 'h2',
  //             subtitle1: 'h2',
  //             subtitle2: 'h2',
  //             body1: 'span',
  //             body2: 'span',
  //           },
  //         },
  //       },
  //     },
  //   });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 12, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {/* {Array.from(Array(6)).map((_, index) => ( */}
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          //    key={index}
        >
          <Item>
            <img
              className="container-image"
              src={sidephoto}
              alt="side mobile photo"
            />
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          //    key={index}
        >
          <Item>
            <Typography variant="h6" component="h2">
              OUR AMAZING SERVICES
            </Typography>
            <Typography variant="h4" component="h2">
              OUR AMAZING SERVICES
            </Typography>
            <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
            <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
            <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
            <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
            <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>

          </Item>
        </Grid>
        {/* ))} */}
      </Grid>
    </Box>
  );
}
