import { type ProductItem } from "@/ui/types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const getProductsList = async () => {
	const res = await fetch(
		"https://naszsklep-api.vercel.app/api/products",
	);
	const productsResponse =
		(await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(
		(product): ProductItem => ({
			id: product.id,
			name: product.title,
			category: product.category,
			price: product.price,
			coverImage: {
				alt: product.title,
				src: product.image,
			},
		}),
	);
	return products;
};
