import React from "react";
import Link from "next/link";
import Split from "../Split";


const Services2 = () => {
  return (
    <section className="fin pad services pt-2 back">
      
      <div className="container">
      <div className="sec-head custom-font text-center">
          {/* <h6 className="wow fadeIn" data-wow-delay=".5s">
            Best Features
          </h6> */}
          {/* <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Services.
            </h3>
          </Split> */}
          {/* <span className="tbg"style={{ color:'#F26522'}}>Services</span> */}
        </div>
      <Split>
            {/* <h3 className="wow words chars splitting" data-splitting>
             OUR SERVICES.
            </h3> */}
          </Split>
          <div className="sec-head custom-font">
            {/* <h6 className="wow fadeIn" data-wow-delay=".5s">
              BLACK SILLICON
            </h6> */}
            <Split>
              <h3 className="rex wow words chars splitting" data-splitting>
                OUR SERVICES
              </h3>
            </Split>
            <span className="tbg text-right"></span>
          </div>
        <div className="rin row rone">
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".4s">
            <div className="mas-item">
           
              <span className="icon pe-7s-monitor"></span>
              <h6>
              Software <br /> Development
              </h6>
              <div className="text-right">
                <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-wallet"></span>
              <h6>
              Electronic Payment <br /> Services
              </h6>
              <div className="text-right">
                <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-phone"></span>
              <h6>
              System Integration <br />
              </h6>
              <div className="text-right">
                <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
        </div>
        <div className="row rtwo">
          {/* <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-diskette"></span>
              <h6>
                Document <br /> Legal Policy
              </h6>
              <div className="text-right">
                <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div> */}
          {/* <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-help2"></span>
              <h6>
                Managing <br /> Community
              </h6>
              <div className="text-right">
                <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div> */}
          {/* <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-arc"></span>
              <h6>
                Coustomer <br /> Engagement
              </h6>
              <div className="text-right">
                <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div> 
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Services2;
