import MainLayout from "../../Layout/MainLayout";

function About() {
  return (
    <>
      <MainLayout>
        <section id="about" className="h-[97vh] pt-24">
          <div className="container mx-auto">
            <h2 className="mb-2 text-2xl font-bold text-red-950">About Me</h2>
            <p className="text-red-900">
              I hold a degree in Electronics and Electrical Engineering and
              currently work as a Software Engineer.
            </p>
            <article className="pt-4">
              <p className="mb-0 text-lg font-semibold text-red-950">
                Social Media Accounts
              </p>
              <ul className="flex flex-col">
                <li className="social-media-link">
                  <a href="https://www.linkedin.com/in/bandipo-kehinde-3b0434270/">
                    LinkedIn
                  </a>
                </li>
                <li className="social-media-link">
                  <a href="https://twitter.com/Bandipokenny">Twitter</a>
                </li>
                <li className="social-media-link">
                  <a href="https://web.facebook.com/bandipo.kehinde">
                    Facebook
                  </a>
                </li>
                <li className="social-media-link">
                  <a href="https://github.com/KBandipo/">Github: Kbandipo</a>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export default About;
