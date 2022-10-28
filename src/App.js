
import Header  from './navbar';
import git from "./images/git.png";
import slack from './images/slack.png'
import zuri from './images/Zuri.Internship_Logo.png'
import i4g from './images/I4G.png'

function Body(props){
    return(
        <div>
            <a href={props.href}>
                <button id = {props.id}>{props.setup}</button>
            </a>
        </div>
    )
}


function Footer(props){
    return(
        <div>
            <div className="social">
                <img src={slack} alt="logo" className="slack"/>
                <img src={git} alt="logo" className="git"/>
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
            <Body setup = "Twitter Link" id = "btn_twitter" />
            <Body setup = "Zuri Team" id = "btn_zuri" href="https://training.zuri.team" />
            <Body setup = "Zuri Books" id = "books" href="https://books.zuri.team"/>
            <Body setup = "Python Books" id = "book_python" href="https://books.zuri.team" />
            <Body setup = "Background Check for Coders" id = "pitch" href = "https://background.zuri.team" />
            <Body setup = "Design Books" id = "book_design" href="https://books.zuri.team/design-rules" />
        </div>
        <Footer/>
    </div>
  );
}


export default App;



