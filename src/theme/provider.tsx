import "@acab/reset.css";
import type { FC, ReactNode } from "react";
import "../styles/styles.css";

type ThemeProviderProps = {
  children?: ReactNode;
};
const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <>{children}</>;
};

export { ThemeProvider };
