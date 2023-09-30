import { type ProductItemType } from "../types";
import { formatMoney } from "@/utils";

type ProductCoverDescriptionProps = {
	product: ProductItemType;
};

export const ProductCoverDescription = ({
	product: { name, category, price },
}: ProductCoverDescriptionProps) => {
	return (
		<div className="flex justify-between p-2">
			<div>
				<h3 className="truncate font-medium">{name}</h3>
				<p className="text-slate-700">{category}</p>
			</div>
			<p>{formatMoney(price)}</p>
		</div>
	);
};
