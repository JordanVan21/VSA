import "./styles/Contact.css";
import { ContactCard } from "./components/VerticalCard";

function Contact() {
  return (
    <div className="contact">
      <ContactCard
        head="CONTACT US"
        contact="CONTACT"
        email="westernvsa@gmail.com"
        insta="instagram: @wwuvsa"
        contactDescrip="Or by this google form"
        form={
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdcUhG1qbpFxtOG5UgRLsnzmqlab3T2c-j8HGxOl6CZUcffiw/viewform?embedded=true"
            height="550"
            width="750"
          ></iframe>
        }
      ></ContactCard>
    </div>
  );
}

export default Contact;
