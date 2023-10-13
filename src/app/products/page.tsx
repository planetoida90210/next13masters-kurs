import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organism/ProductList";

export default async function ProductsPage() {
	const products = await getProductsList();

	return (
		<div>
			<ProductList products={products} />
		</div>
	);
}
