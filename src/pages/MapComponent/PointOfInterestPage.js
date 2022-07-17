import React, {useEffect, useState} from "react";
import Map from "./Map";
import Header from "./Header";
import {Flex} from "@chakra-ui/react";
import {LoadScript} from "@react-google-maps/api"


export default function Home({center}) {
    const [coordinates, setCoordinates] = useState([]);
    const [typeOfPlaces, setTypeOfPlaces] = useState("lodging");

    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [bounds, setBounds] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Flex>
            <Header setTypeOfPlaces={setTypeOfPlaces}
                setCoordinates={setCoordinates}/>
            <LoadScript googleMapsApiKey={"AIzaSyDypd_0eIFq8ausw82sCNLhahkAtJwDQO4"}
                libraries={
                    ['places']
            }>
                <Map selectedType={typeOfPlaces}/>
            </LoadScript>
        </Flex>

    )
}
