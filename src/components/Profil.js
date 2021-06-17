const profil = (
  <div style={{ backgroundColor: "#3d3d3d" }}>
    <div className="container">
      <div className="container-fluid text-white-50" style={{ padding: 25, paddingBottom: 40 }}>
        <h1 class="display-3">Qui suis-je ?</h1>
        <hr
          style={{
            width: "7.5%",
            height: "1vh",
            opacity: "100%",
            backgroundColor: "#7dba5c",
          }}
        />
        <div className="bg-dark" style={{ padding : 15, borderRadius: "25px" }}>
          <div className="row">
            <div className="col" style={{ marginTop: "20px" }}>
              <h1 className="h1">Profil</h1>
              <hr
                style={{ maxWidth: "400px", minWidth: "200px", height: "0.5px" }}
              />
              Nom : Aurélien Jussaume
              <hr
                style={{ maxWidth: "400px", minWidth: "200px", height: "0.5px" }}
              />
              Age : 33 ans
              <hr
                style={{ maxWidth: "400px", minWidth: "200px", height: "0.5px" }}
              />
              Développeur Web en formation à la Web@cadémie <br></br> depuis Novembre 2020
            </div>
            <div className="col" style={{ marginTop: "20px" }}>
              <h1 className="h1">Aptitudes</h1>
              <hr
                style={{ maxWidth: "400px", minWidth: "200px", height: "0.5px" }}
              />
              Rigueur, méthode, autonomie
              <hr
                style={{ maxWidth: "400px", minWidth: "200px", height: "0.5px" }}
              />
              Responsabilité, adaptabilité
              <hr
                style={{ maxWidth: "400px", minWidth: "200px", height: "0.5px" }}
              />
              Curiosité, créativité
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col" style={{ marginTop: "20px" }}>
              <h1 className="h1">Langues</h1>
              <hr
                style={{ maxWidth: "400px", minWidth: "200px", height: "0.5px" }}
              />
              Anglais : niveau intermédiaire
            </div>
            <div className="col" style={{ marginTop: "20px" }}>
              <h1 className="h1">Centres d'interêt</h1>
              <hr
                style={{ maxWidth: "400px", minWidth: "200px", height: "0.5px" }}
              />
              Création musicale, musique, sport, cinéma, jeux vidéos
            </div>
          </div>
          </div>
      </div>
    </div>
  </div>
);

export default profil;
