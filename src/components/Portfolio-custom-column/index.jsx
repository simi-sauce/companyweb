/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import portfolio1Data from "../../data/sections/portfolio1.json";



const PortfolioCustomColumn = ({
  column,
  filterPosition,
  hideFilter,
  hideSectionTitle,
}) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    }
  }, [pageLoaded]);
  return (
    <section className="fri px-4 portfolio section-padding pb-10 ">
      {!hideSectionTitle && (
        <>
        <div className="tri">
        <div className="col-md-8 col-lg-9 container">
          <div className="sec-head custom-font">
            {/* <h6 className="wow fadeIn" data-wow-delay=".5s">
              BLACK SILLICON
            </h6> */}
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Our Works.
              </h3>
            </Split>
            <span className="tbg text-right"></span>
          </div>
        </div>

         <div className="burt">
         <a href="/works4/works4-dark/" className="exburt">Explore</a>
       </div>
       </div>
       </>
        
      )}

      <div className={`${column === 3 ? "container-fluid" : "container"}`}>
        <div className="row">
          {!hideFilter && (
            <div
              className={`filtering ${
                filterPosition === "center"
                  ? "text-center"
                  : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
              } col-12`}
            >
              <div className="filter">
                <span data-filter="*" className="active">
                  All
                </span>
                <span data-filter=".payment">Payment Solutions</span>
                <span data-filter=".aggregator">Aggregator</span>
                <span data-filter=".food">Food Ordering</span>
                {/* <span data-filter=".cbt">CBT</span> */}
              </div>
            </div>
          )}

          <div className="gallery full-width">
            {portfolio1Data.map((item, index) => (
              <div
                key={item.id}
                className={`${
                  column === 3
                    ? "col-lg-4 col-md-6"
                    : column === 2
                    ? "col-md-6"
                    : "col-12"
                } items ${item.filterCategory} wow fadeInUp ${
                  item.id === 2 && column == 3
                    ? "lg-mr"
                    : item.id === 1 && column == 2
                    ? "lg-mr"
                    : ""
                }`}
                data-wow-delay=".4s"
              >
                <div className="item-img">
                  <Link href="/project-details2/project-details2-dark">
                    <a className="imago wow">
                      <img src={item.image} alt="image" />
                      <div className="item-img-overlay"></div>
                      <div className="cont">
                      </div>
                    </a>
                  </Link>
                  
                </div>
                <h6 className="conf">{item.desc}</h6>
                <Link  href={item.link[0]}>
                  <a
                    className="lnk simple-btn custom-font mt-20 wow words chars splitting"
                    data-splitting
                  >
                    <span >VISIT</span>
                  </a>
                </Link>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCustomColumn;
