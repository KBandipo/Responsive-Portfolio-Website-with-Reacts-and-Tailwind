function Card(props) {
  const { photoName, photoAlt, title, description, livePreview, githubLink } =
    props;
  return (
    <>
      <div className="max-w-sm overflow-hidden rounded shadow-lg hover:shadow-xl">
        <img
          src={photoName}
          alt={photoAlt}
          className="h-48 w-full object-cover"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-red-800">{title}</div>
          <p className="text-red-800">{description}</p>
        </div>
        <div className="flex justify-between px-6 py-4">
          <a href={livePreview} className="github-link">
            Live Preview
          </a>
          <a href={githubLink} className="github-link">
            GitHub Repo
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
