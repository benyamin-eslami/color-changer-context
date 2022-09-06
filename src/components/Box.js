import React, { useContext } from "react";
import ColorContext from "../store/color-context";
import styles from "./Box.module.css";
const Box = () => {
  const ctx = useContext(ColorContext);
  console.log(ctx.color);
  return (
    <div className={styles.box} style={{ backgroundColor: ctx.color }}></div>
  );
};

export default Box;
