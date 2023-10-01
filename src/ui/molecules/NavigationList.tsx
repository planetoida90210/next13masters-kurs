import { ActiveLink } from "../atoms/ActiveLink";

export const NavigationList = () => {
	return (
		<ul className="mt-2 flex justify-center space-x-4">
			<li>
				<ActiveLink
					href={"/"}
					className="text-gray-500 hover:text-gray-700"
					activeClassName="underline"
					exact={true}
				>
					Home
				</ActiveLink>
			</li>
			<li>
				<ActiveLink
					href={"/products"}
					className="text-gray-500 hover:text-gray-700"
					activeClassName="underline"
					exact={false}
				>
					All
				</ActiveLink>
			</li>
		</ul>
	);
};
