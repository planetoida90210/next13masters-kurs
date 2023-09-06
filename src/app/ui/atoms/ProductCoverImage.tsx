type ProductCoverImageProps = {
	src: string;
	alt: string;
};

export const ProductCoverImage = ({ src, alt }: ProductCoverImageProps) => {
	return (
		<div className="mx-auto aspect-square overflow-hidden rounded-lg">
			<img src={src} alt={alt} width={320} height={320} />
		</div>
	);
};
