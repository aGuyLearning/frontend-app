import React from "react";
import {
    GoogleMap, 
    useLoadScript,
    Marker,
    InfoWindow
} from "@react-google-maps/api"

import mapStyles from "../mapStyles";

function Map(){
    const libraries= ["places"];

    const mapContainerStyle = {
        width: "100vw",
        height: "100vh",
    }

    const center = {
        lat: 48.137154,
        lng: 11.576124,

    }

    const options = {
        styles: mapStyles,
        //disableDefaultUI: true,
        //zoomControl: true,
    }

    // load google maps on page
    const {isLoaded, loadError} = useLoadScript({
            googleMapsApiKey : "AIzaSyBJ_6xjpxnQTmxXJdVEatNOVL0TsrE94C0",
            libraries
        });
    if (loadError){
        return "Error Loading Maps";
    }
    if (!isLoaded){
        return "Loading Maps"
    }


    return <div>
        <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={8} 
        center={center} 
        options={options}
        ></GoogleMap>
    </div>;
}

export default function Poi(){
    return <Map />;
}