import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(27 30 40 / 84%)";
      document.body.style.color = "white"; // by using this we can change text color
      showAlert("Switch to Dark!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white ";
      document.body.style.color = "black";
      showAlert("Switch to Light!", "success");
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
      <Alert
        alert={alert}
      />
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze below"
          summaryHeading="Your Text Summary"
          previewHeading="Preview"
          mode={mode}
          showAlert={showAlert}
        ></TextForm>
      </div>
    </>
  );
}

export default App;
