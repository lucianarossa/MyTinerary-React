import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {Routes, Route} from "react-router-dom";
import Index from "./pages/Index.jsx";
import PaginaConstruccion from "./pages/PaginaConstruccion.jsx";


function App() {
  return (
  <>
  <NavBar/>
   <Routes>
     <Route path="/" element={<Index/>}/>
     <Route path="/construccion" element={<PaginaConstruccion/>}/>
   </Routes>
  <Footer />
  </>
  )
}

export default App;
