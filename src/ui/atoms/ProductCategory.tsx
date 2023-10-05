export const PorductCategory = ({
	category,
}: {
	category: string;
}) => {
	return (
		<p className="md:text-md text-sm text-slate-700 lg:text-base">
			{category}
		</p>
	);
};
