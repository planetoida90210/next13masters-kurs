import Image from "next/image";

type SingleProductImageProps = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
};

export const SingleProductImage = ({
	src,
	alt,
	width = 480,
	height = 480,
}: SingleProductImageProps) => {
	return (
		<div className="relative mx-auto aspect-square max-w-full overflow-hidden rounded-lg">
			<Image src={src} alt={alt} width={width} height={height} />
		</div>
	);
};
