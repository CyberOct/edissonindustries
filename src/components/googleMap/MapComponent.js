import React from 'react'
import {MapContainer} from './MapComponentStytle'

const MapComponent = () => {
    const mapStyle = {
        width:"100%",
        height:"100%",
        border:"0"
}
    return (
        <MapContainer>
            <iframe title="embeded Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10898.798861604584!2d26.357325026343172!3d46.928285320333046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473555c58bda5d45%3A0x67d35d4e583544c3!2sStrada%20Bistri%C8%9Bei%204%2C%20Piatra%20Neam%C8%9B!5e0!3m2!1sro!2sro!4v1603400486919!5m2!1sro!2sro" style={mapStyle} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </MapContainer>
    )
}

export default MapComponent
