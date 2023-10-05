import Link from "next/link";
import { type ProductItemType } from "@/ui/types";
import { ProductCoverDescription } from "@/ui/molecules/ProductCoverDescription";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li
			data-testid="products-list"
			className=" flex flex-col items-center rounded-md bg-slate-100 p-6 transition duration-100 ease-in hover:scale-105 hover:bg-slate-200 md:p-6"
		>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCoverImage
						alt={product.coverImage.alt}
						src={product.coverImage.src}
					/>
					<ProductCoverDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
