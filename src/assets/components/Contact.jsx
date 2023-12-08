function Contact() {
  return (
    <>
      <section id="contact" className="mx-auto py-8 sm:py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-2xl font-bold text-red-950 sm:text-3xl lg:text-4xl">
            Contact Me
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact-input-text"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact-input-text"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="contact-input-text"
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded bg-red-900 px-4 py-2 text-white hover:bg-red-950 hover:font-semibold hover:italic hover:text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
