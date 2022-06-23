import React from "react";
import "../styles/itinerary.css"
import { Card, Text } from "@nextui-org/react";
import { Collapse, Grid } from "@nextui-org/react";
import { User } from "@nextui-org/react";


function Itinerary({ data }) {

    return (
        <Card className="iti-card" isHoverable variant="bordered" css={{mw: "80%", padding:"0",backgroundColor: "white", boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.505)" }}>
            {data.map(itinerary => (
                <div key={itinerary._id} className="card-box">
                    <Card.Body css={{ w: "100%" }}>
                        <div>
                            <Text className="iti-title" css={{textShadow: "5px 0px 45px rgba(4, 4, 4, 0.911)" }}>{itinerary.name}</Text>
                            <User
                                src={process.env.PUBLIC_URL + `${itinerary.authorimage}`}
                                name={itinerary.author}
                                bordered
                                color="error"
                                zoomed
                                squared
                            />
                            <Text h6 css={{ w: "100%", paddingTop: "3rem", paddingBottom: "2rem" }}>"{itinerary.description}"</Text>
                            <div className="price-duration">
                                <Text className="price-dur">Price:  {itinerary.price}</Text>
                                <Text className="price-dur">Duration:  {itinerary.duration} hs</Text>
                            </div>
                            <div className="price-duration-like">
                                    <button className="button-like">
                                        <img className="likeimage" src={process.env.PUBLIC_URL + "/assets/like.png"} alt="like" />
                                        {itinerary.likes} likes !</button>
                            </div>
                            <div className="price-duration-hash">
                                {itinerary.hashtags.map((hash, index) =>
                                    <div className="price-dur-hash" css={{ color: "#E993A6" }} key={index}>{hash}</div>
                                )}
                            </div>
                        </div>
                    </Card.Body>
                    <Grid.Container gap={2} css={{ w: "100%" }}>
                        <Grid>
                            <Collapse.Group divider={false}>
                                <Collapse title="MORE INFO" shadow css={{ backgroundColor: "#809090", boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.505)", marginBottom: "1rem", }}>
                                    <div>
                                        <h3 className="funtitle">FUN ACTIVITIES COMING SOON !!!</h3>
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