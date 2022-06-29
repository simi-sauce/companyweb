/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../Split";

const BlogsThreeColumn2 = ({ subBG }) => {
  return (
    <section className={`blog-grid section-padding ${subBG ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="sec-head custom-font text-center">
          
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Our Works
            </h3>
          </Split>
          <span className="tbg">Works</span>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div
              className="item list md-mb50 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="img">
                <img src="/img/blog/1.jpg" alt="" />
              </div>
              <div className="cont">
                <Link href="/blog/blog-dark">
                  <a className="date custom-font">
                   
                  </a>
                </Link>

                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/blog-details-dark">
                    The Start-Up Ultimate Guide to Make Your WordPress Journal.
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/blog-details-dark">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="item list md-mb50 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="img">
                <img src="/img/blog/2.jpg" alt="" />
              </div>
              <div className="cont">
                <Link href="/blog/blog-dark">
                  <a className="date custom-font">
                   
                  </a>
                </Link>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/blog-details-dark">
                    The Start-Up Ultimate Guide to Make Your WordPress Journal.
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/blog-details-dark">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item list wow fadeInUp" data-wow-delay=".8s">
              <div className="img">
                <img src="/img/blog/3.jpg" alt="" />
              </div>
              <div className="cont">
                <Link href="/blog/blog-dark">
                  <a className="date custom-font">
                  
                  </a>
                </Link>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/blog-details-dark">
                    The Start-Up Ultimate Guide to Make Your WordPress Journal.
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/blog-details-dark">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsThreeColumn2;
