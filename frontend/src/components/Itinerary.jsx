import React from "react";
import "../styles/itinerary.css"
import { Card, Text } from "@nextui-org/react";
import { Collapse, Grid } from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import itinerariesActions from "../redux/actions/itinerariesActions"


function Itinerary() {
    const { id } = useParams() //recibe el id, desestructura el parametro con el metodo useparams
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(itinerariesActions.getItinerariesByCity(id))
        // eslint-disable-next-line
    },[])

    const itineraries = useSelector(store => store.itinerariesReducer.getItinerariesByCity)
    return (
        <Card className="iti-card" isHoverable variant="bordered" css={{ w: "85%", backgroundColor: "white", boxShadow:"0px 5px 8px rgba(0, 0, 0, 0.505)" }}>
            {itineraries.map(itinerary =>(
            <div key={itinerary._id} className="card-box">
            <Card.Body css={{ w: "100%" }}>
                <div>
                    <Text className="iti-title" css={{ paddingTop: "2rem", paddingBottom: "2rem", textShadow: "5px 0px 45px rgba(4, 4, 4, 0.911)" }}>{itinerary.name}</Text>
                    <User  
                        src={process.env.PUBLIC_URL + `${itinerary.authorimage}`}
                        name={itinerary.author}
                        bordered
                        color="error"
                        zoomed
                        squared
                    />
                    <Text h6 css={{ w: "100%", paddingTop: "3rem", paddingBottom: "2rem"}}>"{itinerary.description}"</Text>
                    <div className="price-duration">
                        <Text className="price-dur">Price:  {itinerary.price}</Text>
                        <Text className="price-dur">Duration:  {itinerary.duration} hours</Text>
                    </div>
                    <div className="price-duration">
                        <Text className="price-dur">🤍  {itinerary.likes}</Text>
                    </div>
                </div>
            </Card.Body>
            <Grid.Container gap={2} css={{ w: "100%" }}>
                <Grid>
                    <Collapse.Group divider={false}>
                        <Collapse title="MORE INFO" shadow css={{ backgroundColor:"#809090", boxShadow:"0px 5px 8px rgba(0, 0, 0, 0.505)", marginBottom: "1rem", }}>
                            <div>
                                <h3>FUN ACTIVITIES COMING SOON !!!</h3>
                            </div>
                        
                        </Collapse>
                    </Collapse.Group>
                </Grid>
            </Grid.Container>
            </div>
            ))}
        </Card>
    )


}

export default Itinerary