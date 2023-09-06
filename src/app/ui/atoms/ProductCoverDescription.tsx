type ProductCoverDescriptionProps = {
	product: {
		title: string;
		category: string;
		price: number;
	};
};

export const ProductCoverDescription = ({
	product: { title, category, price },
}: ProductCoverDescriptionProps) => {
	return (
		<div className="flex justify-between p-2">
			<div>
				<h3 className="truncate font-medium">{title}</h3>
				<p className="text-slate-700">{category}</p>
			</div>
			<p>{price}$</p>
		</div>
	);
};
