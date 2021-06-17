import emailjs from "emailjs-com";
import cv from "../misc/cv/CV Aurélien Jussaume.pdf";

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_fo5am4x', 'template_nqipkx2', e.target, 'user_0QJT7Gg3f255fpC9AtBHg')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    alert("Message envoyé !");
    e.target.reset();
}

const contact = (
  <div>
    <div className="container">
      <div
        className="container-fluid text-white-50"
        style={{ borderRadius: 25, paddingTop: 25, paddingBottom: 100 }}
      >
        <h1 class="display-3">Contact</h1>
        <hr
          style={{
            width: "7.5%",
            height: "1vh",
            opacity: "100%",
            backgroundColor: "#7dba5c",
          }}
        />
        <br />
        <div className="row">
          <div className="col">
            <p style={{ fontSize: "20px" }}>
              <i
                class="fas fa-user-tie"
                style={{ fontSize: "25px", color: "#7dba5c" }}
              ></i>{" "}
              Aurélien Jussaume
            </p>
            <hr
              style={{ maxWidth: "350px", minWidth: "200px", height: "0.5px" }}
            />
            <p style={{ fontSize: "20px" }}>
              <i
                class="fas fa-envelope"
                style={{ fontSize: "25px", color: "#7dba5c" }}
              ></i>{" "}
              aurelien.jussaume@gmail.com
            </p>
            <hr
              style={{ maxWidth: "350px", minWidth: "200px", height: "0.5px" }}
            />
            <p style={{ fontSize: "20px" }}>
            <i class="fab fa-linkedin"
                style={{ fontSize: "25px", color: "#7dba5c" }}
              ></i>{" "}
              <a href="https://www.linkedin.com/in/aurelien-jussaume" target="_blank" className="text-white-50">aurelien-jussaume</a>
            </p>
            <hr
              style={{ maxWidth: "350px", minWidth: "200px", height: "0.5px" }}
            />
            <p style={{ fontSize: "20px" }}>
              <i
                class="fas fa-phone-volume"
                style={{ fontSize: "25px", color: "#7dba5c" }}
              ></i>{" "}
              06 67 68 53 75
            </p>
            <hr
              style={{ maxWidth: "350px", minWidth: "200px", height: "0.5px" }}
            />
            <p style={{ fontSize: "20px" }}>
              <i
                class="fas fa-map-marker-alt"
                style={{ fontSize: "25px", color: "#7dba5c" }}
              ></i>{" "}
              12 rue Lazare Carnot 92140 Clamart
            </p>
            <br></br>
            <br></br>
            <a class="btn btn-secondary" href={cv} download="">
              Télécharger mon CV
            </a>
          </div>
          <div className="col">
            <h6 className="h4">Si vous souhaitez me contacter, merci de remplir le formulaire ci-dessous :</h6>
            <br></br>
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <input type="hidden" name="contact_number"></input>
                <label>Nom</label>
                <input
                  type="text"
                  name="user_name"
                  class="form-control"
                  id="name"
                  placeholder="Nom"
                  required
                ></input>
                <br></br>
                <label>Adresse mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="user_email"
                  placeholder="nom@exemple.com"
                  required
                />
              </div>
              <br></br>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={5}
                  defaultValue={""}
                  required
                />
              </div>
              <br></br>
              <button type="submit" class="btn btn-secondary">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default contact;
