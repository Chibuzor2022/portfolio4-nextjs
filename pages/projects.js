import projectsData from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

export async function getServerSideProps() {
	return { props: { projects: projectsData } };
}

export default function Projects({ projects }) {
	return (
		<div className="p-5">
			<h1 className="text-5xl font-bold text-center mb-5">My Projects</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}
