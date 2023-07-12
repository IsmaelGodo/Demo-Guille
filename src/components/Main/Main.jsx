import React from "react";
import { Route, Routes } from "react-router-dom";
import DestinationList from './DestinationList';
import FetchApi from './FechApi';
import Contact from './Contact';


const Main = () => {
  return <main>
    <Routes>
      <Route path="/" element={<DestinationList/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/fetch" element={<FetchApi/>}/>

    </Routes>
    
    


  </main>;
};

export default Main;
