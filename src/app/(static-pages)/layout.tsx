// Purpose: Static layout component for static pages.

export default function StaticLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="mx-auto max-w-md text-center">{children}</div>
	);
}
