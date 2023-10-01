"use client";
import clsx from "clsx";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
};

export const ActiveLink = <T extends string>({
	href,
	children,
	className,
	activeClassName,
	exact = false,
}: ActiveLinkProps<T>) => {
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
