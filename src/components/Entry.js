import React from "react";
import {MapPin} from "phosphor-react"


export default function Entry(props)
{
    function viewOnMaps(){
        window.open(props.item.googleMapsUrl);
    }
    function three()
    {
        //test
        return(
            <div className="location-line">

            <MapPin size={15} color="#F55A5A" fill="#F55A5A" className="pin" />

            <p className="location">{props.item.location}</p>

            <p className="map-link"  onClick={viewOnMaps}>View on Google Maps</p>
            </div>
        )
    }
    return(
        <div>
        <div className="entry">
            <img className ="entry-image" src={props.item.imageUrl}/>
         <div className="info">
            {three()}
            <h1 className="title">{props.item.title}</h1>
            
            <h4>{props.item.startDate}-{props.item.endDate}</h4>
            <h3 className="desc">{props.item.description}</h3>
            

           
            </div>
           

        </div>
         <hr/>
         </div>

    )
}