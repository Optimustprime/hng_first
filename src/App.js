
import Header  from './components/navbar';
import Footer from './components/footer';
import Buttons from "./components/buttons";
import git from "./images/git.png";
import slack from './images/slack.png'
import React, {Suspense} from "react";
import data from './button_data';





function App() {
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
        <Footer/>
    </div>
  );
}


export default App;



