import "./App.css";
import Cursor from "./components/Cursor";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
