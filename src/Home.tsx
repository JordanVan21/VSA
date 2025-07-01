import "./styles/Home.css";
import Card from "./components/Card";
import Accordion, { AccordionVideo } from "./components/Accordion";
import FadeInSection from "./components/FadeInSection";

function Home() {
  return (
    <div className="body">
      <div className="container">
        <div>
          <header className="head">
            Vietnamese Student Association in Bellingham, WA
          </header>
          <p>
            The Vietnamese Student Association at Western Washington University
            aims to promote Vietnamese culture and support students of color.
            VSA is committed to member success, social activism, and
            inclusivity.
          </p>
        </div>
        <div className="box">
          <img
            className="img"
            src="https://i.imgur.com/bk33Myc.jpeg"
            alt="VSA Picture"
          />
        </div>
      </div>
      <h2 className="title">Programs</h2>

      <FadeInSection
        baseClassName="fade-in-right"
        fadeAnimateClassName="visible"
      >
        <div className="card-container">
          <Card
            title="ACCE"
            img1="https://i.imgur.com/2i0bVeg.jpeg"
            img2="https://i.imgur.com/k5B0wEk.jpeg"
            img3="https://i.imgur.com/ECd57Gj.jpeg"
            alt="ACCE Img"
            content="The ACCE program is a core part of WWU VSA, fostering cultural pride, mentorship, and meaningful relationships."
            listItems={[
              "Connects mentors (Anh, Chi, Chanh) with littles (Em) in a supportive family system",
              "Encourages growth through shared experiences and guidance",
              "Mentors create inclusive, caring environments for their families",
              "Littles participate in bonding events, meetings, and group activities",
              "Builds long-term connections, leadership skills, and cultural appreciation",
            ]}
            containerClassName="container"
            boxClassName="box"
            imgClassName="img"
            pClassName="p"
            titleClassName="subgroup-title"
            carouselId="carousel-acce"
            listClassName="list-items"
          ></Card>
        </div>
      </FadeInSection>

      <FadeInSection
        baseClassName="fade-in-left"
        fadeAnimateClassName="visible"
      >
        <div className="card-container">
          <Card
            title="Wavy Fan Dance"
            img1="https://i.imgur.com/aEh2SJY.jpeg"
            img2="https://i.imgur.com/P4sPswb.jpeg"
            img3="https://i.imgur.com/ffptBYq.jpeg"
            content="Wavy Fan Dance is a welcoming and energetic program within WWU VSA that brings students together through the art of Vietnamese dance."
            listItems={[
              "Open to all students — no prior dance experience needed",

              "Learn traditional fan dance choreography in a supportive team",

              "Participate in regular practices and performances",

              "Showcase your skills at major events like Heritage Night",

              "Build friendships, express culture, and grow as a performer",
            ]}
            alt="Fan Dance Images"
            containerClassName="container"
            boxClassName="box"
            imgClassName="img"
            pClassName="p"
            titleClassName="subgroup-title"
            listClassName="list-items"
            carouselId="carousel-fan"
          ></Card>
        </div>
      </FadeInSection>

      <FadeInSection
        baseClassName="fade-in-right"
        fadeAnimateClassName="visible"
      >
        <div className="card-container">
          <Card
            title="Viet 101"
            img1="https://i.imgur.com/iMVRlfz.jpeg"
            img2="https://i.imgur.com/5PzZZBe.jpeg"
            img3="https://i.imgur.com/yxzyX8Q.jpeg"
            content="Viet 101 introduces WWU VSA members to the Vietnamese language and culture in a fun, inclusive setting."
            listItems={[
              "Learn basic Vietnamese phrases and conversational skills",
              "Explore cultural customs, traditions, and values",
              "Participate in discussions on Vietnamese history and heritage",
              "Welcomes all experience levels and cultural backgrounds",
              "Builds cultural pride, community bonds, and cross-cultural understanding",
            ]}
            alt="Fan Dance Images"
            containerClassName="container"
            boxClassName="box"
            imgClassName="img"
            pClassName="p"
            titleClassName="subgroup-title"
            listClassName="list-items"
            carouselId="carousel-viet"
          ></Card>
        </div>
      </FadeInSection>

      <h2 className="title title-extra">Events</h2>
      <h3 className="sub-title">External Events</h3>
      <div>
        <Accordion
          title="Turkey Bowl"
          img1="https://i.imgur.com/B6wThUc.jpeg"
          img2="https://i.imgur.com/lgK9eWJ.jpeg"
          img3="https://i.imgur.com/Ocr2k2g.jpeg"
          content="Turkey Bowl is an exciting Ultimate Frisbee tournament hosted annually within the NWVSA network, 
          bringing together Vietnamese Student Associations from across the Pacific Northwest for competition and connection."
          bulletPointHead="EVENT HIGHTLIGHTS: "
          listItems={[
            "Compete with and against VSAs from across the Northwest",
            "Represent WWU VSA in a spirited, team-based event",
            "Open to all skill levels — beginners and experienced players welcome",
            "Practice together, build team chemistry, and enjoy the energy of the tournament",
            "Connect with VSA members from other schools and make lasting memories",
          ]}
          alt="NWVSA Turkey Bowl Images"
          carouselId="carousel-turkey"
          accordionId="accordion-turkey"
          collapseId="collapse-turkey"
        ></Accordion>
      </div>

      <div>
        <Accordion
          title="Tet"
          img1="https://i.imgur.com/iQHxyad.jpeg"
          img2="https://i.imgur.com/b7oWJvl.jpeg"
          img3="https://i.imgur.com/Tt1GFIk.jpeg"
          content="Tết is a meaningful cultural celebration for WWU VSA, where students connect with the broader Vietnamese community 
          and honor the traditions of Lunar New Year."
          bulletPointHead="EVENT HIGHTLIGHTS: "
          listItems={[
            "Celebrated in Seattle with traditional customs, food, and cultural entertainment",
            "Features a performance by the Fan Dance team, representing WWU VSA with pride",
            "Offers a chance to connect with regional Vietnamese communities and fellow students",
            "Encourages participation through performing, volunteering, or attending",
          ]}
          alt="VSA Tet Images"
          carouselId="carousel-tet"
          accordionId="accordion-tet"
          collapseId="collapse-tet"
        ></Accordion>
      </div>
      <div>
        <Accordion
          title="SpikeFest"
          img1="https://i.imgur.com/Vgg0XbI.jpeg"
          img2="https://i.imgur.com/IwVwzgh.jpeg"
          img3="https://i.imgur.com/DMIFD0S.jpeg"
          content="Spike Fest is a high-energy volleyball tournament where WWU VSA teams up with other NWVSA schools to compete, connect, 
          and have fun — no volleyball experience required!"
          bulletPointHead="EVENT HIGHTLIGHTS: "
          listItems={[
            "Participate in a regional volleyball tournament highlighting teamwork and athleticism",
            "Represent WWU VSA in an inclusive, spirited atmosphere",
            "Make lasting memories while bonding with other VSAs across the Pacific Northwest",
            "Join team practices to prepare and build chemistry",
          ]}
          alt="VSA SpikeFest Images"
          carouselId="carousel-spike"
          accordionId="accordion-spike"
          collapseId="collapse-spike"
        ></Accordion>
      </div>
      <h3 className="sub-title">Internal Events</h3>
      <div>
        <AccordionVideo
          title="Heritage Night"
          video="./src/VSA Heritage Night 2024.mp4"
          content="Heritage Night is WWU VSA’s biggest cultural celebration, spotlighting Vietnamese traditions through food, art, and 
          performances. It brings together students, faculty, and the broader community for an unforgettable evening of cultural pride 
          and connection."
          bulletPointHead="EVENT HIGHTLIGHTS: "
          listItems={[
            "Features traditional music, dance, and fashion show performances",
            "Showcases Vietnamese cuisine, history, and visual art",
            "Highlights student talent, including the Fan Dance team and other VSA groups",
            "Involves planning, rehearsals, and teamwork across the entire VSA",
            "Promotes cultural understanding and pride across the WWU campus",
          ]}
          alt="Your browser does not support the video tag. (VSA Heritage Night 2024)"
          accordionId="accordion-heritage"
          collapseId="collapse-heritage"
        ></AccordionVideo>
      </div>
      <div>
        <Accordion
          title="Fundraising"
          img1="https://i.imgur.com/svwotuw.jpeg"
          img2="https://i.imgur.com/BtGFlnC.jpeg"
          img3="https://i.imgur.com/Y0jUldr.jpeg"
          content="Fundraising is an essential part of WWU VSA, combining community spirit with purposeful action. It supports events, 
          outreach, and programs while giving members a chance to contribute meaningfully."
          bulletPointHead="EVENT HIGHTLIGHTS:"
          listItems={[
            "Hosts engaging and creative events to raise funds for VSA programs and activities",
            "Strengthens teamwork and leadership through planning, logistics, and promotion",
            "Directly supports cultural showcases, internal initiatives, and student outreach",
            "Builds a stronger, more united VSA through shared efforts and impact",
          ]}
          alt="VSA Fundraising Images"
          carouselId="carousel-fund"
          accordionId="accordion-fund"
          collapseId="collapse-fund"
        ></Accordion>
      </div>
    </div>
  );
}

export default Home;
