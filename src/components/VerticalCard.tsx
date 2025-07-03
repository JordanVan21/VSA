import "../styles/VerticalCard.css";
import Carousel from "./Carousel";
import ButtonGroup from "./Button";
import { type ReactElement } from "react";

interface VerticalCardProps {
  img1: string;
  img2: string;
  img3: string;
  content: string;
  listItems?: string[];
  alt: string;
  carouselId?: string;
  bulletPointHead: string;
}

const VerticalCard = ({
  img1,
  img2,
  img3,
  content,
  alt,
  listItems,
  carouselId,
  bulletPointHead
}: VerticalCardProps) => {
  return (
    <div>
      <div className="vertical-container">
        <div className="vertical-box">
          <Carousel
            alt={alt}
            img1={img1}
            img2={img2}
            img3={img3}
            imgClassName="vertical-img"
            carouselId={carouselId}
          ></Carousel>
        </div>
        <div>
          <p className="card-text">{content}</p>
          <p className="highlights">{bulletPointHead}</p>

          {listItems && listItems.length > 0 && (
            <ul className="card-text list-items">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;

interface VerticalVideoCardProps {
  video: string;
  content: string;
  listItems?: string[];
  alt: string;
  bulletPointHead: string;
}

const VerticalVideoCard = ({
  video,
  content,
  alt,
  listItems,
  bulletPointHead
}: VerticalVideoCardProps) => {
  return (
    <div>
      <div className="vertical-container">
        <div className="vertical-imgbox">
          <video className="highlight-video" controls>
            <source src={video} type="video/mp4" />
            {alt}
          </video>
        </div>
        <div>
          <p className="card-text">{content}</p>
          <p className="highlights">{bulletPointHead}</p>

          {listItems && listItems.length > 0 && (
            <ul className="card-text list-items">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export { VerticalVideoCard };

interface OneCardProps {
  merch: string;
  img: string;
  content: string;
  unavailable?: string[];
  needButton?: boolean;
  alt: string;
}

const OneCard = ({
  merch,
  img,
  content,
  alt,
  unavailable,
  needButton = false,
}: OneCardProps) => {
  return (
    <div>
      <div className="one-container">
        <div className="one-box">
          <img className="one-img" src={img} alt={alt} />
        </div>
        <h2 className="merch-head">{merch}</h2>
        <div>
          <p className="card-text">{content}</p>
          {needButton && <ButtonGroup unavailable={unavailable}></ButtonGroup>}
        </div>
      </div>
    </div>
  );
};

export { OneCard };

interface DescripCardProps {
  logo: string;
  head: string;
  alt: string;
  content: string;
  subCard1: React.ReactElement;
  subCard2: React.ReactElement;
  subCard3: React.ReactElement;
}

const DescripCard = ({
  logo,
  head,
  alt,
  content,
  subCard1,
  subCard2,
  subCard3,
}: DescripCardProps) => {
  return (
    <div className="innerCard">
      <header>
        <h3>{head}</h3>
      </header>
      <img src={logo} alt={alt}></img>
      <p>{content}</p>
      <div className="small-cards">
        <div>{subCard1}</div>
        <div>{subCard2}</div>
        <div>{subCard3}</div>
      </div>
    </div>
  );
};

export { DescripCard };

interface SubCardProps {
  head: string;
  content: string;
}

const SubCard = ({ head, content }: SubCardProps) => {
  return (
    <div className="subCard">
      <header>
        <h6>{head}</h6>
      </header>
      <p>{content}</p>
    </div>
  );
};

export { SubCard };

interface ContactCardProps {
  head: string;
  contact: string;
  email: string;
  insta: string;
  contactDescrip: string;
  form: ReactElement;
}

const ContactCard = ({ head, contact, email, insta, contactDescrip, form }: ContactCardProps) => {
  return (
    <div className="contact-card">
      <div className="contact-head">
        <header>
        <h5>{head}</h5>
      </header>
      <div>
        <div>{form}</div>
        <div className="contact-info">
          <h6>{contact}</h6>
          <p>{email}</p>
          <p>{insta}</p>
          <p>{contactDescrip}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export { ContactCard };
