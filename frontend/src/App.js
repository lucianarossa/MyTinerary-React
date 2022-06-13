import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {Routes, Route} from "react-router-dom";
import Index from "./pages/Index.jsx";
import Cities from "./pages/Cities";
import Details from "./pages/Details";
import ScrollToTop from "react-scroll-to-top";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


function App() {
  return (
  <>
  <NavBar/>
   <Routes>
     <Route path="/" element={<Index/>}/>
     <Route path="/cities" element={<Cities/>}/>
     <Route path="/details" element={<Details/>}/>
   </Routes>
  <Footer />
  <ScrollToTop
  style={{backroundColor: "transparent"}}
  smooth
  component={<ExpandLessIcon fontSize="large"/>}
  />
  
  </>
  )
}

export default App;
