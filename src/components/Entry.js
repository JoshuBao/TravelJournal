import React from "react";
export default function Entry(props)
{
    function viewOnMaps(){
        window.open(props.item.googleMapsUrl);
    }
    return(
        <div>
            <p>{props.item.location}</p>
            <p className="map-link"  onClick={viewOnMaps}>View on Google Maps</p>
            <h3>{props.item.title}</h3>


        </div>

    )

}