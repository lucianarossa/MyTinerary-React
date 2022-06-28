import React from "react";
import "../styles/signform.css"
import { Card } from "@nextui-org/react";
import { Container } from "react-bootstrap";
import { Input, Grid } from "@nextui-org/react";
import { Link as LinkRouter } from "react-router-dom"




function SignUp() {
    return (
        <Container fluid className="sign-container">
                <Card className="sign-card" isHoverable variant="bordered" css={{ backgroundColor: "white", boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.505)"}}>
                <h1 className="signform-title">Journey Becomes Real!</h1>
                            <Grid.Container className="inputs-container">
                                <Grid>
                                    <Input
                                        label="First Name"
                                        type="text"
                                        css={{ w: "70%", textAlign:"left"}}
                                        className="input-forms"
                                    />
                                </Grid>
                                <Grid>
                                    <Input
                                        label="Last Name"
                                        type="text"
                                        css={{ w: "70%",textAlign:"left" }}
                                        className="input-forms"
                                    />
                                </Grid>
                                <Grid>
                                    <Input
                                       label="Email"
                                        type="email"
                                        css={{ w: "70%",textAlign:"left"}}
                                        className="input-forms"
                                    />
                                </Grid>
                                <Grid>
                                    <Input
                                        label="Password"
                                        type="password"
                                        css={{ w: "70%",textAlign:"left"}}
                                        className="input-forms"
                                    />
                                </Grid>
                                <Grid>
                                    <Input
                                        label="Url Image"
                                        type="url"
                                        css={{ w: "70%",textAlign:"left"}}
                                        className="input-forms"
                                    />
                                </Grid>
                                <div className="buttons-sign">
                                <LinkRouter to="/" className="Links">
                                    <button className="sign-button create-button"> CREATE ACCOUNT!
                                    </button>
                                </LinkRouter>
                                <p className="OrSign">Or Sign Up with:</p>
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
                                <p className="OrSign have-account">Already have an account?</p>
                                <LinkRouter to="/login" className="Links">
                                    <button className="sign-button login-button"> LOG IN HERE!
                                    </button>
                                </LinkRouter>
                                </div>
                    </Grid.Container>
                </Card>
        </Container>
    )

}

export default SignUp