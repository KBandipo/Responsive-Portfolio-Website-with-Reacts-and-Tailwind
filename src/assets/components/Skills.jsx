import MainLayout from "../../Layout/MainLayout";

function Skills() {
  return (
    <>
      <MainLayout>
        <div className="mx-auto h-[96vh] max-w-md overflow-hidden rounded-xl bg-white pt-20 shadow-md md:max-w-[50%]">
          <img
            src="/images/ken1.jpg"
            alt="Bandipo Kehinde's Picture"
            className="h-[50%] w-[50%] rounded-[10%] object-cover shadow-lg"
          />
          <div className="w-[80%]">
            <h2 className="">Frontend web developer, this are my skills:</h2>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Skills;
