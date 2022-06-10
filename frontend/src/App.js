import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {Routes, Route} from "react-router-dom";
import Index from "./pages/Index.jsx";
import BuildingPage from "./pages/BuildingPage";


function App() {
  return (
  <>
  <NavBar/>
   <Routes>
     <Route path="/" element={<Index/>}/>
     <Route path="/buildingpage" element={<BuildingPage/>}/>
   </Routes>
  <Footer />
  </>
  )
}

export default App;