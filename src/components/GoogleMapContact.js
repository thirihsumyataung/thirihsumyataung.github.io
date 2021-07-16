import React, { useState} from 'react'; 
import { Map, Marker } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '100%',
  };
export const MapContainer = () => { 
     const [ lat, setLat] = useState(); 
     const [long, setLong] = useState(); 
}
const GoogleMapContact = () => {
   ;

    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
    );
}
export const  GoogleApiWrapper = () =>  ({
  apiKey: 'AIzaSyDYSkX3ThpACcyHb_0yhxoEA46ti2dcrR4'
})(MapContainer);
export default GoogleMapContact


