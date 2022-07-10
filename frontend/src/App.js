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
import { useEffect } from "react"
import CitiesPage from "./pages/CitiesPage"
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn"
import { Toaster } from 'react-hot-toast'
import usersActions from "./redux/actions/usersActions";
import GoodBye from "./components/GoodBye";


function App(props) {

  useEffect(() => {
    props.getCities()
    
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token")
      props.verifyToken(token)

    }
    // eslint-disable-next-line 
  }, [])


  return (
    <>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            boxShadow: "0px 3px 10px rgba(8, 8, 8, 0.413)",
            padding: '1rem',
            color: 'black',
            textAlign: "center",
            fontSize: "14px",
          },
        }} />
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Index />} />
        <Route path="/citiespage" element={<CitiesPage />} />
        <Route path="citiespage/citydetails/:id" element={<CityDetails />} />
        <Route path="/goodbye" element= {<GoodBye/>}/>
        {/* //si el usuario esta deslogueado puede acceder  */}
        {!props.user && <Route path="/signup" element={<SignUp />} />}
        {!props.user && <Route path="/login" element={<LogIn />} />}
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
  verifyToken: usersActions.verifyToken
}

const mapStateToProps = (state) => {
  return {
    user: state.usersReducer.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
