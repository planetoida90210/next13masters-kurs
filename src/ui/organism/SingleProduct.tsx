import { type ProductItemType } from "@/ui/types";
import { SingleProductDescription } from "@/ui/molecules/SingleProductDescription";
import { SingleProductImage } from "@/ui/atoms/SingleProductImage";

type SingleProductProps = {
	product: ProductItemType;
};

export const SingleProduct = ({ product }: SingleProductProps) => {
	return (
		<div className="space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
			<div className="lg:w-1/2">
				<SingleProductImage
					src={product.coverImage.src}
					alt={product.coverImage.alt}
				/>
			</div>
			<div className="space-y-4 lg:w-1/2">
				<SingleProductDescription
					name={product.name}
					price={product.price}
					category={product.category}
				/>
				{"todo: add to cart button"}
			</div>
		</div>
	);
};
