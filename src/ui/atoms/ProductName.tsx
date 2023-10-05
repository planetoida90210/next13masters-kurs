import clsx from "clsx";

type ProductNameProps = {
	name: string;
	level?: "h1" | "h3";
	className?: string;
};

export const ProductName = ({
	name,
	level = "h3",
	className,
}: ProductNameProps) => {
	const defaultClasses = {
		h1: "font-2xl",
		h3: "font-medium text-sm md:text-base",
	};

	const classes = clsx("truncate", defaultClasses[level], className);

	switch (level) {
		case "h1":
			return <h1 className={classes}>{name}</h1>;
		case "h3":
			return <h3 className={classes}>{name}</h3>;
		default:
			return null;
	}
};
