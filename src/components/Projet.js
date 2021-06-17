import tweet_academie_1 from "../misc/tweet_academie/tweet_academie_1.png";
import tweet_academie_2 from "../misc/tweet_academie/tweet_academie_2.png";
import tweet_academie_3 from "../misc/tweet_academie/tweet_academie_3.png";
import tweet_academie_4 from "../misc/tweet_academie/tweet_academie_4.png";
import tweet_academie_5 from "../misc/tweet_academie/tweet_academie_5.png";
import tweet_academie_6 from "../misc/tweet_academie/tweet_academie_6.png";

import free_ads_1 from "../misc/free_ads/free_ads_1.png";
import free_ads_2 from "../misc/free_ads/free_ads_2.png";
import free_ads_3 from "../misc/free_ads/free_ads_3.png";
import free_ads_4 from "../misc/free_ads/free_ads_4.png";

import my_quiz_1 from "../misc/my_quiz/my_quiz_1.png";
import my_quiz_2 from "../misc/my_quiz/my_quiz_2.png";
import my_quiz_3 from "../misc/my_quiz/my_quiz_3.png";
import my_quiz_4 from "../misc/my_quiz/my_quiz_4.png";
import my_quiz_5 from "../misc/my_quiz/my_quiz_5.png";

import spotify_1 from "../misc/spotify/spotify_1.png";
import spotify_2 from "../misc/spotify/spotify_2.png";
import spotify_3 from "../misc/spotify/spotify_3.png";
import spotify_4 from "../misc/spotify/spotify_4.png";

const projet = (
  <div style={{ backgroundColor: "#3d3d3d" }}>
    <div className="container">
      <div className="container-fluid text-white-50" style={{ padding: 25 }}>
        <h1 class="display-3">Projets</h1>
        <hr
          style={{
            width: "7.5%",
            height: "1vh",
            opacity: "100%",
            backgroundColor: "#7dba5c",
          }}
        />
        <br></br>
        <div className="row">
          <div className="col" style={{ marginTop: "10px" }}>
            <div
              className="card-body bg-dark text-white-50"
              style={{ width: "18rem", borderRadius: 15 }}
            >
              <h3 className="card-title h3">
                <strong className="text-white-50">Tweet Académie</strong>
              </h3>
              <img src={tweet_academie_3} className="card-img-top" alt="..." />
              <div className="card-text">
                <br />
                <p className="card-text">
                  <strong className="text-white-50">Projet : </strong> création
                  d'un réseau social le plus ressemblant possible en terme de
                  fonctionnalités par rap- port au site “Twitter”.
                </p>
                <br></br>
                <div id="test">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#tweet_academie"
                  >
                    Aperçu
                  </button>
                  <div
                    className="modal fade"
                    id="tweet_academie"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    style={{ zIndex: 99999 }}
                  >
                    <div
                      className="modal-dialog"
                      style={{
                        maxWidth: "2000px",
                        height: "100vh",
                        margin: 0,
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        display: "flex",
                      }}
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h3
                            className="modal-title text-dark h2"
                            id="exampleModalLabel1"
                          >
                            <strong>Tweet Académie</strong>
                            <p className="text-dark h6">
                              Projet réalisé en groupe
                            </p>
                            <p className="text-dark h6">
                              <strong>Language : </strong>PHP, HTML & CSS, JS
                            </p>
                          </h3>
                          <br></br>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <div
                            id="carouselExampleControls"
                            className="carousel slide carousel-fade"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-inner">
                              <div
                                className="carousel-item active"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={tweet_academie_1}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={tweet_academie_2}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={tweet_academie_3}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={tweet_academie_4}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={tweet_academie_5}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={tweet_academie_6}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" style={{ marginTop: "10px" }}>
            <div
              className="card-body bg-dark text-white-50"
              style={{ width: "18rem", borderRadius: 15 }}
            >
              <h3 className="card-title h3">
                <strong className="text-white-50">Spotify</strong>
              </h3>
              <img src={spotify_1} className="card-img-top" alt="..." />
              <div className="card-text">
                <br />
                <p className="card-text">
                  <strong className="text-white-50">Projet : </strong> Création
                  d’une API et d'un lecteur multimédia online en utilisant <strong className="text-white-50">React</strong>.
                </p>
                <br />
                <div>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#spotify"
                  >
                    Aperçu
                  </button>
                  <div
                    className="modal fade"
                    id="spotify"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    style={{ zIndex: 99999 }}
                  >
                    <div
                      className="modal-dialog"
                      style={{
                        maxWidth: "2000px",
                        height: "100vh",
                        margin: 0,
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        display: "flex",
                      }}
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h3
                            className="modal-title text-dark h2"
                            id="exampleModalLabel"
                          >
                            <strong>Spotify</strong>
                            <p className="text-dark h6">
                              <strong>Language : </strong>PHP, HTML & CSS, JS
                            </p>
                            <p className="text-dark h6">
                              Projet réalisé en groupe
                            </p>
                            <p className="text-dark h6">
                              <strong>Outils : </strong>Javascript/React,
                              APIs, JSON
                            </p>
                          </h3>
                          <br></br>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <div
                            id="carouselExampleControls"
                            className="carousel slide carousel-fade"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-inner">
                              <div
                                className="carousel-item active"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={spotify_1}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={spotify_2}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={spotify_3}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={spotify_4}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" style={{ marginTop: "10px" }}>
            <div
              className="card-body bg-dark text-white-50"
              style={{ width: "18rem", borderRadius: 15 }}
            >
              <h3 className="card-title h3">
                <strong className="text-white-50">My_quizz</strong>
              </h3>
              <img src={my_quiz_5} className="card-img-top" alt="..." />
              <div className="card-text">
                <br />
                <p className="card-text">
                  <strong className="text-white-50">Projet : </strong> faire un
                  site de quizz en utilisant le Framework{" "}
                  <strong className="text-white-50">Symfony</strong>. Il faut
                  pouvoir choisir une catégorie pour accéder aux questions sous
                  forme d’une série de 10 ou 20 questions.
                </p>
                <br />
                <div>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#my_quiz"
                  >
                    Aperçu
                  </button>
                  <div
                    className="modal fade"
                    id="my_quiz"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    style={{ zIndex: 99999 }}
                  >
                    <div
                      className="modal-dialog"
                      style={{
                        maxWidth: "2000px",
                        height: "100vh",
                        margin: 0,
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        display: "flex",
                      }}
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h3
                            className="modal-title text-dark h2"
                            id="exampleModalLabel"
                          >
                            <strong>My_quizz</strong>
                            <p className="text-dark h6">
                              Projet réalisé en groupe
                            </p>
                            <p className="text-dark h6">
                              <strong>Language : </strong>PHP
                            </p>
                            <p className="text-dark h6">
                              <strong>Framework : </strong>Symfony
                            </p>
                          </h3>
                          <br></br>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <div
                            id="carouselExampleControls"
                            className="carousel slide carousel-fade"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-inner">
                              <div
                                className="carousel-item active"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={my_quiz_1}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={my_quiz_2}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={my_quiz_3}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={my_quiz_4}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={my_quiz_5}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" style={{ marginTop: "10px" }}>
            <div
              className="card-body bg-dark text-white-50"
              style={{ width: "18rem", borderRadius: 15 }}
            >
              <h3 className="card-title h3">
                <strong className="text-white-50">Free Ads</strong>
              </h3>
              <img src={free_ads_4} className="card-img-top" alt="..." />
              <div className="card-text">
                <br />
                <p className="card-text">
                  <strong className="text-white-50">Projet : </strong>{" "}
                  réalisation d'un site de petites annonces en utilisant le
                  Framework <strong className="text-white-50">Laravel</strong>.
                </p>
                <br />
                <div>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#free_ads"
                  >
                    Aperçu
                  </button>
                  <div
                    className="modal fade"
                    id="free_ads"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    style={{ zIndex: 99999 }}
                  >
                    <div
                      className="modal-dialog"
                      style={{
                        maxWidth: "2000px",
                        height: "100vh",
                        margin: 0,
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        display: "flex",
                      }}
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h3
                            className="modal-title text-dark h2"
                            id="exampleModalLabel"
                          >
                            <strong>Free Ads</strong>
                            <p className="text-dark h6">
                              Projet réalisé seul
                            </p>
                            <p className="text-dark h6">
                              <strong>Language : </strong>PHP
                            </p>
                            <p className="text-dark h6">
                              <strong>Framework : </strong>Laravel
                            </p>
                          </h3>
                          <br></br>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <div
                            id="carouselExampleControls"
                            className="carousel slide carousel-fade"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-inner">
                              <div
                                className="carousel-item active"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={free_ads_1}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={free_ads_2}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={free_ads_3}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2500"
                              >
                                <img
                                  src={free_ads_4}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default projet;
