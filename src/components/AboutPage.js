import React from 'react'
import { Spinner } from 'reactstrap';

function StoreHours({ hours, isHoursLoading }) {
    
    // console.log(hours)

    if (isHoursLoading) {
        return (
            <div className="col-md-6">
            <Spinner>Loading...</Spinner>
        </div>
        )
    }

    return (
        <div className="col-md-6">
            <h3>Hours</h3>
                {
            hours.map(hour => (
                <div key={hour.id}>
                <h6 >{hour.day}</h6>
                <p>{hour.open} to {hour.close}</p>
                </div>
            ))
        }
        </div>
    )
}


export default function AboutPage({ hours, isLoading }) {
    
    return (
        
        <div className="container mt-4">
 
            <div className="row">
                <div className="col-md-6 ">
                    <h3>Location</h3>
                    123 Main St.<br />
                    City, State 12345<br />
                    <iframe className="mt-4"
                    title="maps"
                    width="300"
                    height="225"
                    loading="lazy"
                    allowfullscreen
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAbApl9_1G_sR0uJMP6_C2fVP9-TX9y_g4&q=Eiffel+Tower,Paris+France">
                </iframe>
                </div>                    
                <StoreHours hours={hours} isLoading={isLoading}/>
            </div>

        </div>
    )
}

