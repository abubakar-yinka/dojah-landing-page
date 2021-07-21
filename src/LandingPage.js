import { Component } from "react";
import Nav from "./components/Nav"
import Header from "./components/Header"
import ServicesContainer from "./components/ServicesContainer"
// import Pricing from "./components/Pricing"
// import Documentation from "./components/Documentation";
// import Blog from "./components/Blog";
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"

import './app.css'

export default class LandingPage extends Component {
  render() {
    return (
        <div className="landing-page">
          <Nav />
          <Header />
          <ServicesContainer />
          {/* 
          <Pricing />
          <Documentation />
          <Blog />
          <Contact />
          <Footer /> */}
        </div>
    );
  }
}

