import { type ProductItemType } from "@/ui/types";

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

export const getProductsList = async (): Promise<
	ProductItemType[]
> => {
	const res = await fetch(
		"https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clnixtark1jfc01uhe7v68ttu/master",
		{
			method: "POST",
			body: JSON.stringify({
				query: /* GraphQL */ `
					query GetProductsList {
						products(first: 10) {
							id
							name
							description
							images {
								url
							}
							price
						}
					}
				`,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		},
	);

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	type ProductsGraphqlResponse = {
		data: {
			products: {
				id: string;
				name: string;
				description: string;
				images: {
					url: string;
				}[];
				price: number;
			}[];
		};
	};

	const graphqlResponse =
		(await res.json()) as GraphQLResponse<ProductsGraphqlResponse>;

	if (graphqlResponse.errors) {
		throw TypeError(graphqlResponse.errors[0].message);
	}

	return graphqlResponse.data.products.map((product) => {
		return {
			id: product.id,
			name: product.name,
			category: "",
			price: product.price,
			coverImage: {
				src: product.images[0].url,
				alt: product.name,
			},
		};
	});
};

export const getProductItemById = async (
	id: ProductResponseItem["id"],
) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const productResponse = (await res.json()) as ProductResponseItem;
	return productResponseItemToProductItemType(productResponse);
};

const productResponseItemToProductItemType = (
	product: ProductResponseItem,
): ProductItemType => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		coverImage: {
			alt: product.title,
			src: product.image,
		},
	};
};
