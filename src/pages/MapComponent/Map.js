import React from "react";


import {
    GoogleMap,
    Marker,
    InfoWindow,
} from "@react-google-maps/api"

const google = window.google;
const libraries = ["places"];

const mapContainerStyle = {
    width: '100vw',
    height: '100vh'
};

const center = {
    lat: 48.137154,
    lng: 11.576124
}

const options = { // styles: mapStyles,
    mapTypeControl: false,
    fullscreenControl: false

}

export default function Map({selectedType}) {
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    const onMapClick = React.useCallback((event) => {
        setMarkers(current => [
            ...current, {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date()
            }
        ])
    })

    const onMapLoad = React.useCallback((map) => {
        let request = {
            location: new google.maps.LatLng(center),
            radius: '50',
            type: [selectedType]


        }
        let service = new window.google.maps.places.PlacesService(map);

        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    console.log(results[i]);
                }

                //this.setState({center: results[0].geometry.location, coordsResult: coords});
            }
        });

    });
    

    const renderMap = () => { 
        return(
        <GoogleMap mapContainerStyle={mapContainerStyle}
            zoom
            ={10}
            center={center}
            options={options}
            onClick={onMapClick}
            onMapLoad={onMapLoad}
            >
            {
            markers.map(marker => (
                <Marker key={
                        marker.time.toISOString()
                    }
                    position={
                        {
                            lat: marker.lat,
                            lng: marker.lng
                        }
                    }
                    onClick={
                        () => setSelected(marker)
                    }/>
            ))
        } </GoogleMap>)
    }

    return renderMap();
}
