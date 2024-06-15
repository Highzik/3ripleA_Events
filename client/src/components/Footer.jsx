import "/src/components/styles/footer.css"
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="footer p-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <p className="fs-5 fw-bold fs-sm-6 fs-md-3 fs-lg-1 lgb">LAGOS & BEYOND</p>
            <ul>
              <li>
                <a href="https://www.facebook.com"><FaFacebook className="fs-5" /></a>
              </li>
              <li>
                <a href="https://www.twitter.com/"><FaTwitter className="fs-5" /></a>
              </li>
              <li>
                <a href="https://www.instagram.com/"><FaInstagram className="fs-5" /></a>
              </li>
              <li>
                <a href="https://www.pinterest.com/"><FaPinterest className="fs-5" /></a>
              </li>
              <li>
                <FaEnvelope className="fs-5" />
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}
