import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: 'black'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const mapStyles = [
    {
        featureType: 'all',
        elementType: 'all',
        stylers: [
            {
                invert_lightness: true,
            },
            {
                saturation: 10,
            },
            {
                lightness: 30,
            },
            {
                gamma: 0.5,
            },
            {
                hue: '#435158',
            },
        ],
    },
    {
        featureType: 'all',
        elementType: 'labels',
        stylers: [
            { visibility: 'off' },
        ],
    },
    {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [
            { visibility: 'off' },
        ],
    },
    {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
            { visibility: 'on' },
        ],
    },
    {
        featureType: 'transit',
        elementType: 'labels',
        stylers: [
            { visibility: 'off' },
        ],
    },
];

const defaultMapOptions = {
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    zoomControl: false,
    draggable: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    styles: mapStyles,
    mapTypeId: 'terrain',
};

const markerStyles = {
    height: '50px',
    width: '50px',
    backgroundColor: 'white',
    borderRadius: '50%',
};

function GoogleMaps() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.setZoom(17);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
            onLoad={onLoad}
            onUnmount={onUnmount}
            streetView={false}
            options={ defaultMapOptions }
        >
            { /* Child components, such as markers, info windows, etc. */}
            <MarkerF position={center} options={{styles: markerStyles}} />
        </GoogleMap>
    ) : <></>
}

export default React.memo(GoogleMaps)