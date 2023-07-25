import { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react'

class MapContainer extends Component {
    render() {
        return(
            <Map
                google= {this.props.google}
                style = {{width: "50%", height: "50%"}}
                zoom = {10}
                initialCenter={
                    {
                        lat: 1.3521,
                        lng: 103.8198
                    }
                }
            />
        )
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
})(MapContainer)
