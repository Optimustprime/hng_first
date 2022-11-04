import React from "react"
import zuri from "../images/Zuri.Internship_Logo.png";
import i4g from "../images/I4G.png";

export default function Footer(props){
    return(
        <div>
            <div className="line">
                <hr/>
            </div>
            <div className="last row">

                <div className="col-lg-4 col-md-12">
                    <img src={zuri} alt="logo" className="zuri "/>
                </div>
                <div className="note col-lg-4 col-md-12">HNG Internship 9 Frontend Task</div>
                <div className="col-lg-4 col-md-12">
                    <img src={i4g} alt="logo" className="ig "/>
                </div>
            </div>
        </div>
    )
}
