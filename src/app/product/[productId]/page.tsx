import { getProductItemById } from "@/api/products";

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductItemById(params.productId);
	return <div>{product.name}</div>;
}
