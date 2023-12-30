import MainLayout from "../../Layout/MainLayout";

function About({ darkMode, toggleTheme }) {
  return (
    <>
      <MainLayout darkMode={darkMode} toggleTheme={toggleTheme}>
        <section
          id="about"
          className={`h-[96vh] pt-24  ${
            darkMode ? "bg-gray-800 text-gray-300" : ""
          }`}
        >
          <div className="container mx-auto">
            <h2
              className={`${
                darkMode ? "bg-gray-800 text-gray-300" : "text-red-950"
              } mb-2 text-2xl font-bold `}
            >
              About Me
            </h2>
            <p
              className={`${
                darkMode ? "bg-gray-800 text-gray-300" : "text-red-900"
              }`}
            >
              I hold a degree in Electronics and Electrical Engineering and
              currently work as a Software Engineer.
            </p>
            <article className="pt-4">
              <p
                className={`${
                  darkMode ? "bg-gray-800 text-gray-300" : "text-red-950"
                } mb-0 text-lg font-semibold`}
              >
                Social Media Accounts
              </p>
              <ul className="flex flex-col">
                <li
                  className={`${
                    darkMode
                      ? "bg-gray-800 text-gray-300 hover:underline"
                      : "text-red-900 hover:text-red-950"
                  } hover:font-semibold hover:italic `}
                >
                  <a href="https://www.linkedin.com/in/bandipo-kehinde-3b0434270/">
                    LinkedIn
                  </a>
                </li>
                <li
                  className={`${
                    darkMode
                      ? "bg-gray-800 text-gray-300 hover:underline"
                      : "text-red-900 hover:text-red-950"
                  } hover:font-semibold hover:italic `}
                >
                  <a href="https://twitter.com/Bandipokenny">Twitter</a>
                </li>
                <li
                  className={`${
                    darkMode
                      ? "bg-gray-800 text-gray-300 hover:underline"
                      : "text-red-900 hover:text-red-950"
                  } hover:font-semibold hover:italic `}
                >
                  <a href="https://web.facebook.com/bandipo.kehinde">
                    Facebook
                  </a>
                </li>
                <li
                  className={`${
                    darkMode
                      ? "bg-gray-800 text-gray-300 hover:underline"
                      : "text-red-900 hover:text-red-950"
                  } hover:font-semibold hover:italic `}
                >
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
