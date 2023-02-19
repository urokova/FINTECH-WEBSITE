import "./App.css";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />

      <div style={{ marginTop: "300px" }}></div>
      <Footer />
    </div>
  );
}

export default App;
