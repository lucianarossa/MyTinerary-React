import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CityDetails from "./pages/CityDetails.jsx";
import ScrollToTop from "react-scroll-to-top";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CitiesPage from "./pages/CitiesPage.jsx";
import { connect } from "react-redux"
import citiesActions from "./redux/actions/citiesActions"
import {useEffect} from "react"


function App(props) {

  useEffect(() => {

    props.getCities()
// eslint-disable-next-line 
 }, [])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/citiespage" element={<CitiesPage />} />
        <Route path="citiespage/citydetails/:id" element={<CityDetails />} />
      </Routes>
      <Footer />
      <ScrollToTop
      style={{
        marginBottom: "8rem",
        marginLeft: "3rem",
        zIndex: "1"
    
      }} 
        smooth
        component={<ExpandLessIcon />} />

    </>
  )
}
const mapDispatchToProps = {
    getCities: citiesActions.getCities,
  }

  export default connect(null, mapDispatchToProps)(App)
