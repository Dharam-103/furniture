import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SingleProduct from "./Pages/Product/SingleProduct";


function App() {
  return (
    <div className="App">
    <Navbar/>
    <SingleProduct/>
    <Footer/>
    </div>
  );
}

export default App;
