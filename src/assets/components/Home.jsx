import MainLayout from "../../Layout/MainLayout";

function Home({ darkMode, toggleTheme }) {
  return (
    <>
      <MainLayout darkMode={darkMode} toggleTheme={toggleTheme}>
        <section
          id="home"
          className={`mx-auto h-[96vh]  ${
            darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-red-700"
          }p-8 pt-[50px]  sm:p-16`}
        >
          <div className="flex flex-col-reverse items-center space-y-[10px] pt-[50px] sm:flex-row sm:space-x-16 sm:space-y-0">
            <div className="container mx-auto overflow-hidden">
              <img
                src="/images/ken1.jpg"
                alt="Bandipo Kehinde's Picture"
                className="mx-auto h-[300px] w-[300px] transform rounded-[50%] object-cover hover:rotate-90 md:h-[500px] md:w-[500px]"
              />
            </div>

            <div className="container text-center sm:w-full">
              <h1
                className={`text-2xl font-bold tracking-widest sm:text-3xl ${
                  darkMode ? "text-gray-300" : "text-red-700"
                }`}
              >
                Hello, I'm Bandipo, Kehinde Olushola.
              </h1>
              <p
                className={`mt-4 text-base sm:text-lg ${
                  darkMode ? "text-gray-300" : "text-red-700"
                }`}
              >
                FRONTEND SOFTWARE ENGINEER
              </p>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export default Home;
