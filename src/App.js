import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/footer"
import React from "react";

function App() {
  return (
       <Router>
               <Routes>
                   <Route path ="/" element={<Home/>}/>
                   <Route path ="/contactus" element={<Contact/>} />
               </Routes>
           <Footer/>
       </Router>
  );
}


export default App;



