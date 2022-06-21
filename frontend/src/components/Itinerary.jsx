import React from "react";
import "../styles/itinerary.css"
import { Card, Text } from "@nextui-org/react";
import { Collapse, Grid } from "@nextui-org/react";
import { User } from "@nextui-org/react";



function Itinerary() {
    return (
        <Card isHoverable variant="bordered" css={{ w: "80%", backgroundColor: "white", boxShadow:"0px 5px 8px rgba(0, 0, 0, 0.505)" }}>
            <Card.Body css={{ w: "100%" }}>
                <Text>
                    <Text h3>"Gaudi Full Tour"</Text>
                    <User
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        name="Ariana Wattson"
                        bordered
                        color="error"
                        zoomed
                    />
                    <Text h6 css={{ w: "80%" }}>"Visit the main works of Gaudi and admire the spectacular views of Barcelona surrounded by modernist architecture"</Text>
                    <div className="price-duration">
                        <Text h5>Price: 💵💵 </Text>
                        <Text h5>Duration: 2 hours</Text>
                    </div>
                </Text>
            </Card.Body>
            <Grid.Container gap={2} css={{ w: "100%" }} >
                <Grid>
                    <Collapse.Group divider={false}>
                        <Collapse title="find out more" shadow css={{ backgroundColor:"#809090", boxShadow:"0px 5px 8px rgba(0, 0, 0, 0.505)"}}>
                            <Text>
                                <Text h3>ACTIVITIES</Text>
                            </Text>
                            <Text>
                                <Text h3>COMMENTS</Text>
                            </Text>
                        </Collapse>
                    </Collapse.Group>
                </Grid>
            </Grid.Container>
        </Card>
    )


}

export default Itinerary