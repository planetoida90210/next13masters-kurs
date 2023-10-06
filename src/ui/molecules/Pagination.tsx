import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PaginationProps = {
	numOfPages: number;
	baseUrl: string;
};

function createRoute(baseUrl: string, index: number): Route<string> {
	return `${baseUrl}/${index + 1}` as unknown as Route<string>;
}

export const Pagination = ({
	numOfPages,
	baseUrl,
}: PaginationProps) => {
	return (
		<nav aria-label="pagination">
			<ul className="flex">
				{Array.from({ length: numOfPages }).map((_, index) => (
					<li key={index}>
						<ActiveLink
							href={createRoute(baseUrl, index)}
							exact={false}
							activeClassName="text-blue-500 border-b-2 border-blue-500"
							className="mr-3 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
							role="link"
						>
							{index + 1}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
