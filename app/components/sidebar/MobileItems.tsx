"use client";
import clsx from "clsx";
import Link from "next/link";
interface MobileItemProps {
	icon: any;
	href: string;
	onClick?: () => void;
	active?: boolean;
}
const MobileItems: React.FC<MobileItemProps> = ({ active, onClick, href, icon: Icon }) => {
	const handleClick = () => {
		if (onClick) return onClick();
	};
	return (
		<Link
			href={href}
			onClick={handleClick}
			className={clsx(
				`group flex gap-x-3  p-4 text-sm leading-6 font-semibold w-full justify-center text-gray-500 hover:text-black hover:bg-gray-100`,
				active && "bg-gray-100 text-black"
			)}
		>
			<Icon className="h-6 w-6" />
			<span className="sr-only"> </span>
		</Link>
	);
};

export default MobileItems;
