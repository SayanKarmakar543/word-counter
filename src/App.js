import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About"/>
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm 
          heading="Enter the text to analyze below"
          summaryHeading="Your Text Summary"
          previewHeading="Preview"
        ></TextForm>
      </div>
    </>
  );
}

export default App;
