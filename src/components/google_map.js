import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoon: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;

// import React from 'react';
// import { GoogleMapLoader, GoogleMap } from 'react-google-maps';
//
// export default (props) => {
//   return (
//     <GoogleMapLoader
//       containerElement={ <div style={{height: '100'}} /> }
//       googleMapElement={
//         <GoogleMap defaultZoon={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
//       }
//     />
//   );
// }
