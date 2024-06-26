import navIcon1 from "../images/nav-icon1.svg"
import navIcon2 from "../images/nav-icon2.svg"
import navIcon3 from "../images/nav-icon3.svg"
import logo from "../images/logo-no-background.png"
const Footer = () => {
    return (
        <section className="section-footer">
            <div className="footer-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div>
            <button onClick={() =>  window.location.href = 'https://publuu.com/flip-book/462141/1039952' } className="btn-resume">SEE MY RESUME </button>
            </div>
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/sairaj-naik-08713723b/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/rajnayak369"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/sairaj_naik/"><img src={navIcon3} alt="" /></a>
            </div>
        </section>
    )
}

export default Footer;