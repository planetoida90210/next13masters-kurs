export default function SingleProductLoading() {
	return (
		<div
			aria-busy={true}
			className="space-y-6 lg:flex lg:space-x-6 lg:space-y-0"
		>
			<div className="h-[480px] rounded-md bg-gray-200 lg:w-1/2"></div>
			<div className="space-y-4 lg:w-1/2">
				<div className="h-8 w-3/4 rounded-md bg-gray-200"></div>{" "}
				{/* Name */}
				<div className="h-5 w-1/2 rounded-md bg-gray-200"></div>{" "}
				{/* Category */}
				<div className="h-6 w-1/4 rounded-md bg-gray-200"></div>{" "}
				{/* Price */}
			</div>
		</div>
	);
}
