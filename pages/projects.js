import ProjectCard from "../components/ProjectCard";

export default function Projects() {
	return (
		<section className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			<ProjectCard
				title="MERN Jobs"
				description="This a Laravel Project. Users of this website can post MERN Stack jobs or Projects for potential job seekers to apply."
				imageUrl="/marketing.svg"
			/>
			<ProjectCard
				title="Housemarketplace"
				description="This is a Real Estate website where buyers and sellers meet to conduct business for absolutely no fee."
				imageUrl="/undraw_house_searching_re_stk8.svg"
			/>
			<ProjectCard
				title="Feedback App"
				description="This is a fully responsive front-end React JavaScript Feedback App. With this app customers can send feedback about a product or service"
				imageUrl="/Target audience _Two Color.svg"
			/>
		</section>
	);
}
