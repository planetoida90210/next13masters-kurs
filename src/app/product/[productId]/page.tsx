import { Suspense } from "react";
import type { Metadata } from "next";
import SingleProductLoading from "./loading";
import { getProductItemById } from "@/api/products";
import { SingleProduct } from "@/ui/organism/SingleProduct";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductItemById(params.productId);
	return {
		title: product.name,
		openGraph: {
			title: product.name,
			images: [product.coverImage.src],
		},
	};
}

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductItemById(params.productId);
	return (
		<div className="mx-auto px-4 py-6">
			<Suspense fallback={<SingleProductLoading />}>
				<SingleProduct product={product} />
			</Suspense>
		</div>
	);
}
