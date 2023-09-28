import { type ProductItem } from "../types";
import { formatMoney } from "@/utils";

type ProductCoverDescriptionProps = {
	product: ProductItem;
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
			<p>{formatMoney(price)}</p>
		</div>
	);
};