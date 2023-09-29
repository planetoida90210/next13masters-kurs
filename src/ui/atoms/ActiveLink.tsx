"use client";
import clsx from "clsx";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
	exact = false,
}: {
	href: Route;
	children: React.ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
}) => {
	const pathname = usePathname();
	const isActive = exact
		? pathname === href
		: pathname.startsWith(href);
	return (
		<Link
			href={href}
			className={clsx(className, {
				[activeClassName || ""]: isActive,
			})}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
