import React from "react";
import "../styles/signform.css"
import { Card } from "@nextui-org/react";
import { Container } from "react-bootstrap";
import { Input, Grid } from "@nextui-org/react";
import { Link as LinkRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import { useState } from "react"
import toast from 'react-hot-toast';
import GoogleLogIn from "./GoogleLogIn";
import { useNavigate } from "react-router-dom"



function LogIn() {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = async (event) => {
        event.preventDefault()
        const userData = {
            email: email,
            password: pass,
            from: "form-signup"
        }
        const res = await dispatch(usersActions.logInUser(userData))
        if (res.data.success) {
            toast.success(res.data.message)
            navigate("/")

        } else {
            toast.error(res.data.message)
            navigate("/signup")
        }

        setEmail("")
        setPass("")
    }

    return (
        <Container fluid className="sign-container">
            <h1 className="signform-title">Hello Again !</h1>
            <Card className="sign-card" css={{ backgroundColor: "white", boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.505)" }}>
                <Grid.Container className="inputs-container">
                    <form onSubmit={handleSubmit} className="form">
                        <Grid>
                            <Input onChange={e => setEmail(e.target.value)}
                                value={email}
                                label="Email"
                                type="email"
                                css={{ w: "70%", textAlign: "left" }}
                                className="input-forms"
                                placeholder="✉️"
                            />
                        </Grid>
                        <Grid>
                            <Input onChange={e => setPass(e.target.value)}
                                value={pass}
                                label="Password"
                                type="password"
                                css={{ w: "70%", textAlign: "left" }}
                                className="input-forms"
                                placeholder="🔑"
                            />
                        </Grid>
                        <div className="buttons-sign">
                            <button type="submit" className="first-btn"> LOG IN!
                            </button>
                            <p className="boxtitle">Or</p>
                            <GoogleLogIn />
                        </div>
                        <div className="boxlogin">
                            <p className="boxtitle">Have an account?</p>
                            <LinkRouter to="/signup" className="Links">
                                <button className="second-btn"> CREATE ACCOUNT!
                                </button>
                            </LinkRouter>
                        </div>
                    </form>
                </Grid.Container>
            </Card>
        </Container>
    )

}

export default LogIn