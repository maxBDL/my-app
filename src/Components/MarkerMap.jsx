import React, {useState, Vibration} from "react";
import {Marker, Popup, useMapEvents} from "react-leaflet";

const MarkerMap = () => {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        /*click() {
            map.locate()
        },*/
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
            map.locate();
        },
    })

    map.locate();
    /*Vibration.vibrate(400, false);*/

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

export default MarkerMap