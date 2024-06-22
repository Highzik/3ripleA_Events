import "/src/components/styles/footer.css"
import { FaFacebook, FaLinkedinIn, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa"
import Logo from "/src/images/mainLogo.jpg"

export default function Footer() {
  const year = new Date()
  const currentYear = year.getFullYear();

  return (
    <footer className="footer p-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <p className="fs-5 fw-bold fs-sm-6 fs-md-3 fs-lg-1 lgb">LAGOS & BEYOND</p>
            <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100063486554691&mibextid=ZbWKwL"><FaFacebook className="fs-5" /></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/3riple-a-event-and-merchandise-455475265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn className="fs-5" /></a>
              </li>
              <li>
                <a href="https://www.instagram.com/3riplea_event?igsh=NGgzOHYweWZwaGMy"><FaInstagram className="fs-5" /></a>
              </li>
              <li>
                <a href="https://youtube.com/@3ripleaeventtv?si=IxWsMgJC1Ko7f2j-"><FaYoutube className="fs-5" /></a>
              </li>
              <li>
                <a href="mailto:3ripleaevent.merchandise@gmail.com"><FaEnvelope className="fs-5" /></a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src={Logo} alt="brand-logo" className="img-fluid brand-logo" />
          </div>
        </div>
        <p className="fs-7 fw-semibold text-center mt-4 pt-5"> &copy; {currentYear} 3riplea_event | Lagos Gbagada Wedding Planners and Event Designers | Website by <a href="https://highzik.github.io/my-portfolio/" className="zeeko">Zeeko Designs</a></p>

      </div>
    </footer>
  )
}
