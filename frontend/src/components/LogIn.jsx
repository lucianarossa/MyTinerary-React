import React from "react";
import "../styles/signform.css"
import { Card } from "@nextui-org/react";
import { Container } from "react-bootstrap";
import { Input, Grid } from "@nextui-org/react";
import { Link as LinkRouter } from "react-router-dom";
import {useDispatch} from "react-redux";
import usersActions from "../redux/actions/usersActions";
import {useState} from "react"


function LogIn() {

    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        console.log(event)
        event.preventDefault()
        const loguedUser = {
            email: email,
            password:pass,
            from: "form-signup"
        }
        dispatch(usersActions.logInUser(loguedUser))

        setEmail("")
        setPass("")
    }

    return (
        <Container fluid className="sign-container">
                <Card className="sign-card" isHoverable variant="bordered" css={{ backgroundColor: "white", boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.505)"}}>
                <h1 className="signform-title">Hello Again!</h1>
                            <Grid.Container className="inputs-container">
                            <form onSubmit={handleSubmit} className="form">
                                <Grid>
                                    <Input onChange={e=>setEmail(e.target.value)}
                                       value={email}
                                       label="Email"
                                        type="email"
                                        css={{ w: "70%", textAlign:"left"}}
                                        className="input-forms"
                                    />
                                </Grid>
                                <Grid>
                                    <Input onChange={e=>setPass(e.target.value)}
                                        value={pass}
                                        label="Password"
                                        type="password"
                                        css={{ w: "70%", textAlign:"left"}}
                                        className="input-forms"
                                    />
                                </Grid>
                                <div className="buttons-sign">
                                    <button type="submit" className="first-btn"> LOG IN!
                                    </button>
                                <div className="boxsign">
                                <div className="boxmedia">
                                <p className="boxtitle">Or Log In with:</p>
                                <div className="media-container media-signup">
                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                        <img className="signup-media" src={process.env.PUBLIC_URL + "/assets/instagram.png"} alt="" />
                                    </a>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        <img className="signup-media" src={process.env.PUBLIC_URL + "/assets/facebook.png"} alt="" />
                                    </a>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                        <img className="signup-media" src={process.env.PUBLIC_URL + "/assets/linkedin.png"} alt="" />
                                    </a>
                                </div>
                                </div>
                                <div className="boxlogin">
                                <p className="boxtitle">Have an account?</p>
                                <div className="media-container media-signup">
                                <LinkRouter to="/signup" className="Links">
                                <button className="second-btn"> CREATE ACCOUNT!
                                    </button>
                                </LinkRouter>
                                </div>
                                </div>
                                </div>
                                </div> 
                                </form>
                            </Grid.Container>
                </Card>
            </Container>
)

}

export default LogIn