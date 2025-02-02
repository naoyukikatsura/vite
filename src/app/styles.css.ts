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
  // height: headerSize,
  height: "0",
  display: "flex",
  alignItems: "center",
});

export const main = style({
  minHeight: calc.subtract("100vh", headerSize, footerSize),
  "@supports": {
    "(min-height: 100dvh)": {
      minHeight: calc.subtract("100dvh", headerSize, footerSize),
    },
  },
  display: "flex",
  marginBottom: "150px",
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
  // appearance: 'none',
  borderRadius: "50%",
  // border: '1px solid #95A6A7'
});

export const newCreateString = style({
  color: "#287FB8",
  fontSize: "20px",
  marginLeft: "8px",
});

export const menu = style({
  position: "fixed",
  right: "30%",
  top: "20px",
});

export const menuList = style({
  boxShadow: "0px 0px 4px rgba(0,0,0,0.25)",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "8px",
  height: "100px",
  width: "175px",
  position: "absolute",
  top: "30px",
  left: "-150px",
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
  marginRight: "115px",
});

function defineProperties(arg0: { defaultCondition: string }) {
  throw new Error("Function not implemented.");
}
