import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Button } from "./utils/Button";
import Container from "./utils/Container";
import { Input } from "./utils/Input";
import { Label } from "./utils/Label";
import { IconType } from "react-icons";
import { createElement } from "react";
import { FaReact, FaRegHeart, FaStar } from "react-icons/fa";
import { ScrollArea, ScrollBar } from "./utils/ScrollArea";
import cardImg from "@/assets/img/card.jpg";
import imgProfile from "@/assets/img/profile.png";
import { Avatar, AvatarFallback, AvatarImage } from "./utils/Avatar";
import { CiGlobe, CiMoneyBill, CiVideoOn } from "react-icons/ci";

const Radio = ({ selected=false, icon, label }: { selected?: boolean, icon: IconType, label: string }) => {
	return (
		<Label htmlFor="ugc" className={`flex gap-2 p-4  border-solid border-slate-500 rounded-lg cursor-pointer ${selected ? "border-2 bg-slate-200" : ""}`}>
			<Input type="radio" id="ugc" name="ugc" className="hidden" />
			<div className="flex items-center">
				<div className="min-w-12">
					{createElement(icon)}
				</div>
				<div className="text-lg font-semibold w-4/5">{ label }</div>
			</div>
		</Label>
	);
}

const Card = () => {
	return (
		<div className="min-w-64">
			<div className="relative">
				<img src={cardImg} alt="card-img" className="w-full h-32 object-cover object-center rounded-lg" />
				<Button size="sm" variant="ghost" className="absolute top-2 right-2">
					<FaRegHeart size={24} />
				</Button>
			</div>
			<div className="flex gap-2 items-center my-2 font-semibold">
				<Avatar size="sm">
					<AvatarImage src={imgProfile} />
					<AvatarFallback>
						A
					</AvatarFallback>
				</Avatar>
				<a href="#" className="hover:underline">Sample Name</a>
				<p className="text-sm ml-auto">Level 2</p>
			</div>
			<a href="#" className="text-lg hover:underline">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</a>
			<div className="flex gap-1 items-center my-3">
				<FaStar />
				<span className="font-semibold">4.9</span>
				<span>(1k+)</span>
			</div>
			<p className="font-semibold text-lg">From $10</p>
		</div>
	);
}

const Explore = () => {
	return (
		<Container className="mb-8">
			<div className="flex justify-between items-center mt-10">
				<h2 className="text-2xl font-semibold">Explore popular categories on Freelancers</h2>
				<div className="flex items-center gap-2">
					<a href="#" className="underline mr-3">Show All</a>
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
						selected
						icon={() => <CiVideoOn size={28} />}
						label="User Generated Content (UGC)"
					/>
					<Radio
						icon={() => <FaReact size={28} />}
						label="Logo Design"
					/>
					<Radio
						icon={() => <CiGlobe size={28} />}
						label="Website Development"
					/>
					<Radio
						icon={() => <CiMoneyBill size={28} />}
						label="Social Media Marketing"
					/>
				</div>
				<ScrollArea className="w-3/4 pb-4 shadow-inner shadow-white">
					<div className="flex gap-4">
						{ [...Array(7).keys()].map(() => {
							return <Card />;
						}) }
					</div>
					<ScrollBar orientation="horizontal" />
				</ScrollArea>
			</div>
		</Container>
	);
}
 
export default Explore;