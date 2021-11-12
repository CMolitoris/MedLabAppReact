import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper, Listing } from 'google-maps-react';
import Geocode from "react-geocode";


class GoogleMaps extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lat: '',
            lng: '',
            nearHosp: []
         }
    }

    componentDidMount = () => {
        this.getLatLng()
        
    }

    containerStyle = {
        position: 'relative',
        width: '100%',
        height: '14rem'
    }

    getLatLng = async () => {
        console.log(this.props.streetaddress)
        Geocode.setApiKey(`AIzaSyCku9xApttpFw0Hkugb93TcnWJJSEvKKJE`);
        Geocode.setRegion('en')
        let response = await Geocode.fromAddress(this.props.streetaddress)
        this.setState({
            lat: response.results[0].geometry.location.lat,
            lng: response.results[0].geometry.location.lng
        })
        // .then(
        //     (response) => {
        //         console.log(response)
        //         const { lat, lng } = response.results[0].geometry.location;
        //         console.log(lat, lng);
        //         this.setState({ 
        //           lat: lat, 
        //           lng: lng 
        //         })
        //     },
        //     (error) => {
        //       console.error(error);
        //     }
        //   );
    }

    fetchPlaces = (mapProps, map) => {
        const {google} = mapProps;
        const bounds = map.getBounds();
        const service = new google.maps.places.PlacesService(map);
        const request = {
            bounds: bounds,
            type: ['hospital']
        };
        
        service.nearbySearch(request, (results, status) => {
            
            console.log(results);
            this.updateNearHospitals(results)
            
        })
        
    }

    updateNearHospitals = (hospitals) => {
        this.setState({
            nearHosp: hospitals
        })
    }

    render() { 
        
        console.log(this.state)
        return ( 
            <Map onDragend={this.fetchPlaces} onReady={this.fetchPlaces} center={{lat: this.state.lat, lng: this.state.lng}} containerStyle={this.containerStyle} google={this.props.google} zoom={10}>
                <Marker position={{lat: this.state.lat, lng: this.state.lng}} onClick={this.onMarkerClick} name={'Current location'}/>
                
                
                
            </Map>
         );
    }
}
 
export default GoogleApiWrapper({
    apiKey: `AIzaSyBFvQ5F6XsuNlYYwK8nO46hl3-BKtEGwHU`
})(GoogleMaps)