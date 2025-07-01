import "../styles/Card.css"
import Carousel from "./Carousel";

interface CardProps {
  title: string;
  img1: string;
  img2: string;
  img3: string;
  content: string;
  listItems?: string[];
  alt: string;
  containerClassName?: string;
  imgClassName?: string;
  pClassName?: string;
  boxClassName?: string;
  titleClassName?: string;
  listClassName?: string;
  carouselId?: string;
}

const Card = ({
  title,
  img1,
  img2,
  img3,
  content,
  alt,
  containerClassName,
  imgClassName,
  pClassName,
  boxClassName,
  titleClassName,
  listItems,
  listClassName,
  carouselId,
}: CardProps) => {
  return (
    <div>
      <div className={`${containerClassName}`}>
        <div className={boxClassName}>
          <Carousel alt={alt} img1={img1} img2={img2} img3={img3} imgClassName={`${imgClassName}`} carouselId={carouselId}></Carousel>
        </div>
        <div>
          <h5 className={`card-title ${titleClassName}`}>{title}</h5>
          <p className={`card-text ${pClassName}`}>{content}</p>

          {listItems && listItems.length > 0 && (
            <ul className={`card-text ${listClassName}`}>
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

export default Card;
