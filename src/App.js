import React, { useState } from "react";
import Box from "./components/Box";
import Card from "./components/Card";
import ColorContext from "./store/color-context";
const App = () => {
  const [color, setColor] = useState("");
  const colorChangeHandler = (e) => {
    setColor(e.target.value);
  };
  return (
    <React.Fragment>
      <ColorContext.Provider value={{ color: color }}>
        <input onChange={colorChangeHandler} type="text" />
        <Card></Card>
        <Box></Box>
      </ColorContext.Provider>
    </React.Fragment>
  );
};

export default App;
