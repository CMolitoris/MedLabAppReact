import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper, Listing } from 'google-maps-react';
import Geocode from "react-geocode";


class GoogleMaps extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lat: '',
            lng: '',
            nearHosp: [],
            showingInfoWindow: true,  
            activeMarker: {},          
            selectedPlace: {}
         }
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
        }
    };

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
            if(status == google.maps.places.PlacesServiceStatus.OK){
                console.log(results);
                this.updateNearHospitals(results)
            }
        })
        
    }

    fetchLngLat = async (hospitalAddress) => {
        Geocode.setApiKey(`AIzaSyCku9xApttpFw0Hkugb93TcnWJJSEvKKJE`);
        Geocode.setRegion('en')
        let response = await Geocode.fromAddress(hospitalAddress)  
        console.log(response)     
        return {lat: response.results[0].geometry.location.lat, lng: response.results[0].geometry.location.lng, name: response.name}  
        
    }

    updateNearHospitals = (hospitals) => {
        let coords = []
        for(let i=0;i<hospitals.length;i++){
            coords.push(this.fetchLngLat(hospitals[i].vicinity))
        }  
        Promise.all(coords)
            .then((result) => {
                this.setState({
                    nearHosp: result
                })
            })     
    }

    render() { 
        
        console.log(this.state)
        return ( 
            <Map onZoomChanged={this.fetchPlaces} onReady={this.fetchPlaces} center={{lat: this.state.lat, lng: this.state.lng}} containerStyle={this.containerStyle} google={this.props.google} zoom={14}>
                <Marker onClick={this.onMarkerClick} position={{lat: this.state.lat, lng: this.state.lng}} name={'Current location'}/>
                <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onClose}>
                    <div>
                        <h3>{this.props.streetaddress}</h3>
                    </div>
                </InfoWindow>
                {this.state.nearHosp.map((element) => {
                    return <Marker position={{lat: element.lat,lng: element.lng}}/>
                })}
                
            </Map>
         );
    }
}
 
export default GoogleApiWrapper({
    apiKey: `AIzaSyBFvQ5F6XsuNlYYwK8nO46hl3-BKtEGwHU`
})(GoogleMaps)