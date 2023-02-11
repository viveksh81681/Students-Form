import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form/Form";
import ViewDetails from "./components/ViewDetails/ViewDetails";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/view-details" element={<ViewDetails />} />
      </Routes>
    </div>
  );
}

export default App;
