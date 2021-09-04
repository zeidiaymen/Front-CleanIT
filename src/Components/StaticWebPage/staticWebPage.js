import "./StaticWebPage.css";
import Main from "../chatBotOptimezed/ChatBotMain";
import React, { useState, Fragment, useEffect } from "react";
import { motion } from "framer-motion";
import ChatBot from "react-chatbot-kit";
import { Lines } from "react-preloaders";
import img from "../utils/1.gif";
import "../chatBotOptimezed/mainChatBot.css";
import { useHistory } from "react-router-dom";
import { isBrowser } from "react-device-detect";

import {
  Nav,
  NavContainer,
  NavLogo,
  NavItem,
  GridBt,
  NavLinks,
  NavMenu,
  MobileIcon,
  Heros,
  ImgCaroussel,
  Services,
  About,
  Team,
  Grid,
} from "./StaticWebPageStyles";
import "../../App.css";
import US from "./about";
import OUR from "./Ourteam";
const Navbar = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  const History = useHistory();
  const rec = async () => {
    recognition.start();
    console.log("Activated");
    recognition.onresult = (e) => {
      let resultIndex = e.resultIndex;
      const transcript = e.results[resultIndex][0].transcript;
      console.log(transcript);
      const speech = new SpeechSynthesisUtterance();
      if (transcript.includes("sign in")) {
        speech.text = "redirected to Sign in";
        window.speechSynthesis.speak(speech);
        History.push("/Signin");
      }
      if (transcript.includes("team")) {
        speech.text =
          "the team is composid of 4 devellopers : Aymen  and arij full stack web developpers , samar and khalil two mobile developper";
        window.speechSynthesis.speak(speech);
      }
      if (transcript.includes("sign up")) {
        speech.text = "redirected to Sign up";
        window.speechSynthesis.speak(speech);
        History.push("/Register");
      }
      if (transcript.includes("face")) {
        const IA = true;
        localStorage.setItem("IA", IA);
        console.log("done");
      }
      if (transcript.includes("phone number")) {
        speech.text = "54617693";
        window.speechSynthesis.speak(speech);
      }
    };
  };

  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const [bool, setBool] = useState(true);
  useEffect(async () => {
    const speech = new SpeechSynthesisUtterance();
    speech.text =
      "welcome to cleanit . if you need some help. please use the mic located in the corner,enjoy";

    await setTimeout(async () => {
      window.speechSynthesis.speak(speech);
      setBool(false);
      console.log(bool);
    }, 3000);
    window.onscroll = () => {
      if (window.scrollY > 440.79998779296875) {
        setScrollChange(true);
      }
      if (window.scrollY > 800.500048828125) setScrollChangeForTeam(true);
      if (window.scrollY > 1200.500048828125) setScrollChangeForProduct(true);
      if (window.scrollY > 1610.500048828125) setScrollFooter(true);
    };
  }, []);
  const [mob, setMob] = useState(false);
  const FooterAnim = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
  };
  const [scrollChangeForTeam, setScrollChangeForTeam] = useState(false);
  const [scrollFooter, setScrollFooter] = useState(false);

  const [scrollChange, setScrollChange] = useState(false);
  const [scrollChangeForProduct, setScrollChangeForProduct] = useState(false);

  const scrollForProduct = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };
  const scroll = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
  };
  const scrollAbt = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <Fragment>
      {bool == true ? (
        <center>
          <img className="pre" src={img} />
        </center>
      ) : (
        <div>
          {isBrowser ? (
            <Nav
              id="nav"
              className={colorChange ? "navbar colorChange" : "navbar"}
            >
              <NavContainer>
                <NavLogo href="/home">
                  Clean
                  <span
                    className="it"
                    Style="color:crimson;letter-spacing:0px;font-size:30px"
                  >
                    IT
                  </span>
                </NavLogo>
                <MobileIcon></MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks href="#serv">Services</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks href="#about">About Us</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks href="#Team">Team</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks href="#footer">Contact</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks href="SignIn">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </NavLinks>
                  </NavItem>
                </NavMenu>
              </NavContainer>
            </Nav>
          ) : (
            <div class="topnav">
              <a href="#home" class="active">
                Clean <span Style="color:crimson">IT</span>
              </a>
              {mob ? (
                <div id="myLinks">
                  <a href="#serv">Services</a>
                  <a href="#about">About Us</a>
                  <a href="#footer">Contact</a>
                  <a href="SignIn">Login</a>
                </div>
              ) : (
                console.log("")
              )}
              <a
                href="javascript:void(0);"
                class="icon"
                onClick={() => setMob(!mob)}
              >
                <i class="fa fa-bars"></i>
              </a>
            </div>
          )}

          <div className="hero">
            <center>
              <br />
              <br />
              <br />
              <br /> <br />
              <br />
              <br />
              <br />
              <div Style=" background-color: rgba(201, 76, 76, 0.3);">
                <h1 Style="color:white; letter-spacing : 8px ;  align-item:center;text-align:center; margin-left:auto;margin-right:auto">
                  CleanIT like you never did
                </h1>
                <h2 Style="color:white; letter-spacing : 3px ;  ; align-item:center;text-align:center; margin-left:auto;margin-right:auto">
                  We want to hear from you{" "}
                </h2>
              </div>
            </center>
            <div className="input-group " Style="margin-left:43%">
              <center>
                <br />
                <br />
                <button
                  type="button"
                  className="btn btn-danger btn-outline btn-xlarge"
                  onClick={() => History.push("/Register")}
                  Style="  border-top-left-radius:20%;  border-left:none;  border-bottom-left-radius:20% ; margin-left:auto;margin-right:auto;"
                >
                  Get started
                </button>
                <button
                  onClick={rec}
                  type="button"
                  class="btn btn-danger btn-outline btn-xlarge"
                  Style="  border-top-right-radius:50%;  border-left:none;  border-bottom-right-radius:50% ; margin-left:auto;margin-right:auto;

"
                >
                  {" "}
                  <i class="fa fa-microphone" aria-hidden="true"></i>
                </button>
              </center>
            </div>
          </div>
          <br />

          <div Style="position: fixed; bottom: 0; right: 0;  ">
            <motion.div whileHover={{ scale: 1.06 }}></motion.div>
          </div>

          <Services
            id="serv"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="container "
            Style="margin-top: 110px "
          >
            <br />
            <center>
              <br />
              <br />
            </center>
            <div
              className="Sv"
              Style="border-top:1px solid black;border-bottom:1px solid black;"
            >
              <motion.div
                className="container kamel"
                Style="margin-top: 110px  "
              >
                <center>
                  {isBrowser ? (
                    <Grid>
                      <div className="s" Style="padding:25px">
                        <img
                          className="srv"
                          src="https://www.cleaningservices.tn/wp-content/uploads/2017/11/disponibilit%C3%A9.png"
                          Style="max-width:200px"
                        />
                        <h5 Style="font-weight:bold" className="srv">
                          Disponibility
                        </h5>
                        <figcaption
                          Style="max-width:200px; font-weight:bold;"
                          className="srv"
                        >
                          {" "}
                          flexible service , 7/7 , 24/24
                        </figcaption>
                      </div>

                      <div className="s" Style="max-width :250px;padding:25px">
                        <img
                          className="srv"
                          src="https://www.cleaningservices.tn/wp-content/uploads/2017/11/prof.png"
                          Style="max-width:200px;"
                        />
                        <h5
                          className="srv"
                          Style="font-weight:bold"
                          className="srv"
                        >
                          Professional team
                        </h5>
                        <figcaption
                          className="srv"
                          Style="max-width:200px ; font-weight:bold;"
                        >
                          {" "}
                          A complete job and qualified professionals
                        </figcaption>
                      </div>

                      <div
                        className="s"
                        Style="max-width :250px;padding:25px"
                        className="srv"
                      >
                        <img
                          className="srv"
                          src="https://www.cleaningservices.tn/wp-content/uploads/2017/11/garantie-1.jpg"
                          Style="max-width:200px; max-height : 150px"
                        />
                        <h5
                          className="srv"
                          Style="font-weight:bold;margin-top:-5px"
                        >
                          Garantee results
                        </h5>
                        <figcaption
                          className="srv"
                          Style="max-width:200px ; font-weight:bold;"
                        >
                          {" "}
                          Interventions carried out according to the rules of
                          the trade
                        </figcaption>
                      </div>
                    </Grid>
                  ) : (
                    <div>
                      <div className="s" Style="padding:25px">
                        <img
                          className="srv"
                          src="https://www.cleaningservices.tn/wp-content/uploads/2017/11/disponibilit%C3%A9.png"
                          Style="max-width:200px"
                        />
                        <h5 Style="font-weight:bold" className="srv">
                          Disponibility
                        </h5>
                      </div>

                      <div className="s" Style="max-width :250px;padding:25px">
                        <img
                          className="srv"
                          src="https://www.cleaningservices.tn/wp-content/uploads/2017/11/prof.png"
                          Style="max-width:200px;"
                        />
                        <h5
                          className="srv"
                          Style="font-weight:bold"
                          className="srv"
                        >
                          Professional team
                        </h5>
                      </div>

                      <div
                        className="s"
                        Style="max-width :250px;padding:25px;margin-right:19%;"
                        className="srv"
                      >
                        <img
                          className="srv"
                          src="https://www.cleaningservices.tn/wp-content/uploads/2017/11/garantie-1.jpg"
                          Style="max-width:200px; max-height : 150px"
                        />
                        <h5
                          className="srv"
                          Style="font-weight:bold;margin-top:-5px"
                        >
                          Garantee results
                        </h5>
                      </div>
                    </div>
                  )}
                </center>
              </motion.div>
            </div>
          </Services>
          <br />
          <br />
          <br />
          <div>
            <center>
              <About
                variants={scrollAbt}
                initial="hidden"
                animate={scrollChange ? "show" : "hidden"}
                transition={{ duration: 2 }}
              >
                <GridBt>
                  <US id="about" />
                </GridBt>
              </About>
            </center>
            <div />

            <div id="Doc">
              <center>
                <br />
                <br />
                <br />
                <br />

                <h1 Style="color:white; letter-spacing : 4px ;  background-color: rgba(201, 76, 76, 0.3);">
                  Importance of Cleaning and Sanitation in the Winery
                </h1>
              </center>
              <br />
              <br />
              <br />
              <br />
              <center>
                <a
                  name=""
                  id=""
                  class="btn btn-danger btn-lg"
                  href="https://www.extension.iastate.edu/wine/files/page/files/importanceofcleaningand.pdf"
                  role="button"
                >
                  Learn more
                </a>
              </center>
            </div>
            <br />
          </div>

          <Team
            id="Team"
            variants={scroll}
            initial="hidden"
            animate={scrollChangeForTeam ? "show" : "hidden"}
            transition={{ duration: 2 }}
          >
            <OUR className="team" />
          </Team>

          <center>
            <h1 Style="color : #0056B3;   letter-spacing:5px ; font-weight:bold ">
              {" "}
              Our packs{" "}
            </h1>
          </center>
          <br />
          <br />
          {isBrowser ? (
            <div
              className="container k"
              Style="display:grid ; grid-template-columns: 1fr 1fr ; gap: 6em;

        "
            >
              <div Style="border : 5px solid 	#DCDCDC; border-radius:10%; ">
                <center>
                  <br />
                  <img
                    Style="max-width:210px;max-height:220px ;  background-color: transparent;
              "
                    src="https://image.freepik.com/vecteurs-libre/acces-ouvert-aux-donnees-bancaires-services-financiers-developpement-applications-paiement-mobile-technologie-api-developpeurs-web-concevant-plateformes-bancaires-illustration-metaphore-concept-isole-vecteur_335657-2817.jpg"
                  />
                  <br />
                  <br />
                  <h5>Initial Cleaning</h5>

                  <i
                    class="fa fa-check"
                    aria-hidden="true"
                    Style="font-weight:bold"
                  >
                    7/7 assistant
                  </i>
                  <br />
                  <i
                    class="fa fa-check"
                    aria-hidden="true"
                    Style="font-weight:bold"
                  >
                    Access to web application
                  </i>
                  <br />

                  <i
                    class="fa fa-check"
                    aria-hidden="true"
                    Style="font-weight:bold"
                  >
                    Free Access to mobile application{" "}
                  </i>
                  <br />

                  <i
                    class="fa fa-check"
                    aria-hidden="true"
                    Style="font-weight:bold"
                  >
                    {" "}
                    attractive price{" "}
                  </i>
                  <br />

                  <i
                    class="fa fa-check"
                    aria-hidden="true"
                    Style="font-weight:bold"
                  >
                    {" "}
                    Free clean plan{" "}
                  </i>
                  <br />

                  <i
                    class="fa fa-times-circle"
                    aria-hidden="true"
                    Style="font-weight:bold"
                  >
                    Free plans
                  </i>
                  <center>
                    <br />
                    <a
                      name=""
                      id=""
                      class="btn btn-danger"
                      href="/Signin"
                      role="button"
                      Style="margin-bottom:15px"
                    >
                      Reserv now
                    </a>
                  </center>
                </center>
              </div>
              <div Style="border : 5px solid  	#DCDCDC;border-radius:10% ; ">
                <br />
                <center>
                  <img
                    Style="max-width:200px;max-height:210px"
                    src="https://image.freepik.com/vecteurs-libre/achats-ligne_53876-26813.jpg"
                  />
                  <br />
                  <br />
                  <h5>Upkeep Cleaning</h5>
                  <i
                    class="fa fa-check"
                    aria-hidden="true"
                    Style="font-weight:bold"
                  >
                    7/7 assistant
                  </i>
                  <br />
                  <i
                    class="fa fa-check"
                    aria-hidden="true"
                    Style="font-weight:bold"
                  >
                    Access to web application
                  </i>
                  <br />

                  <i
                    class="fa fa-check"
                    aria-hidden="true"
                    Style="font-weight:bold"
                  >
                    Free Access to mobile application{" "}
                  </i>
                  <br />

                  <i
                    class="fa fa-check"
                    aria-hidden="true"
                    Style="font-weight:bold"
                  >
                    {" "}
                    attractive price{" "}
                  </i>
                  <br />

                  <i
                    class="fa fa-check"
                    aria-hidden="true"
                    Style="font-weight:bold"
                  >
                    {" "}
                    Free clean plan{" "}
                  </i>
                  <br />

                  <i
                    class="fa fa-check"
                    aria-hidden="true"
                    Style="font-weight:bold"
                  >
                    Free plans
                  </i>
                  <br />
                  <br />
                  <center>
                    <a
                      name=""
                      id=""
                      class="btn btn-outline btn-danger"
                      href="/Signin"
                      role="button"
                      Style="margin-bottom:15px"
                    >
                      Reserv now
                    </a>
                  </center>
                </center>
              </div>
            </div>
          ) : (
            <div className="k">
              <center>
                {" "}
                <div Style="border : 5px solid 	#DCDCDC; border-radius:10%; ">
                  <center>
                    <br />
                    <img
                      Style="max-width:210px;max-height:220px ;  background-color: transparent;
              "
                      src="https://image.freepik.com/vecteurs-libre/acces-ouvert-aux-donnees-bancaires-services-financiers-developpement-applications-paiement-mobile-technologie-api-developpeurs-web-concevant-plateformes-bancaires-illustration-metaphore-concept-isole-vecteur_335657-2817.jpg"
                    />
                    <br />
                    <br />
                    <h5>Initial Cleaning</h5>

                    <i
                      class="fa fa-check"
                      aria-hidden="true"
                      Style="font-weight:bold"
                    >
                      7/7 assistant
                    </i>
                    <br />
                    <i
                      class="fa fa-check"
                      aria-hidden="true"
                      Style="font-weight:bold"
                    >
                      Access to web application
                    </i>
                    <br />

                    <i
                      class="fa fa-check"
                      aria-hidden="true"
                      Style="font-weight:bold"
                    >
                      Free Access to mobile application{" "}
                    </i>
                    <br />

                    <i
                      class="fa fa-check"
                      aria-hidden="true"
                      Style="font-weight:bold"
                    >
                      {" "}
                      attractive price{" "}
                    </i>
                    <br />

                    <i
                      class="fa fa-check"
                      aria-hidden="true"
                      Style="font-weight:bold"
                    >
                      {" "}
                      Free clean plan{" "}
                    </i>
                    <br />

                    <i
                      class="fa fa-times-circle"
                      aria-hidden="true"
                      Style="font-weight:bold"
                    >
                      Free plans
                    </i>
                    <center>
                      <br />
                      <a
                        name=""
                        id=""
                        class="btn btn-danger"
                        href="/Signin"
                        role="button"
                        Style="margin-bottom:15px"
                      >
                        Reserv now
                      </a>
                    </center>
                  </center>
                </div>
                <br />
                <br />
                <div Style="border : 5px solid  	#DCDCDC;border-radius:10% ; ">
                  <br />

                  <center>
                    {" "}
                    <img
                      Style="max-width:200px;max-height:210px"
                      src="https://image.freepik.com/vecteurs-libre/achats-ligne_53876-26813.jpg"
                    />
                    <br />
                    <br />
                    <h5 Style="margin-top : 50px;">Upkeep Cleaning</h5>
                    <i
                      class="fa fa-check"
                      aria-hidden="true"
                      Style="font-weight:bold"
                    >
                      7/7 assistant
                    </i>
                    <br />
                    <i
                      class="fa fa-check"
                      aria-hidden="true"
                      Style="font-weight:bold"
                    >
                      Access to web application
                    </i>
                    <br />
                    <i
                      class="fa fa-check"
                      aria-hidden="true"
                      Style="font-weight:bold"
                    >
                      Free Access to mobile application{" "}
                    </i>
                    <br />
                    <i
                      class="fa fa-check"
                      aria-hidden="true"
                      Style="font-weight:bold"
                    >
                      {" "}
                      attractive price{" "}
                    </i>
                    <br />
                    <i
                      class="fa fa-check"
                      aria-hidden="true"
                      Style="font-weight:bold"
                    >
                      {" "}
                      Free clean plan{" "}
                    </i>
                    <br />
                    <i
                      class="fa fa-check"
                      aria-hidden="true"
                      Style="font-weight:bold"
                    >
                      Free plans
                    </i>
                    <br />
                    <br />
                    <center>
                      <a
                        name=""
                        id=""
                        class="btn btn-outline btn-danger"
                        href="/Signin"
                        role="button"
                        Style="margin-bottom:15px"
                      >
                        Reserv now
                      </a>
                    </center>
                  </center>
                </div>
              </center>
            </div>
          )}
          <br />
          <br />
          <br />
          <br />
          <motion.footer
            id="footer"
            variants={FooterAnim}
            initial="hidden"
            animate={scrollFooter ? "show" : "hidden"}
            transition={{ duration: 2 }}
          >
            <br />
            <footer className="footer-distributed">
              <div className="footer-left">
                <NavLogo href="/home">
                  Clean
                  <span Style="color:crimson;letter-spacing:0px;font-size:30px">
                    IT
                  </span>
                </NavLogo>

                <br />
                <br />
              </div>

              <div className="footer-center">
                <div>
                  <i className="fa fa-map-marker"></i>
                  <p>
                    <span>2000,</span> Lac2,Tunis
                  </p>
                </div>

                <div>
                  <i className="fa fa-phone"></i>
                  <p>++216 54 36 48 10</p>
                </div>

                <div>
                  <i className="fa fa-envelope"></i>
                  <p>
                    <a href="mailto:support@company.com">Orange@Orange.com</a>
                  </p>
                </div>
              </div>

              <div className="footer-right">
                <p className="footer-company-about">
                  <span>About the company</span>
                  Lorem ipsum dolor sit amet, consectateur adispicing elit.
                  Fusce euismod convallis velit, eu auctor lacus vehicula sit
                  amet.
                </p>

                <div className="footer-icons">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </footer>
          </motion.footer>
        </div>
      )}
    </Fragment>
  );
};

export default Navbar;
