import image from "./misc/coding.png";
import photo from "./misc/photo.png";
import "./App.css";
import Typed from "react-typed";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import React, { Component } from "react";
import Accueil from "./components/Accueil";
import Profil from "./components/Profil";
import Skills from "./components/Skills";
import Projet from "./components/Projet";
import Formation from "./components/Formation";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section subtitle={Accueil} dark={false} id="accueil" />
        <Section subtitle={Profil} dark={false} id="profil" />
        <Section subtitle={Formation} dark={true} id="formation" />
        <Section subtitle={Skills} dark={false} id="skills" />
        <Section subtitle={Projet} dark={true} id="projet" />
        <Section subtitle={Experience} dark={false} id="experience" />
        <Section subtitle={Contact} dark={true} id="contact" />
      </div>
    );
  }
}
