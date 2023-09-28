import { type ProductItem } from "../types";
import { ProductCoverDescription } from "@/ui/atoms/ProductCoverDescription";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";

type ProductListItemProps = {
	product: ProductItem;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li className=" flex flex-col items-center rounded-md bg-slate-100 p-6 transition duration-100 ease-in hover:scale-105 hover:bg-slate-200 md:p-6">
			<article>
				<ProductCoverImage
					alt={product.coverImage.alt}
					src={product.coverImage.src}
				/>
				<ProductCoverDescription product={product} />
			</article>
		</li>
	);
};
