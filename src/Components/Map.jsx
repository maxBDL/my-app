import React, {useContext, useState} from 'react';
import 'leaflet/dist/leaflet.css';
import './Map.css'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import {marker} from "leaflet/dist/leaflet-src.esm";
import L from "leaflet";
import MarkerMap from './MarkerMap'

L.Icon.Default.imagePath = 'images/'

const AddMarker = () => {
    const [position, setPosition] = useState(null);

    useMapEvents({
        click: (e) => {
            setPosition(e.latlng);
        },
    });

    return position === null ? null : (
        <Marker position={position}></Marker>
    );
};

const Map = () => {
    return<div id='map'>
        <MapContainer center={[48.8534 ,  2.3488]} zoom={7} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerMap/>
            <AddMarker/>
        </MapContainer>
    </div>;
}

export default Map