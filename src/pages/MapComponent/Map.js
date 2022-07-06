import React from "react";

import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api"

import mapStyles from "./mapStyles"
import './mapStyles.css'

const libraries = ["places"];

const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
};

const center = {
    lat: 48.137154,
    lng: 11.576124,
}

const options = {
    //styles: mapStyles,
    mapTypeControl: false,

}

export default function Map() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyDypd_0eIFq8ausw82sCNLhahkAtJwDQO4",
        libraries: libraries,
    });

    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    const onMapClick = React.useCallback((event) => {
        setMarkers(current => [...current, {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date(),
        }])
    })

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    
    return(
    <div>
        {/* <h1 className="mapHeader">Places Of Intrest <span role="img" aria-label="map">🗺</span></h1> */}
        <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom ={10} 
        center={center}
        options={options}
        onClick = {onMapClick}
        >
             {markers.map(marker => (
             <Marker 
             key={marker.time.toISOString()} 
             position={{lat: marker.lat, lng: marker.lng}}
             onClick={() => setSelected(marker)}
             />
             ))}
        </GoogleMap>
    </div>)
}