import Image from "next/image";

type ProductCoverImageProps = {
	src: string;
	alt: string;
};

export const ProductCoverImage = ({
	src,
	alt,
}: ProductCoverImageProps) => {
	return (
		<div className="relative mx-auto aspect-square overflow-hidden rounded-lg ">
			<Image src={src} alt={alt} width={320} height={320} />
		</div>
	);
};
