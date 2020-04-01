import React from 'react';
import contactImage from "../../../static/assets/images/auth/login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function(){
    return(
        <div className="content-page-wrapper">
            <div className="left-column"
                style={{
                    background: "url("+ contactImage + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}  
            />
                
            

            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                        </div>

                        <div className="text">
                            (406) 861-3712
                        </div>

                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>

                        <div className="text">
                            twolff@dawson.edu
                        </div>

                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marker-alt" />
                        </div>

                        <div className="text">
                            Billings, MT
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}