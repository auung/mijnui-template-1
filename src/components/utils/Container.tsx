import { ReactNode } from "react";

const Container = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
	return (
		<div className={`w-11/12 max-w-screen-xl mx-auto ${className}`}>
			{ children }
		</div>
	);
}

export default Container;