import { getProductItemById } from "@/api/products";
import { SingleProduct } from "@/ui/organism/SingleProduct";

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductItemById(params.productId);
	return (
		<div className="container mx-auto px-4 py-6">
			<SingleProduct product={product} />
		</div>
	);
}
