const experience = (
  <div style={{ backgroundColor: "#3d3d3d" }}>
    <div className="container">
      <div
        className="container-fluid text-white-50"
        style={{ borderRadius: 25, padding: 25, paddingBottom: 40 }}
      >
        <h1 class="display-3">Experience</h1>
        <hr
          style={{
            width: "7.5%",
            height: "1vh",
            opacity: "100%",
            backgroundColor: "#7dba5c",
          }}
        />
        <br></br>
        <div className="timeline">
          <div className="container-experience left">
            <div className="content-experience bg-dark">
              <h2 className="h2">2019-2020</h2>
              <h6 className="h6">CONSEILLER/VENDEUR EN MAGASIN</h6>
              <h6 className="h6">
                Toys"R"Us - Vélizy 2<br></br>Dandy Parisien - Paris
              </h6>
              <p>
                - Accueillir, conseiller et répondre aux attentes des clients
              </p>
            </div>
          </div>
          <div className="container-experience right">
            <div className="content-experience bg-dark">
              <h2 className="h2">2017-2018</h2>
              <h6 className="h6">PRÉPARATEUR DE COMMANDE</h6>
              <h6 className="h6">Edenred France - Malakoff</h6>
              <p>- Vérification et validation des courriers sécurisés</p>
              <p>- Transfert en chambre forte</p>
            </div>
          </div>
          <div className="container-experience left">
            <div className="content-experience bg-dark">
              <h2 className="h2">2007-2016</h2>
              <h6 className="h6">CHEF DE RANG EN BRASSERIE DE LUXE - PARIS</h6>
              <p>- Accueillir, conseiller les clients</p>
              <p>- Gestion d'une caisse</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default experience;
