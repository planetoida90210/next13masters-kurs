import { ProductListItem } from "./ui/molecules/ProductListItem";

export default function Home() {
	return (
		<section className="mx-auto max-w-md px-10 py-10 md:max-w-7xl">
			<ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
				<ProductListItem
					product={{ category: "", title: "", price: 0, coverImage: { src: "", alt: "" } }}
				/>
			</ul>
		</section>
	);
}
