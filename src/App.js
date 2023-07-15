import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Top from "./components/Top";
import Center2 from "./components/Center2";
import SimpleSlider from "./components/SimpleSlider";
import Icons from "./components/Icons";
import Left from "./components/Left";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
    {/* <Navbar /> */}
      <Top />
      <SimpleSlider />
      <Icons />
      <Center2 />
      <Left />
      <Footer />
    </>
  );
}

export default App;
