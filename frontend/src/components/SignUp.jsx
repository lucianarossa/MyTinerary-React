import React from "react";
import "../styles/signform.css";
import { Card } from "@nextui-org/react";
import { Container } from "react-bootstrap";
import { Input, Grid } from "@nextui-org/react";
import { Link as LinkRouter } from "react-router-dom";
import {useDispatch} from "react-redux";
import usersActions from "../redux/actions/usersActions";
import {useState} from "react"
import toast from 'react-hot-toast';
import Select from 'react-select'
import GoogleSignUp from "./GoogleSignUp";



const options = [
    { value: 'Argentina', label: 'Argentina' },
    { value: 'Colombia', label: 'Colombia' },
    { value: 'Mexico', label: 'Mexico' }
  ]


function SignUp() {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const [image, setImage] = useState ("")
   
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password:pass,
            image: image,
            from: "form-signup"
        }
        const res = await dispatch(usersActions.signUpUser(userData))
        console.log(res)
        const errormsg = res.data.message

        if(res.data.from === "validator"){
            errormsg.forEach(e => {
                toast.error(e.message)
            })
        } 
        if (res.data.from === "signup") {
            if(res.data.success){
                toast.success(res.data.message)
            }else{
                toast.error(res.data.message)
            }
        }

        setFirstName("")
        setLastName("")
        setEmail("")
        setPass("")
        setImage("")
    }
    return (
        <Container fluid className="sign-container">
            <h1 className="signform-title">Welcome Traveler !</h1>
                <Card className="sign-card" css={{ backgroundColor: "white", boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.505)"}}>
                            <Grid.Container className="inputs-container">
                                <form onSubmit={handleSubmit} className="form">
                                <Grid>
                                <Select options={options} placeholder="Your Country" className="select-forms"/>
                                </Grid>
                                <Grid>
                                    <Input onChange={e=>setFirstName(e.target.value)}
                                        value={firstName}
                                        label="First Name"
                                        type="text"
                                        css={{ w: "70%", textAlign:"left"}}
                                        className="input-forms"
                                        placeholder="👤"
                                    />
                                </Grid>
                                <Grid>
                                    <Input onChange={e=>setLastName(e.target.value)}
                                        value={lastName}
                                        label="Last Name"
                                        type="text"
                                        css={{ w: "70%",textAlign:"left" }}
                                        className="input-forms"
                                        placeholder="👤"
                                    />
                                </Grid>
                                <Grid>
                                    <Input onChange={e=>setEmail(e.target.value)}
                                       value={email}
                                       label="Email"
                                        type="email"
                                        css={{ w: "70%",textAlign:"left"}}
                                        className="input-forms"
                                        placeholder="✉️"
                                    />
                                </Grid>
                                <Grid>
                                    <Input onChange={e=>setPass(e.target.value)}
                                        value={pass}
                                        label="Password"
                                        type="password"
                                        css={{ w: "70%",textAlign:"left"}}
                                        className="input-forms"
                                        placeholder="🔑"
                                    />
                                </Grid>
                                <Grid>
                                    <Input onChange={e=>setImage(e.target.value)}
                                        value={image}
                                        label="Url Image"
                                        type="text"
                                        css={{ w: "70%",textAlign:"left"}}
                                        className="input-forms"
                                        placeholder="📸"
                                    />
                                </Grid>
                                <div className="buttons-sign">
                                    <button type="submit" className="first-btn"> CREATE ACCOUNT!
                                    </button>
                                    <p className="boxtitle">Or</p>
                                    <GoogleSignUp/>
                                <div className="boxlogin">
                                <p className="boxtitle">Already have an account?</p>
                                <LinkRouter to="/login" className="Links">
                                    <button className="second-btn"> LOG IN!
                                    </button>
                                </LinkRouter>
                                </div>
                                </div>
                                </form> 
                    </Grid.Container>
                </Card>
        </Container>
    )

}

export default SignUp