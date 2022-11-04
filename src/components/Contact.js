import Footer from '../components/footer';
// import Buttons from "../components/buttons";
// import git from "./images/git.png";
// import slack from './images/slack.png'
import React from "react";
import data from '../button_data';



export default function Contact() {

    return (
        <div className="contact_con">
            <div className="me">Contact Me</div>
            <div className="hi">Hi there, contact me to ask me about anything you have in mind.</div>
            <form>
                <div className="row">
                    <div className="col-lg-6">
                        <label>First name</label><br/>
                        <input id="first_name" className="name" placeholder="Enter your first name" type="text"/>
                    </div>
                    <div className="col-lg-6">
                        <label>Last name</label><br/>
                        <input id="last_name" className="name" placeholder="Enter your last name" type="text"/>
                    </div>
                </div>
                <label>Email</label><br/>
                <input id="email" className="email_name"placeholder="yourname@email.com" type="email"/><br/>
                <label>Message</label><br/>
                <textarea id="message" placeholder="Send me a message and I'll reply you as soon as possible..." type="email"/>
                <label className="container" id="cap">You agree to providing your data to &#123;name} who may contact you.
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <button id="btn__submit" type="submit">Send message</button>
            </form>
        </div>
    );
}