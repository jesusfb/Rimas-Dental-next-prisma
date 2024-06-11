import Image from "next/image";
import Link, { LinkProps } from "next/link";

import theeth from "@/assets/icons/3D/logo.svg";
interface Props extends LinkProps {}

export const Logo = ({ href = "/", ...props }: Props) => {
	return (
		<Link {...props} className="flex items-center justify-center" href={href}>
			<Image src={theeth} alt="theeth" sizes={"100"} className="size-10" />
			<p className="ml-2 font-grotesk text-xl font-bold text-main-400 md:text-2xl">
				{`Rima's`} Dental
			</p>
		</Link>
	);
};
