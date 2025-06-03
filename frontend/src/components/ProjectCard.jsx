export default function ProjectCard({ project }) {
  return (
    <div
      style={{ border: "1px solid #ddd", padding: "1rem", margin: "1rem 0" }}
    >
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.github} target="_blank" rel="noreferrer">
        GitHub Repo
      </a>
    </div>
  );
}
