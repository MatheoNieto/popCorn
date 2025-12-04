import React from "react";
import { ThemeProvider as RestyleProvider } from "@shopify/restyle";
import theme from "./theme.core";

type Props = {
  children: React.ReactElement;
};
const ThemeProvider: React.FC<Props> = ({ children }) => {
  return <RestyleProvider theme={theme}>{children}</RestyleProvider>;
};

export default ThemeProvider;
