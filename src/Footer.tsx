import "./styles/Footer.css";
import Icons from "./components/Icons";

function Footer() {
  return (
    <div className="info">
        <div className="media-container">
            <img src="https://i.imgur.com/BnazLOj.png" 
            alt="A VSA logo" className = "logo-2" id="header-img"/>
            <div>
                <Icons></Icons>
            </div>
          <div className="email">
            <h3>EMAIL US ANYTIME</h3>
            <p>westernvsa@gmail.com</p>
          </div>
        </div>
        <div className="contact-container">
            <div>
                <h1>OUR LOCATION</h1>
                <p>188 E College Way, Bellingham, WA 98225</p>
              </div>
            <div>
                <h1>OPERATING HOURS:</h1>
                <p>Announced Every Quarter</p>
                <p className="hour-description">Bi-weekly schedule: Occurs every other Tuesday</p>
            </div>
        </div>
          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.608770738684!2d-122.48919712404614!3d48.73206680958872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
            1!3m3!1m2!1s0x5485a3ccd778adf9%3A0xae941f6af2981e97!2sAcademic%20Instructional%20Center%20West%20(AW)!5e0!3m2!1sen!2sus!4v1734230868062!5m2!1sen!2sus" 
            width="550" 
            height="400" 
            style={{border: 0}}
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
          </div>
    </div>
  )
}

export default Footer