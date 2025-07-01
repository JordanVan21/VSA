import React from "react";

interface ImgProps {
  img1: string;
  img2: string;
  img3: string;
  alt: string;
  imgClassName?: string;
  carouselId?: string;
}

const Carousel = ({
  img1,
  img2,
  img3,
  alt,
  imgClassName,
  carouselId,
}: ImgProps) => {
  return (
    <div>
      <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className={`d-block w-100 ${imgClassName}`}
              alt={alt}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              className={`d-block w-100 ${imgClassName}`}
              alt={alt}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className={`d-block w-100 ${imgClassName}`}
              alt={alt}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

interface ThreeDCardProps {
  card1: React.ReactElement;
  card2: React.ReactElement;
  card3: React.ReactElement;
}

const ThreeDCarousel = ({ card1, card2, card3 }: ThreeDCardProps) => {
  const cards = [card1, card2, card3];
  const [active, setActive] = React.useState(0);

  const prev = () => setActive((a) => (a + cards.length - 1) % cards.length);
  const next = () => setActive((a) => (a + 1) % cards.length);

  const getPosClass = (i: number) => {
    if (i === active) return "active";
    if (i === (active + 1) % cards.length) return "right";
    if (i === (active + cards.length - 1) % cards.length) return "left";
    return "hidden";
  };

  return (
    <div className="carousel">
      <button className="arrow left"  onClick={prev}>←</button>

      <div className="carousel-track">
        {cards.map((card, i) => (
          <div className={`card ${getPosClass(i)}`} key={i}>
            {card}
          </div>
        ))}
      </div>

      <button className="arrow right" onClick={next}>→</button>
    </div>
  );
};

export { ThreeDCarousel };
