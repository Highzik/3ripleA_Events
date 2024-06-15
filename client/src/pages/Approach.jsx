import { useState } from "react"
import image from "/src/images/service-slide.jpg"
import image2 from "/src/images/dishes.jpg"
import image3 from "/src/images/flowers.jpg"
import image4 from "/src/images/table_settings.jpg"
import "/src/pages/styles/approach.css"

export default function Approach() {
  const [showModal, setShowModal] = useState(true);
  const handleModalOpen = () => {
    setShowModal(true)
  }
  const handleModalClose = () => {
    setShowModal(false)
  }
  return (
    <>
      {/* begining of image */}
      <div className="img-container">
        <img src={image} alt="husband and wife" className="img-fluid cover-img" />
      </div>
      {/* end of image */}

      {/* start of section1 */}
      <section className="container-fluid">
        <div className="row align-items-center justify-content-center mx-auto" style={{ minHeight: "50vh", maxWidth: "1200px" }}>
          <div className="col-sm-12 col-md-6 col-lg-6 px-4">
            <h1 className="fs-1 w-75 fw-semibold">What Celebration Means to Us</h1>
            <hr className="horizontal-rule" />
            <p className="fs-6 fw-semibold">We're focused on one objective -- creating the most memorable experience for you. We draw on all five senses - touch, taste, smell, sight, and sound - to create a moment you'll cherish forever.</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src={image2} alt="" className="img-fluid cover-img1" />
          </div>
        </div>
      </section>
      {/* end of section1 */}

      {/* start of section2 */}
      <section className="container-fluid section2">
        <div className="row align-items-center justify-content-center mx-auto" style={{ minHeight: "50vh", maxWidth: "1200px" }}>
          <div className="col-sm-12 col-md-6 col-lg-6 mb-4 order-sm-2 order-md-1 order-lg-1">
            <img src={image3} alt="" className="img-fluid cover-img1" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 px-4 order-sm-1 order-md-2 order-lg-2 mb-4">
            <h1 className="fs-1 w-75 fw-semibold">What Luxury Meant To Us</h1>
            <hr className="horizontal-rule" />
            <p className="fs-6 fw-semibold">We approach luxury a little differently. It's not about costs or labels for bus but the gift of time. Our team focuses on efficiency and time management for all parties. We're experts in our craft, and our ability to give you the gift of time is rivaled by none other.</p>
          </div>
        </div>
      </section>
      {/* end of section2 */}

      {/* section for associates */}
      <div className="container-fluid associate">
        <div className="row justify-content-center align-items-center mx-auto" style={{ minHeight: "50vh", maxWidth: "1000px" }}>
          <div className="col-sm-12 col-md-6 col-lg-6 mb-4">
            <img src={image4} alt="" className="img-fluid" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <p className="fs-5 fs-md-3 fs-lg-1 fw-semibold">Meet The Team</p>
            <hr className="horizontal-rule" />
            <p className="fs-4 mb-0 fw-semibold fs-md-3 fs-lg-1">Akasoro Abimbola Aminat</p>
            <p className="fs-7 fw-bold fs-md-3 fs-lg-1 mt-0 mb-2 owner">OWNER, PRINCIPAL PLANNER, DESIGNER</p>
            <p className="fs-6 fw-semibold fs-md-3 fs-lg-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque in consequuntur sunt.</p>
            <button className="explore-btn" onClick={handleModalOpen}>LEARN MORE</button>

            {/* modal */}
            {showModal &&
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={handleModalClose}>&times;</span>
                  <h2>Akasoro Abimbola Aminat</h2>
                  <p>Owner, Principal Planner, Designer</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div >
      {/* end for associates section */}
    </>

  )
}

