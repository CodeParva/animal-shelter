import React from "react";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { MainBody } from "./Components/MainBody/MainBody";


function App() {
  return (
        <div className="main-body">
           <Header/>
           <MainBody/>
           <Footer/>
        </div>
  
  );
}

export default App;
