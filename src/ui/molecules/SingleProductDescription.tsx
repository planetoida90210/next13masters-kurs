import { ProductName } from "@/ui/atoms/ProductName";
import { PorductCategory } from "@/ui/atoms/ProductCategory";
import { ProductPrice } from "@/ui/atoms/ProductPrice";

type SingleProductDescriptionProps = {
	name: string;
	price: number;
	category: string;
};

export const SingleProductDescription = ({
	name,
	price,
	category,
}: SingleProductDescriptionProps) => {
	return (
		<div className="space-y-4">
			<ProductName name={name} level="h1" />
			<PorductCategory category={category} />
			<ProductPrice price={price} />
		</div>
	);
};
