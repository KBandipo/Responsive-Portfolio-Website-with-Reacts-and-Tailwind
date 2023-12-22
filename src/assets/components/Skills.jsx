import MainLayout from "../../Layout/MainLayout";
import Skill from "./Skill";

const skills = [
  { skill: "HTML", level: "advance", color: "#55FF00" },
  { skill: "CSS", level: "advance", color: "#FF3B00" },
  { skill: "JavaScript", level: "intermediate", color: "#E85F90" },
  { skill: "Tailwind", level: "advance", color: "#DA2399" },
  { skill: "React", level: "intermediate", color: "#F0DAF8" },
  { skill: "Git and Github", level: "intermediate", color: "#e84f99" },
  { skill: "Web Development", level: "intermediate", color: "#55FFCC" },
  { skill: "SASS", level: "beginner", color: "#44dddd" },
];

function Skills({ darkMode, toggleTheme }) {
  return (
    <>
      <MainLayout darkMode={darkMode} toggleTheme={toggleTheme}>
        <div
          className={`mx-auto h-[96vh] max-w-md overflow-hidden ${
            darkMode ? "bg-gray-800 text-white" : "bg-white"
          }rounded-xl  p-10 pt-24 shadow-md md:max-w-[50%]`}
        >
          <img
            src="/images/ken1.jpg"
            alt="Bandipo Kehinde's Picture"
            className="h-[50%] w-[50%] rounded-[10%] object-cover shadow-lg"
          />
          <div className="w-[80%]">
            <h2 className="my-4 text-[16px] md:text-[18px] lg:text-[20px]">
              I'm a frontend web developer, this are my skills:
            </h2>
          </div>
          <div
            className={`flex flex-wrap gap-2  ${darkMode ? "text-white" : ""}`}
          >
            {skills.map((skill) => (
              <Skill
                key={skill.skill}
                skill={skill.skill}
                color={skill.color}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Skills;
