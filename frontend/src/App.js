import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {Routes, Route} from "react-router-dom";
import Index from "./pages/Index.jsx";
import Details from "./pages/Details.jsx";
import ScrollToTop from "react-scroll-to-top";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CitiesPage from "./pages/CitiesPage.jsx";


function App() {
  return (
  <>
  <NavBar/>
   <Routes>
     <Route path="/" element={<Index/>}/>
     <Route path="/citiespage" element={<CitiesPage/>}/>
     <Route path="/details" element={<Details/>}/>
   </Routes>
  <Footer />
  <ScrollToTop
  smooth
  component={<ExpandLessIcon/>}/>
  
  </>
  )
}

export default App;
