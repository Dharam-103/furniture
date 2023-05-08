import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SingleProduct from "./Pages/Product/SingleProduct";
import MainRouter from "./Routes/MainRouter";


function App() {
  return (
    <div className="App">
    <Navbar/>
    <MainRouter/>
    <Footer/>
    </div>
  );
}

export default App;
