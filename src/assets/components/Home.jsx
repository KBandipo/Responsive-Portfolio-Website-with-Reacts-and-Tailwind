function Home() {
  return (
    <section
      id="home"
      className="mx-auto h-[90vh] bg-gray-200 p-8 pt-[50px] text-red-700 sm:p-16"
    >
      <div className="flex flex-col-reverse items-center space-y-[10px] pt-[50px] sm:flex-row sm:space-x-16 sm:space-y-0">
        <div className="container mx-auto overflow-hidden">
          <img
            src="/images/ken1.jpg"
            alt="Bandipo Kehinde's Picture"
            className="h-[400px] w-[400px] transform rounded-[50%] object-cover hover:rotate-90 sm:h-[500px] sm:w-[500px]"
          />
        </div>
        <div className="container text-center sm:w-full">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Hello, I'm Bandipo, Kehinde Olushola.
          </h1>
          <p className="mt-4 text-base sm:text-lg">
            FRONTEND SOFTWARE ENGINEER
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
