import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CityDetails from "./pages/CityDetails.jsx";
import ScrollToTop from "react-scroll-to-top";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { connect } from "react-redux"
import citiesActions from "./redux/actions/citiesActions"
import {useEffect} from "react"
import CitiesPage from "./pages/CitiesPage"
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn"
import SignPage from "./pages/SignPage";
import { ToastContainer } from 'react-toastify';




function App(props) {

  useEffect(() => {

    props.getCities()
// eslint-disable-next-line 
 }, [])

  return (
    <>
      <ToastContainer position="bottom-right"
            theme='light'
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover />
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/citiespage" element={<CitiesPage />} />
        <Route path="citiespage/citydetails/:id" element={<CityDetails />} />
        <Route path="/signup" element={<SignPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
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
