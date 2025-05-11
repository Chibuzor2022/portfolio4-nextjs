// export default function ProjectCard({ title, description, imageUrl }) {
// 	return (
// 		<div className="border rounded-lg overflow-hidden  shadow-lg">
// 			<img src={imageUrl} alt={title} className="w-full h-48 mt-4" />
// 			<div className="p-5">
// 				<h2 className="text-xl font-semibold mb-3">{title}</h2>
// 				<p className="text-gray-500">{description}</p>
// 			</div>
// 		</div>
// 	);
// }
import Image from "next/image";

export default function ProjectCard({ project }) {
	return (
		<div className="border rounded-lg overflow-hidden  shadow-lg">
			<Image
				className="w-full h-48 mt-4"
				src={project.imageUrl} // Image path from JSON
				alt={project.title} // Project description
				width={300} // Desired width
				height={200} // Desired height
			/>
			{/* Project details */}
			<div className="p-4">
				<h2 className="text-xl font-semibold mb-3">{project.title}</h2>{" "}
				{/* Project title */}
				<p className="text-gray-500 font-semibold">{project.description}</p>{" "}
				{/* Project Description*/}
			</div>
		</div>
	);
}
