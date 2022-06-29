import React from "react";
import BlcSec from "../../components/Blc-sec";
import CallToAction from "../../components/Call-to-action";
// import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import IntroWithSlider2 from "../../components/Intro-with-slider2";
import Navbar from "../../components/Navbar";
import PortfolioCustomColumn from "../../components/Portfolio-custom-column";
import Services2 from "../../components/Services2";
import Services1 from "../../components/Services1";
import SkillsCircle from "../../components/Skills-circle";
// import VideoWithTestimonials from "../../components/Video-with-testimonials";
import DarkTheme from "../../layouts/Dark";
import Services4 from "../../components/Services4";
// import Team1 from "../../components/Team1";
// import MinimalArea from "../../components/Minimal-area";
import ContactWithMap from "../../components/Contact-with-map";
import AboutIntro from "../../components/About-intro";
import AboutWhat from "../../components/About-what";
import Clients1 from "../../components/Clients1";
import Numbers1 from "../../components/Numbers";
import Basic from "../../components/Modal";






const Homepage2 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider2 />
      <BlcSec />
      <AboutIntro />
      <AboutWhat />
      <Services2 />
      {/* <MinimalArea /> */}
      {/* <Services1 /> */}
      <Services4 withPadding withOutTitle />
     
      {/* <VideoWithTestimonials /> */}
      {/* <SkillsCircle theme="dark" subBG /> */}
      <PortfolioCustomColumn column={3} filterPosition="center" />
      {/* <Team1 /> */}
      <Numbers1/>
      <Clients1 theme="dark" />
      {/* <Clients1 theme="dark" subBG /> */}
      <CallToAction />
      <ContactWithMap />
       {/* <Basic/> */}
      {/* <Footer /> */}
    </DarkTheme>
  );
};

export default Homepage2;
