import React from 'react'
import "./Testimonial.css"
import { FaStar } from "react-icons/fa6";//start fill

const Testimonial = () => {
  return (
    <div>
  <section className="section-testimonial padding-b-100">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="mb-30">
          <div className="cr-banner">
            <h2>Great Words From People</h2>
          </div>
          <div className="cr-banner-sub-title">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; incididunt ut labore lacus vel facilisis.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 d-flex">
        <div className="cr-testimonial-slider swiper-container d-flex">
          <div className="swiper-wrapper cr-testimonial-pt-50 d-flex">
            {/* Testimonial Item */}
            <div className="swiper-slide m-5">
              <div className="cr-testimonial col-elg-12 col-md-12">
                <div className="cr-testimonial-image">
                  <img src="Image/t-1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="cr-testimonial-inner">
                  <span>Co Founder</span>
                  <h4 className="title">Stephen Smith</h4>
                  <p>
                    “eiusmpsu dolor sit amet, consecteur elit, sed do eiusmod tempor lacus vel facilisis.”
                  </p>
                  <div className="cr-star">
                    <span className="starr text-danger"><FaStar /></span>
                    <span className="starr text-danger"><FaStar /></span>
                    <span className="starr text-danger"><FaStar /></span>
                    <span className="starr text-danger"><FaStar /></span><span className="starr"><FaStar /></span>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat similar structure for other testimonials */}
            {/* Testimonial Item 2 */}
            <div className="swiper-slide m-5">
              <div className="cr-testimonial col-elg-12 col-md-12">
                <div className="cr-testimonial-image">
                  <img src="Image/t-2.jpg" alt="" className="img-fluid" />
                </div>
                <div className="cr-testimonial-inner">
                  <span>Co Founder</span>
                  <h4 className="title">Stephen Smith</h4>
                  <p>
                    “eiusmpsu dolor sit amet, consecteur elit, sed do eiusmod tempor lacus vel facilisis.”
                  </p>
                  <div className="cr-star">
                    <span className="starr text-danger"><FaStar /></span>
                    <span className="starr text-danger"><FaStar /></span>
                    <span className="starr text-danger"><FaStar /></span>
                    <span className="starr text-danger"><FaStar /></span><span className="starr"><FaStar /></span>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Item 3 */}
            <div className="swiper-slide m-5">
              <div className="cr-testimonial col-elg-12 col-md-12">
                <div className="cr-testimonial-image">
                  <img src="Image/t-3.jpg" alt="" className="img-fluid" />
                </div>
                <div className="cr-testimonial-inner">
                  <span>Co Founder</span>
                  <h4 className="title">Stephen Smith</h4>
                  <p>
                    “eiusmpsu dolor sit amet, consecteur elit, sed do eiusmod tempor lacus vel facilisis.”
                  </p>
                  <div className="cr-star">
                    <span className="starr text-danger"><FaStar /></span>
                    <span className="starr text-danger"><FaStar /></span>
                    <span className="starr text-danger"><FaStar /></span>
                    <span className="starr text-danger"><FaStar /></span><span className="starr"><FaStar /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>


    </div>
  )
}

export default Testimonial
