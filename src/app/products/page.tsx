import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organism/ProductList";

export default async function ProductsPage() {
	const products = await getProductsList(0, 20);

	return (
		<div>
			<ProductList products={products} />
		</div>
	);
}
