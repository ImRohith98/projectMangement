import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouteComponent from "./route";

function App() {
  return (
    <BrowserRouter>
      <RouteComponent />
    </BrowserRouter>
  );
}

export default App;
