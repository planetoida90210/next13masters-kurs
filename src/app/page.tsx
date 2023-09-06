import { type ProductItem } from "../../types";
import { ProductList } from "@/ui/organism/ProductList";

const products: ProductItem[] = [
	{
		id: "1",
		title: "Eklerka",
		price: 9999,
		category: "Accesories",
		coverImage: {
			alt: "Poduszka Eklerka",
			src: "/product1.png",
		},
	},
	{
		id: "2",
		title: "Classic",
		price: 1239,
		category: "Accesories",
		coverImage: {
			alt: "Poduszka Classic",
			src: "/product2.png",
		},
	},
	{
		id: "3",
		title: "Pączek",
		price: 7322,
		category: "Accesories",
		coverImage: {
			alt: "Poduszka Pączek",
			src: "/product3.png",
		},
	},
	{
		id: "4",
		title: "Bisquit",
		price: 2700,
		category: "Accesories",
		coverImage: {
			alt: "Poduszka Bisquit",
			src: "/product4.png",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-md px-10 py-10 md:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
