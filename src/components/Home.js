
import Header  from '../components/navbar';
import Buttons from "../components/buttons";
import git from "../images/git.png";
import slack from '../images/slack.png'
import React from "react";
import data from '../button_data';
import {Link} from "react-router-dom";


export default function Home() {
    const buttons = data.map(item =>{
        return (
            <Buttons
                // setup={item.setup} id={item.id} href={item.href}
                // item={item}
                {...item}
            />
        )
    })
    return (
        <div>
            <Header/>
            <div className= "b_con">
                {buttons}
            </div>
            <div className="social">
                <img src={slack} alt="logo" className="slack"/>
                <a href="https://github.com/Optimustprime/hng_first" title="this is a subtext area">
                    <img src={git} alt="logo" className="git"/>
                </a>
            </div>
        </div>
    );
}