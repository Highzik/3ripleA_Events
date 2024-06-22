import { NavLink } from "react-router-dom"
import "/src/components/styles/header.css"

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top px-md-5">
        <div className="container-fluid">
          <div className="logo-container">
            <NavLink to="/" className="navbar-brand fs-5 fw-semibold">3ripleA<span className="events">Events</span>
              {/* <img src={logo} alt="BrandLogo" className="img-fluid brand-logo" /> */}
            </NavLink>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <NavLink to="/" className="navbar-brand fs-5 fw-semibold">3ripleA<span className="events">Events</span>
                {/* <img src={logo} alt="BrandLogo" className="img-fluid brand-logo" /> */}
              </NavLink>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink to="/approach" className="nav-link mx-lg-2 fw-bold" aria-current="page">APPROACH</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services" className="nav-link mx-lg-2 fw-bold">SERVICES</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/faq" className="nav-link mx-lg-2 fw-bold">FAQ</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/reviews" className="nav-link mx-lg-2 fw-bold">REVIEWS</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/subscribe" className="nav-link mx-lg-2 fw-bold">CONNECT</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
