import { createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

const headerSize = createVar();
const footerSize = createVar();

export const root = style({
  vars: {
    [headerSize]: "64px",
    [footerSize]: "128px",
  },
  margin: "0 auto",
  width: "400px",
});

export const header = style({
  height: headerSize,
  display: "flex",
  alignItems: "center",
  // border: '2px solid green',
});

export const main = style({
  minHeight: calc.subtract("100vh", headerSize, footerSize),
  "@supports": {
    "(min-height: 100dvh)": {
      minHeight: calc.subtract("100dvh", headerSize, footerSize),
    },
  },
  // border: '2px solid blue',
  display: "flex",
});

export const footer = style({
  height: footerSize,
  display: "flex",
  alignItems: "center",
});

export const taskItem = style({
  display: "flex",
  marginTop: "10px",
});

export const commonButton = style({
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  border: "none",
  ":hover": {
    opacity: "0.7",
  },
});

export const menuButton = style({
  color: "#287FB8",
});

export const createButton = style({
  backgroundColor: "#287FB8",
  color: "#D9D9D9",
});

export const titleInput = style({
  lineHeight: "19px",
  fontSize: "16px",
  alignItems: "center",
  border: "none",
});

export const descriptionInput = style({
  height: "25px",
  border: "none",
  fontSize: "15px",
  color: "#95A6A7",
});

export const stringIsGray = style({
  color: "#95A6A7",
});

export const taskCheckButton = style({
  width: "16px",
  height: "16px",
  marginTop: "5px",
  marginRight: "10px",
});

export const newCreateString = style({
  color: "#287FB8",
  fontSize: "20px",
  marginLeft: "8px",
});

export const menu = style({
  position: "relative",
});

export const menuList = style({
  boxShadow: "0px 0px 4px rgba(0,0,0,0.25)",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "8px",
  height: "100px",
  width: "175px",
  position: "absolute",
  top: "50px",
  left: "0",
});

export const menuTitle = style({
  margin: "0 auto",
  marginTop: "15px",
  width: "130px",
});

export const menuString = style({
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "15px",
  alignItems: "center",
  marginLeft: "3px",
});

export const taskList = style({
  paddingTop: "40px",
  paddingLeft: "16px",
});

export const visuallyHidden = style({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  whiteSpace: "nowrap",
  borderWidth: "0",
});
function defineProperties(arg0: { defaultCondition: string }) {
  throw new Error("Function not implemented.");
}
