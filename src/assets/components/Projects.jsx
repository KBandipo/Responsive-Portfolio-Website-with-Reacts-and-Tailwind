import Card from "./Card";

function Projects() {
  return (
    <>
      <section id="projects" className="bg-gray-200 py-16">
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
            {/* <!--card3--> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
