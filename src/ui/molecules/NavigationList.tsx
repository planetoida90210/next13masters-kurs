import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

const navLinks: {
	href: Route<string>;
	title: string;
	exact?: boolean;
}[] = [
	{ href: "/", title: "Home", exact: true },
	{ href: "/products", title: "All" },
];

export const NavigationList = () => {
	return (
		<ul className="mt-2 flex justify-center space-x-4">
			{navLinks.map(({ href, title, exact }, index) => (
				<li key={index}>
					<ActiveLink href={href} exact={exact}>
						{title}
					</ActiveLink>
				</li>
			))}
		</ul>
	);
};
