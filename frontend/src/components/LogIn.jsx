import React from "react";
import "../styles/signform.css"
import { Card } from "@nextui-org/react";
import { Container } from "react-bootstrap";
import { Input, Grid } from "@nextui-org/react";
import { Link as LinkRouter } from "react-router-dom"





function LogIn() {
    return (
        <Container fluid className="sign-container">
                <Card className="sign-card" isHoverable variant="bordered" css={{ backgroundColor: "white", boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.505)"}}>
                <h1 className="signform-title">Hello Again!</h1>
                            <Grid.Container className="inputs-container">
                                <Grid>
                                    <Input
                                       label="Email"
                                        type="email"
                                        css={{ w: "70%", textAlign:"left"}}
                                        className="input-forms"
                                    />
                                </Grid>
                                <Grid>
                                    <Input
                                        label="Password"
                                        type="password"
                                        css={{ w: "70%", textAlign:"left"}}
                                        className="input-forms"
                                    />
                                </Grid>
                                <div className="buttons-sign">
                                <LinkRouter to="/login" className="Links">
                                    <button className="sign-button login-button login-log"> LOG IN!
                                    </button>
                                </LinkRouter>
                                <p className="OrSign">Or Log In with:</p>
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
                                <p className="OrSign have-account">Don't have an account yet?</p>
                                <LinkRouter to="/signup" className="Links">
                                <button className="sign-button create-button"> CREATE ACCOUNT!
                                    </button>
                                </LinkRouter>
                            </div> 
                            </Grid.Container>
                </Card>
            </Container>
)

}

export default LogIn