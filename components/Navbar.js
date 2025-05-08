import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="p-4 text-white bg-gray-800">
			<ul className="flex gap-6">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/projects">Projects</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
