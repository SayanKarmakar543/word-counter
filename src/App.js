import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(27 30 40 / 84%)";
      document.body.style.color = "white"; // by using this we can change text color
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white ";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze below"
          summaryHeading="Your Text Summary"
          previewHeading="Preview"
          mode={mode}
        ></TextForm>
      </div>
    </>
  );
}

export default App;
