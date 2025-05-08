export default function ProjectCard({ title, description, imageUrl }) {
	return (
		<div className="border rounded-lg overflow-hidden  shadow-lg">
			<img src={imageUrl} alt={title} className="w-full h-48 mt-4" />
			<div className="p-5">
				<h2 className="text-xl font-semibold mb-3">{title}</h2>
				<p className="text-gray-500">{description}</p>
			</div>
		</div>
	);
}
