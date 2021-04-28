import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import '../Styles/AddressMap.css'

mapboxgl.accessToken = 'pk.eyJ1IjoibWluaGtodWUxODEwMDEiLCJhIjoiY2tvMHg4ajZzMDMxMDJvbHlvaHZrdzM1ZyJ9.GpJbEKOTIHBrmMKx5UGVFA';

function AddressMap(props) {
    const mapContainerRef = useRef(null);

    // Initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [props.longtitude, props.latitude],
            zoom: props.zoom,
            interactive: !props.addressDetailActive
        });

        // Add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        new mapboxgl.Marker()
            .setLngLat([props.longtitude, props.latitude])
            .setPopup(
                new mapboxgl.Popup({ offset: 25 })
                    .setHTML(`<p>${props.address}</p>`)
            )
            .addTo(map)

        // Clean up on unmount
        return () => map.remove();
    }, []);

    //Hadle user click to the button Address
    const handleClick = () => {
        return props.turnOnAddressDetail();
    }

    return (
        <div className="pt-5">
            <div className="text-center">
                <p className="note m-0">Click the button below to view full address detail</p>
                <button className="Map-title col-3 mt-3 mb-4"
                    onClick={handleClick}>
                    <p className="m-0">Address</p>
                </button>
            </div>

            <div className="Map-wrapper">
                <div className='map-container' ref={mapContainerRef} />
            </div>
        </div>
    );
};

export default AddressMap;