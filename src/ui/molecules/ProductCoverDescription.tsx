import { type ProductItemType } from "@/ui/types";
import { ProductName } from "@/ui/atoms/ProductName";
import { ProductPrice } from "@/ui/atoms/ProductPrice";
import { PorductCategory } from "@/ui/atoms/ProductCategory";

type ProductCoverDescriptionProps = {
	product: ProductItemType;
};
export const ProductCoverDescription = ({
	product: { name, category, price },
}: ProductCoverDescriptionProps) => {
	return (
		<div className="flex flex-col p-2">
			<div className="mb-2 flex items-center justify-between break-words">
				<ProductName name={name} level="h3" />
				<ProductPrice price={price} />
			</div>
			<PorductCategory category={category} />
		</div>
	);
};
