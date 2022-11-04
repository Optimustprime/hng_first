import React from 'react'

export default function Buttons(props){
    return(
        <a href={props.href} title={props.subtext}>
            <button id = {props.id}>{props.setup}</button>
        </a>
    )
}