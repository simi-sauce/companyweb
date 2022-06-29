import React from "react";
import Split from "../Split";

const AboutWhat = () => {
  return (
    <section className="fin intro-section back ">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            {/* <div className="htit sm-mb30">
              <h4>WHAT WE DO ?</h4>
            </div> */}

           <div className="sec-head custom-font">
            {/* <h6 className="wow fadeIn" data-wow-delay=".5s">
              BLACK SILLICON
            </h6> */}
            <Split>
              <h3 className=" rex wow words chars splitting" data-splitting>
                WHAT WE DO
              </h3>
            </Split>
            <span className="tbg text-right"></span>
          </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <h5 className="wow txt words chars splitting" data-splitting>
                Our services are tailored to revamp your business.
                We provide 3 major top-notch services to businesses and companies.
                </h5>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhat;
