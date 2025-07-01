import "../styles/Accordion.css";
import VerticalCard from "./VerticalCard"
import { VerticalVideoCard } from "./VerticalCard";

interface AccordionProps {
  title: string;
  img1: string;
  img2: string;
  img3: string;
  content: string;
  listItems?: string[];
  alt: string;
  carouselId?: string;
  accordionId?: string;
  collapseId?: string;
  bulletPointHead: string;
}

const Accordion = ({
  title,
  img1,
  img2,
  img3,
  content,
  listItems,
  alt,
  carouselId,
  accordionId,
  collapseId,
  bulletPointHead
}: AccordionProps) => {
  return (
    <div className="accordion-container">
      <div className="accordion" id={accordionId}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${collapseId}`}
              aria-expanded="false"
              aria-controls={collapseId}
            >
              {title}
            </button>
          </h2>
          <div
            id={collapseId}
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <VerticalCard
                img1={img1}
                img2={img2}
                img3={img3}
                content={content}
                listItems={listItems}
                alt={alt}
                carouselId={carouselId}
                bulletPointHead={bulletPointHead}
              ></VerticalCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

interface AccordionVideoProps {
  title: string;
  video: string;
  content: string;
  listItems?: string[];
  alt: string;
  carouselId?: string;
  accordionId?: string;
  collapseId?: string;
  bulletPointHead: string;
}

const AccordionVideo = ({
  title,
  video,
  content,
  listItems,
  alt,
  accordionId,
  collapseId,
  bulletPointHead
}: AccordionVideoProps) => {
  return (
    <div className="accordion-container">
      <div className="accordion" id={accordionId}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${collapseId}`}
              aria-expanded="false"
              aria-controls={collapseId}
            >
              {title}
            </button>
          </h2>
          <div
            id={collapseId}
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <VerticalVideoCard
                video={video}
                content={content}
                listItems={listItems}
                alt={alt}
                bulletPointHead={bulletPointHead}
              ></VerticalVideoCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {AccordionVideo};
