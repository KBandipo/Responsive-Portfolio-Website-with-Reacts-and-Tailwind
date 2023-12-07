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
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
