import "./styles/About.css";
import { DescripCard, SubCard } from "./components/VerticalCard";
import { ThreeDCarousel } from "./components/Carousel";

function About() {
  return (
    <div className="about-card">
      <header className="about-us-head fancy-underline">
        <h1>About Us</h1>
      </header>
      <div className="carasoul">
        <ThreeDCarousel
          card1={
            <DescripCard
              head="WESTERN WASHINGTON UNIVERSITY VIETNAMESE STUDENT ASSOCIATION (WWU VSA)"
              logo="https://i.imgur.com/BnazLOj.png"
              alt="VSA logo"
              content="The Vietnamese Student Association (VSA) at Western Washington University is a vibrant and inclusive community centered on 
      cultural pride, connection, and growth. Open to students of all backgrounds, WWU VSA creates space to celebrate and explore 
      Vietnamese heritage through events, performances, and shared experiences."
              subCard1={
                <SubCard
                  head="Cultural Celebration"
                  content="Hosting events that highlight Vietnamese traditions, food, music, and holidays."
                ></SubCard>
              }
              subCard2={
                <SubCard
                  head="Inclusive Community"
                  content="Welcoming students of all backgrounds to connect and grow together."
                ></SubCard>
              }
              subCard3={
                <SubCard
                  head="Personal & Leadership Growth"
                  content="Building confidence, friendships, and leadership skills through involvement."
                ></SubCard>
              }
            ></DescripCard>
          }
          card2={
            <DescripCard
              head="ETHNIC STUDENT CENTER (ESC)"
              logo="https://i.imgur.com/P0MCRcv.png"
              alt="WWU ESC Logo"
              content="The Vietnamese Student Association (VSA) is a proud member of Western Washington University's Ethnic Student Center 
              (ESC), a collective of culturally focused clubs dedicated to empowerment and inclusion. Through the ESC, VSA collaborates on 
              events, builds leadership, and advocates for equity across campus."
              subCard1={
                <SubCard
                  head="Cultural Unity"
                  content="The ESC brings together cultural clubs to celebrate diversity and foster cross-cultural understanding."
                ></SubCard>
              }
              subCard2={
                <SubCard
                  head="Student Leadership"
                  content="ESC hosts regular leader meetings that support communication, coordination, and collective growth."
                ></SubCard>
              }
              subCard3={
                <SubCard
                  head="Voice for Equity"
                  content="The ESC advocates for inclusion, supporting marginalized communities across campus."
                ></SubCard>
              }
            ></DescripCard>
          }
          card3={
            <DescripCard
              head="NORTHWEST VIETNAMESE STUDENT ASSOCIATION (NWVSA)"
              logo="https://i.imgur.com/THuxud6.png"
              alt="NWVSA logo"
              content="Beyond campus, WWU VSA is part of the Northwest Vietnamese Student Association (NWVSA), a regional network uniting 
              Vietnamese student organizations across the Pacific Northwest. This connection expands opportunities for leadership, cultural 
              exchange, and meaningful collaboration beyond the university."
              subCard1={
                <SubCard
                  head="Regional Collaboration"
                  content="NWVSA connects VSAs to host conferences and cultural events across the Pacific Northwest."
                ></SubCard>
              }
              subCard2={
                <SubCard
                  head="Student Leadership"
                  content="Members join regional meetings and retreats that strengthen leadership and teamwork."
                ></SubCard>
              }
              subCard3={
                <SubCard
                  head="Cultural Unity"
                  content="VSAs work together to celebrate and share Vietnamese heritage on a larger scale."
                ></SubCard>
              }
            ></DescripCard>
          }
        ></ThreeDCarousel>
      </div>
    </div>
  );
}

export default About;
