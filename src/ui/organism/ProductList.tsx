import { type ProductItem } from "../../../types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({
	products,
}: {
	products: ProductItem[];
}) => {
	return (
		<ul
			data-testid="product-list"
			className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4"
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
