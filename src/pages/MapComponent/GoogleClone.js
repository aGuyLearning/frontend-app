import React, { useState } from "react";
import Map from "./Map";
import Header from "./Header";
import { Flex } from "@chakra-ui/react";

export default function Home () {
    const [coordinates, setCoordinates] = useState([]);
    const [typeOfPlaces, setTypeOfPlaces] = useState("hotels");
    const [ratings, setRatings] = useState("")

    return (
        <Flex>
            <Header 
            setTypeOfPlaces = {setTypeOfPlaces}
            setRatings = {setRatings}
            setCoordinates = {setCoordinates}
            />
            <Map />
        </Flex>
        
    )
}