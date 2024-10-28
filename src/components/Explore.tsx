import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Button } from "./ui/Button";
import Container from "./ui/Container";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { IconType } from "react-icons";
import { FaReact, FaRegHeart, FaStar } from "react-icons/fa";
import { ScrollArea, ScrollBar } from "./ui/ScrollArea";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { CiGlobe, CiMoneyBill, CiVideoOn } from "react-icons/ci";
import { cn } from "../utils";
import { Dispatch, useState } from "react";

type RadioProps = {
	Icon: IconType;
	label: string;
	id: string;
	selectedCategory: string;
	setSeletedCategory: Dispatch<string>;
};

const Radio = ({
	Icon,
	label,
	id,
	selectedCategory,
	setSeletedCategory,
}: RadioProps) => {
	return (
		<Label
			htmlFor={id}
			className={cn([
				"flex gap-2 p-4 outline outline-0 outline-muted-text rounded-lg cursor-pointer",
				selectedCategory === id ? "outline-2 bg-muted" : "",
			])}
		>
			<Input
				type="radio"
				id={id}
				name="ugc"
				className="hidden"
				onChange={() => setSeletedCategory(id)}
			/>
			<div className="flex items-center">
				<div className="min-w-12">
					<Icon size={28} />
				</div>
				<div className="text-lg font-semibold w-4/5">{label}</div>
			</div>
		</Label>
	);
};

const Card = () => {
	return (
		<div className="min-w-64">
			<div className="relative">
				<img
					src="/assets/img/card.jpg"
					alt="card-img"
					className="w-full h-32 object-cover object-center rounded-lg"
				/>
				<Button
					size="sm"
					className="absolute top-2 right-2 bg-transparent hover:bg-transparent"
				>
					<FaRegHeart size={24} />
				</Button>
			</div>
			<div className="gap-2 items-center font-semibold my-2 flex">
				<Avatar size="sm">
					<AvatarImage src="/assets/img/profile.png" />
					<AvatarFallback>A</AvatarFallback>
				</Avatar>
				<a href="#" className="hover:underline">
					Sample Name
				</a>
				<p className="text-sm ml-auto">Level 2</p>
			</div>
			<a href="#" className="text-lg hover:underline">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
			</a>
			<div className="flex gap-1 items-center my-3">
				<FaStar />
				<span className="font-semibold">4.9</span>
				<span>(1k+)</span>
			</div>
			<p className="font-semibold text-lg">From $10</p>
		</div>
	);
};

const Explore = () => {
	const [selectedCategory, setSeletedCategory] = useState("ugc");

	return (
		<Container className="mb-8">
			<div className="flex justify-between items-center mt-10">
				<h2 className="text-2xl font-semibold">
					Explore popular categories on Freelancers
				</h2>
				<div className="flex items-center gap-2">
					<a href="#" className="underline mr-3">
						Show All
					</a>
					<Button disabled variant="ghost" radius="full">
						<SlArrowLeft />
					</Button>
					<Button variant="surface" radius="full">
						<SlArrowRight />
					</Button>
				</div>
			</div>
			<div className="py-4 flex gap-4">
				<div className="flex flex-col w-1/4">
					<Radio
						Icon={CiVideoOn}
						label="User Generated Content (UGC)"
						id="ugc"
						selectedCategory={selectedCategory}
						setSeletedCategory={setSeletedCategory}
					/>
					<Radio
						Icon={FaReact}
						label="Logo Design"
						id="logo"
						selectedCategory={selectedCategory}
						setSeletedCategory={setSeletedCategory}
					/>
					<Radio
						Icon={CiGlobe}
						label="Website Development"
						id="web"
						selectedCategory={selectedCategory}
						setSeletedCategory={setSeletedCategory}
					/>
					<Radio
						Icon={CiMoneyBill}
						label="Social Media Marketing"
						id="marketing"
						selectedCategory={selectedCategory}
						setSeletedCategory={setSeletedCategory}
					/>
				</div>
				<ScrollArea className="w-3/4 pb-4">
					<div className="gap-4 flex">
						{[...Array(7).keys()].map(() => {
							return <Card />;
						})}
					</div>
					<ScrollBar orientation="horizontal" />
				</ScrollArea>
			</div>
		</Container>
	);
};

export default Explore;
