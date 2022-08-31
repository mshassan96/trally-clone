import "./App.css";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import Feature from "./Components/Feature";
import FeatureCards from "./Components/FeatureCards";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Welcome />
      <Feature />
      <FeatureCards />
    </div>
  );
}

export default App;
