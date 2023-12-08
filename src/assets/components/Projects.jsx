import MainLayout from "../../Layout/MainLayout";
import Card from "./Card";

function Projects() {
  return (
    <>
      <MainLayout>
        <section id="projects" className="bg-gray-200 pt-20">
          <div className="container mx-auto">
            <h2 className="mb-4 text-2xl font-bold text-red-950">Projects</h2>
            {/* < Proj Section */}
            <div className="grid gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
              {/* <!--card1--> */}
              <Card
                photoName="/images/landing page.JPG"
                photoAlt="Landing page image"
                title="Landing Page"
                description="A landing page for a tech company"
                livePreview="https://kbandipo.github.io/Landing-Page/"
                githubLink="https://github.com/KBandipo/Landing-Page"
              />
              {/* <!--card2--> */}
              <Card
                photoName="/images/new portfolio.JPG"
                photoAlt="Portfolio image"
                title="Portfolio page"
                description="A simple portfolio"
                livePreview="https://kbandipo.github.io/New-Portfolio/"
                githubLink="https://github.com/KBandipo/New-Portfolio"
              />
              {/* <!--card3--> */}
              <Card
                photoName="/images/dogs image.JPG"
                photoAlt="Dogs' image"
                title=" Dogs shop website"
                description="A simple online dog shop website page"
                livePreview="https://kbandipo.github.io/Personal-exercise/"
                githubLink="https://github.com/KBandipo/Personal-exercise"
              />
              {/* <!--card4--> */}
              <Card
                photoName="/images/Rock paper scissors game image.JPG"
                photoAlt="Rock paper scissors game image"
                title="Rock paper scissors game"
                description="Rock paper scissors game image between the Computer and Player"
                livePreview="https://.iokbandipo.github/Week-10-Rock-Paper-Scissors-game-Responsive-design/"
                githubLink="https://github.com/KBandipo/Week-10-Rock-Paper-Scissors-game-Responsive-design"
              />
              {/* <!--card5--> */}
              <Card
                photoName="/images/ToDo list app image.JPG"
                photoAlt="ToDo list app image"
                title="A ToDo list app"
                description="An application designed to help individuals and teams organize,
              manage, and prioritize tasks."
                livePreview="https://kbandipo.github.io/Design-To-Do-List-Application/"
                githubLink="https://github.com/KBandipo/Design-To-Do-List-Application"
              />
              {/* <!--card6--> */}
              <Card
                photoName="/images/new card.JPG"
                photoAlt="Card image"
                title="Card"
                description=" A simple card to get insights on how to make business grow"
                livePreview="https://kbandipo.github.io/Learning-Layout/"
                githubLink="https://github.com/KBandipo/Learning-Layout"
              />
              {/* <!--card7--> */}

              <Card
                photoName="/images/Footwear sales.JPG"
                photoAlt="Footwear sales image"
                title=" Online Footwear sales"
                description=" Online footwear sales website."
                livePreview="https://kbandipo.github.io/Footwear-sales/"
                githubLink="https://github.com/KBandipo/Footwear-sales"
              />
              {/* <!--card8--> */}

              <Card
                photoName="/images/A one page Portfolio.JPG"
                photoAlt="A one page Portfolio image"
                title=" Portfolio page"
                description="A one page Portfolio"
                livePreview="https://kbandipo.github.io/A-One-Page-Portfolio-with-HTML-and-Tailwind/"
                githubLink="https://github.com/KBandipo/A-One-Page-Portfolio-with-HTML-and-Tailwind"
              />
              {/* <!--card9--> */}

              <Card
                photoName="/images/Naira and Dollar Currency converter app image.JPG"
                photoAlt="Naira and Dollar Currency converter image page"
                title=" Naira and Dollar Converter"
                description="An application to convert Naira and Dollar."
                livePreview="https://kbandipo.github.io/Currency-converter/"
                githubLink="https://github.com/KBandipo/Currency-converter"
              />
              {/* <!--card10--> */}

              <Card
                photoName="/images/naijaKitchen.JPG"
                photoAlt="naijaKitchen image page"
                title="Naija Kitchen Website"
                description="A Nigerian Kitchen Restaurant"
                livePreview="https://naija-kitchen-landpage-with-react.vercel.app/"
                githubLink="https://github.com/KBandipo/Naija-Kitchen-Landpage-with-React"
              />
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export default Projects;
