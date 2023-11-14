import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
/** @jsxImportSource @emotion/react */

import {
  ChakraProvider,
  CSSReset,
  ColorModeScript,
  extendTheme,
} from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/instrument-serif";

const theme = extendTheme({
  fonts: {
    //heading: `"Instrument Serif", sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  // components: {
  //   Container: {
  //     baseStyle: {
  //       maxW: "80.77%",
  //     },
  //   },
  // },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <ColorModeScript initialColorMode="light"></ColorModeScript>
    <App />
  </ChakraProvider>
);
