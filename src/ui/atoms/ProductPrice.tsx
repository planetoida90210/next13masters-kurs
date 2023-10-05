import { formatMoney } from "@/utils";

type ProductPriceProps = {
	price: number;
};

export const ProductPrice = ({ price }: ProductPriceProps) => {
	return (
		<p className="md:text-md text-center text-sm">
			{formatMoney(price)}
		</p>
	);
};
