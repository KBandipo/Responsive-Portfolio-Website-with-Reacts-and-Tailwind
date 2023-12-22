import MainLayout from "../../Layout/MainLayout";

function Contact({ darkMode, toggleTheme }) {
  return (
    <>
      <MainLayout darkMode={darkMode} toggleTheme={toggleTheme}>
        <section
          id="contact"
          className={`mx-auto h-[95vh] py-8 sm:py-16 ${
            darkMode ? "bg-gray-800" : ""
          }`}
        >
          <div className="container mx-auto pt-10">
            <h2
              className={`mb-4 text-2xl font-bold ${
                darkMode ? "bg-gray-800 text-gray-300" : "text-red-950"
              }  sm:text-3xl lg:text-4xl`}
            >
              Contact Me
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className={`block ${
                    darkMode ? "bg-gray-800 text-gray-300" : "text-red-700"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact-input-text w-[40%]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={`block ${
                    darkMode ? "bg-gray-800 text-gray-300" : "text-red-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-input-text w-[40%]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className={`block ${
                    darkMode ? "bg-gray-800 text-gray-300" : "text-red-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-input-text w-[40%]"
                ></textarea>
              </div>
              <button
                type="submit"
                className={`rounded  ${
                  darkMode
                    ? "bg-gray-900 text-gray-300 hover:bg-gray-900"
                    : "bg-red-900 text-gray-300 hover:bg-red-950"
                }px-4 py-2   hover:font-semibold hover:italic `}
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export default Contact;
