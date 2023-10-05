import { type ProductItemType } from "@/ui/types";

import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({
	products,
}: {
	products: ProductItemType[];
}) => {
	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 lg:grid-cols-3"
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
