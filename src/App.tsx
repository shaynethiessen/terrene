import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from '@monsonjeremy/react-leaflet'
import {MainMenu} from "./MainMenu";

function App() {
    return (
        <div style={{height: 'calc(100% - 40px)'}}>
            <MainMenu />
            <MapContainer center={{lat: 51, lng: 10}} zoom={13} style={{height: '100%'}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={{lat: 51, lng: 10}}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
  );
}

export default App;
