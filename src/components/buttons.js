import React from 'react'
import {Link} from "react-router-dom";

export default function Buttons(props){
    return(
        <a title={props.subtext}>
            <Link to = {props.href}>
                <button id = {props.id}>{props.setup}</button>
            </Link>
        </a>
    )
}