
import Header  from './navbar';
import git from "./images/git.png";
import slack from './images/slack.png'
import zuri from './images/Zuri.Internship_Logo.png'
import i4g from './images/I4G.png'
import {Suspense} from "react";

function Body(props){
    return(
            <a href={props.href} title={props.subtext}>
                <button id = {props.id}>{props.setup}</button>
            </a>
    )
}


function Footer(props){
    return(
        <div>
            <div className="social">
                <img src={slack} alt="logo" className="slack"/>
                <a href="https://github.com/Optimustprime/hng_first" title="this is a subtext area">
                    <img src={git} alt="logo" className="git"/>
                </a>
            </div>
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

function App() {
  return (
    <div>
        <Header/>
        <div className= "b_con">
            <Body setup = "Twitter Link" id = "btn__twitter" href = "https://twitter.com/theoptimust?t=sKF8uJ66gmZXx4mujy8pug&s=09"  />
            <Body setup = "Zuri Team" id = "btn__zuri" href="https://training.zuri.team" />
            <Body setup = "Zuri Books" id = "books" href="https://books.zuri.team" subtext="i find books about design and coding"/>
            <Body setup = "Python Books" id = "book__python" href="https://books.zuri.team/python-for-beginners?ref_id=<TheOptimust>" subtext=" i feature book as if i were selling it" />
            <Body setup = "Background Check for Coders" id = "pitch" href = "https://background.zuri.team" subtext="i pitch a service for doing background checks on coders" />
            <Body setup = "Design Books" id = "book__design" href="https://books.zuri.team/design-rules" subtext="I pitch the free design book offered by zuri" />
        </div>
        <Footer/>
    </div>
  );
}


export default App;



