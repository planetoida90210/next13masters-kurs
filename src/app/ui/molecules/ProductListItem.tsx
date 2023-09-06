import { ProductCoverDescription } from "@/app/ui/atoms/ProductCoverDescription";
import { ProductCoverImage } from "@/app/ui/atoms/ProductCoverImage";

type ProductListItemProps = {
	product: {
		title: string;
		category: string;
		price: number;
		coverImage: {
			alt: string;
			src: string;
		};
	};
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className=" flex flex-col items-center rounded-md bg-slate-100 p-6 transition duration-100 ease-in hover:bg-slate-200 md:p-6">
			<article>
				<ProductCoverImage alt={product.coverImage.alt} src={product.coverImage.src} />
				<ProductCoverDescription product={product} />
			</article>
		</li>
	);
};
