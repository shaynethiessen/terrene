import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from '@monsonjeremy/react-leaflet'
import {Marker as LMarker, icon as LIcon} from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

let DefaultIcon = LIcon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

LMarker.prototype.options.icon = DefaultIcon;

function App() {
    return (
      <div style={{height: '100vh'}}>
          <MapContainer center={{lat: 51, lng: 10}} zoom={13} style={{height: '100vh'}}>
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
