import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0 back">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            {/* <div className="htit sm-mb30">
              <h4>WHO WE ARE ?</h4>
            </div> */}
             <div className="sec-head custom-font">
            {/* <h6 className="wow fadeIn" data-wow-delay=".5s">
              BLACK SILLICON
            </h6> */}
            <Split>
              <h3 className="rex wow words chars splitting" data-splitting>
                WHO WE ARE
              </h3>
            </Split>
            <span className="tbg text-right"></span>
          </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <h5 className="wow txt words chars splitting" data-splitting>
                The company was formed in May 2018 when the founder, having worked in the electronic payment space for about 2 decades believes his vast experience is useful in solving world challenging problems
                So he gathered a team of highly skilled and experienced engineers, trained them to understand client's needs and address issues by providing cost effective and innovative solutions.
                Black Silicon has a branch office in London, United Kingdom and a head office in Lagos, Nigeria.
                </h5>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
