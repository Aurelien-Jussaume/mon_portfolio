import image from "../misc/coding.png";
import Typed from "react-typed";

const accueil = (
  <div className="background-image">
    <div className="background-text">

    <Typed
      className="typed-text display-2"
      strings={[ "Portfolio", "Aurélien Jussaume", "Développeur Web" ]}
      typeSpeed={60}
      backSpeed={60}
      loop
    />
    </div>
  </div>
);

export default accueil;
