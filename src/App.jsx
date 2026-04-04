import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Villas from "./components/Villa/Villas";
import SingleVilla from './components/Villa/SingleVilla';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import Notes from './components/Notes/Notes';
import LenisProvider from './components/LenisProvider';
import AppLayout from "./components/Layout/AppLayout";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AppLayout>
      <div key={location.pathname} className="animate-route-in">
        <Routes location={location}>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/termsandconditions' element={<TermsAndConditions/>}/>
          <Route path='/villas' element={<Villas/>}/>
          <Route path='/villa/:id' element={<SingleVilla/>}/>
          <Route path='/notes' element={<Notes/>}/>
        </Routes>
      </div>
    </AppLayout>
  );
};

const App = () => {
  return (
    <Router>
      <LenisProvider />
      <AppRoutes />
    </Router>
  );
};

export default App;
