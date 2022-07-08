import React from "react";
import "../styles/itinerary.css"
import { Card, Text } from "@nextui-org/react";
import { Collapse, Grid } from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react";
import activitiesActions from "../redux/actions/activitiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import Activity from "./Activity";
import NotFoundActivities from "./NotFoundActivities";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Comment from "./Comment"

function Itinerary({ data, handleSetR }) {
    // console.log("🚀 ~ file: Itinerary.jsx ~ line 17 ~ Itinerary ~ data", data)

    const dispatch = useDispatch()
    const [likes, setLikes] = useState()
    const [activities, setActivities] = useState([])
    const user = useSelector(store => store.usersReducer.user)


    useEffect(() => {
        const activitiesIti = async () => {
            const res = await dispatch(activitiesActions.getActivitiesByItinerary(data._id));
            setActivities(res);
            // console.log("ACTIVITIES",res)
        }

        activitiesIti()
        // eslint-disable-next-line
    }, [])



    async function likesOrDislikes() {
        const res = await dispatch(itinerariesActions.likeDislike(data._id))
        setLikes(res)
    }
    // console.log("LIKES", likes)

    return (
        <>
            <Card key={data._id} className="iti-card" isHoverable variant="bordered" css={{ mw: "80%", padding: "2", backgroundColor: "white", boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.505)" }}>
                <div className="card-box">
                    <Card.Body css={{ w: "100%" }}>
                        <div>
                            <Text className="iti-title">{data.name}</Text>
                            <User
                                src={process.env.PUBLIC_URL + `${data.authorimage}`}
                                name={data.author}
                                bordered
                                color="error"
                                zoomed
                                squared
                            />
                            <Text h6 css={{ w: "100%" }}>"{data.description}"</Text>
                            <div className="price-duration">
                                <Text className="price-dur">Price:  {data.price}</Text>
                                <Text className="price-dur">Duration:  {data.duration} hs</Text>
                            </div>
                            <div className="price-duration-like">

                                {user ?
                                    <button className="button-like" onClick={likesOrDislikes}> 
                                    {likes?.includes(user.id) ?
                                        (<span style={{ fontSize: "30" }}>
                                            <FavoriteIcon className="like" />
                                        </span>) :
                                        (<span style={{ fontSize: "30" }}><FavoriteBorderIcon className="nolike" /></span>)}
                                    </button>
                                    : (<span style={{ fontSize: "30" }}><FavoriteBorderIcon className="nolike" /></span>)
                                }
                                <p className="price-dur like-text">{likes?.length} likes!</p>
                            </div>
                            <div className="price-duration-hash">
                                {data.hashtags.map((hash, index) =>
                                    <div className="price-dur-hash" css={{ color: "#E993A6" }} key={index}>{hash}</div>
                                )}
                            </div>
                        </div>
                    </Card.Body>
                    <Grid.Container gap={0} css={{ w: "100%" }}>
                        <Grid css={{ w: "100%" }}>
                            <Collapse.Group divider={false} css={{ w: "100%" }}>
                                <Collapse title="MORE INFO" shadow css={{ backgroundColor: "#8090909f", boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.505)", marginBottom: "0" }}>
                                    <div className="activities-container">
                                        <h3 className="funtitle">ACTIVITIES TO ENJOY</h3>

                                        <div className="card-container">
                                            {activities?.length > 0 ?
                                                activities.map((activity, index) =>
                                                    <Activity activity={activity} key={index} />) : <NotFoundActivities />}
                                        </div>

                                       <Comment itineraries={{data}} handleSetReload={{handleSetR}}/>
                                    </div>

                                </Collapse>
                            </Collapse.Group>
                        </Grid>
                    </Grid.Container>
                </div>
            </Card>
        </>
    )


}

export default Itinerary