function Skill({ skill, color, level }) {
  return (
    <div
      className="flex justify-between gap-2 rounded p-2"
      style={{ backgroundColor: color }}
    >
      <span>{skill}</span>
      <span>
        {level === "advance" && "👌"}
        {level === "intermediate" && "👍"}
        {level === "beginner" && "🌱"}
      </span>
    </div>
  );
}

export default Skill;
