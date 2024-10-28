import { ReactNode } from "react";
import { cn } from "../../utils";

const Container = ({ children, className }: { children: ReactNode, className?: string }) => {
	return (
		<div className={cn("w-11/12 max-w-screen-xl mx-auto", className ?? "")}>
			{ children }
		</div>
	);
}

export default Container;