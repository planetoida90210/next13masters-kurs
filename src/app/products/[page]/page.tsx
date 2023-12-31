import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organism/ProductList";

export async function generateStaticParams() {
	const products = await getProductsList();
	const numOfPages = Math.ceil(products.length / 20);
	const pages = Array.from({ length: numOfPages }, (_, i) => i + 1);
	return pages.map((page) => ({ page: page.toString() }));
}

export default async function ProductPaginationPage({
	params,
}: {
	params: { page: string };
}) {
	Number(params.page) === 1 ? 0 : Number(params.page) * 20 - 20;
	const products = await getProductsList();

	return <ProductList products={products} />;
}
