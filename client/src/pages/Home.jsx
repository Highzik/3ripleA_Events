import image1 from "/src/images/service-slide.jpg";
import image2 from "/src/images/dishes.jpg";
import image3 from "/src/images/table_settings.jpg";
import image4 from "/src/images/podium.jpg";
import image5 from "/src/images/husband-wife2.jpg"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { useState } from "react";
import "/src/pages/styles/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [review, setReview] = useState(false);
  const nextReview = () => {
    setReview(!review);
  }

  const previousReview = () => {
    setReview(!review);
  }

  return (
    <>
      {/* beginning of carousel */}
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100 img-fluid" alt="Slide 1" />
            <div className="carousel-caption">
              <div className="text-container w-70 w-md-50 w-lg-20 mx-auto">
                <hr className="mx-auto mb-4 horizontal-rule" />
                <h2 className="fs-4 fs-md-3 fs-lg-1 mb-4 mt-4">The Party Start With Us</h2>
                <h3 className="mb-4 fs-4 fs-md-3 fs-lg-1">DESTINATION WEDDING PLANNING & EVENT DESIGNERS BASED IN LAGOS</h3>
                <Link to="/gallery"><button className="mb-4 explore-btn">EXPLORE</button></Link>
                <hr className="mx-auto horizontal-rule" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100 img-fuid" alt="Slide 2" />
            <div className="carousel-caption">
              <div className="text-container w-70 w-md-50 w-lg-20 mx-auto">
                <hr className="mx-auto mb-4 horizontal-rule" />
                <h2 className="fs-4 fs-md-3 fs-lg-1 mb-4 w-sm-25">Lets Get Started With You</h2>
                <h3 className="mb-4 fs-4 fs-md-3 fs-lg-1">DESTINATION WEDDING PLANNING & EVENT DESIGNERS BASED IN LAGOS</h3>
                <Link to="/gallery"><button className="mb-4 explore-btn">EXPLORE</button></Link>
              </div>
              <hr className="horizontal-rule mx-auto" />
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100 img-fluid" alt="Slide 3" />
            <div className="carousel-caption">
              <hr className="horizontal-rule mx-auto" />
              <h2 className="fs-4 fs-md-3 fs-lg-1 mb-4 w-sm-25">A Trial Alone Will Do!!!</h2>
              <h3 className="mb-4 fs-4 fs-md-3 fs-lg-1">DESTINATION WEDDING PLANNING & EVENT DESIGNERS BASED IN LAGOS</h3>
              <Link to="/gallery"><button className="mb-4 explore-btn">EXPLORE</button></Link>
              <hr className="horizontal-rule mx-auto" />
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* end of carousel */}

      {/* first section */}
      <section className="first-section">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
            <div className="col-sm-12 col-md-6 col-lg-6 d-none d-lg-block">
              <img src={image4} alt="" className="img-fluid section-img" />
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-start justify-content-center">
              <h4 className="fs-2 mb-3 fw-semibold">Elegant Style<span style={{ color: "#009970" }}>.</span></h4>
              <h4 className="fs-2 fs-md-3 fs-lg-1 fw-semibold mb-3">Impeccabe Style<span style={{ color: "#009970" }}>..</span></h4>
              <h4 className="fs-2 fs-md-3 fs-lg-1 fw-semibold">Seamless Execution<span style={{ color: "#009970" }}>...</span></h4>
              <hr className="horizontal-rule" />
              <p className="mb-4 fs-6 fs-md-3 fs-lg-1 fw-semibold">From our base in Gbagada (Lagos) to the most romantic desinations around Nigeria, we at 3ripleA_Events believe in creating remarkable experiences for all our clients. We're committed to creating memorable celebrations infused with love and life.</p>
              <p className="mb-4 fs-6 fs-md-3 fs-lg-1 fw-semibold">We don't just think outside the box, we turn the box upside down.</p>
              <Link to="/approach"><button className="explore-btn">LEARN MORE</button></Link>
            </div>
          </div>
        </div>
      </section>
      {/* end of first section */}

      {/* customer reviews */}
      <div className="cs mb-4 p-4">
        <div className="row justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h1 className="mb-4 text-center text-decoration-underline fs-4 fw-bold review">Reviews</h1>
            {review ? (
              <div>
                <p className="fs-6 px-3 fw-semibold text-align-justify">We found 3ripleA_Events while surfing the internet and entrusted them to giving our destination wedding a local fee. They were able to effectively and effortlessly communicate and made us feel comfortable with the whole process. We love the ideas they presented us and felt they really took the time to add personal details to make our wedding unique. Their passion and dedication to event planning was above and beyond our expectations and we'd happily work with them to help plan a future event.</p>
                <p className="text-center mt-4 mb-4 fs-6 fw-bold"><span>*</span> Babatunde & Abimbibola <span>*</span></p>
              </div>
            ) : (
              <div>
                <p className="fs-6 px-3 fw-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam vitae aspernatur? Provident harum ut ullam quam exercitationem hic veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est error vel consequuntur assumenda pariatur incidunt modi rerum nostrum consectetur quisquam eaque, excepturi ex molestiae vitae nobis, tenetur numquam impedit!
                </p>
                <p className="text-center mt-4 mb-4 fs-6 fw-bold"><span>*</span> Demo & Demo <span>*</span></p>
              </div>
            )}

            {/* section for count */}
            <div className="text-center">
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-2 fs-4 cursor-pointer">
                  <FaArrowLeft className="arrows" onClick={previousReview} />
                </div>
                <span className="px-3 fs-4 fw-bold"></span>
                <div className="p-2 fs-4">
                  <FaArrowRight onClick={nextReview} className="arrows" />
                </div>
              </div>
            </div>
            {/* end of count section */}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 review-section">
            {review ? (
              <img src={image5} alt="table-settings" className="img-fluid section-img" />
            ) : (
              <img src={image1} alt="" className="img-fluid section-img" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
