import React from "react";
import DarkTheme from "../../layouts/Dark";
import addParlx from "../../common/addParlx";
import Navbar from "../../components/Navbar";
import CallToAction from "../../components/Call-to-action";
import PortfolioTwoColumn from "../../components/Portfolio-two-column";
import BlogDetailsDark from "../../components/Blog-details";

const Works4Dark = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx();
    }
  }, [pageLoaded]);
  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
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
  }, [fixedHeader, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <header
        ref={fixedHeader}
        className="rock works-header fixed-slider hfixd valign"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <h2 className="custom-font">Our works</h2>
                  <h3>
                  Our Amazing projects.
                  </h3>
                </div>

                <div className="bactxt custom-font valign">
                  <span className="full-width">Works</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div ref={MainContent} className="main-content">
        <PortfolioTwoColumn />
        <BlogDetailsDark/>
        <CallToAction />
        <footer className="footer-half sub-bg">
          <div className="container">
            <div className="copyrights text-center mt-0">
              <p>
                © 2022, BlackSillicon
                <a href="#0"></a>.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </DarkTheme>
  );
};

export default Works4Dark;
