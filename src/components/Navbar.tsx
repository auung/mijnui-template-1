import { Avatar, AvatarFallback, AvatarImage } from "./utils/Avatar";
import { Button } from "./utils/Button";
import Container from "./utils/Container";
import { Input } from "./utils/Input";
import { FaSearch } from "react-icons/fa";
import imgProfile from "@/assets/img/profile.png";

const Navbar = () => {
  return (
		<nav>
			<Container className="flex items-center justify-between py-4 gap-8">
				<h1 className="text-4xl font-bold">
					<a href="#">Freelancers</a>
				</h1>
				<form action="#" className="flex gap-2 items-center grow">
					{/* <input type="text" className="border-neutral-800 border-2 border-solid" /> */}
					<Input
						type="text"
						className="w-full"
						placeholder="What services are you looking for today?"
						name="searchQuery"
					/>
					<Button>
						<FaSearch size={16} />
					</Button>
				</form>
				<div>
					<a href="#">Fiverr Pro</a>
				</div>
				<div className="flex gap-3 items-center">
					<a href="#" className="material-symbols-outlined">notifications</a>
					<a href="#" className="material-symbols-outlined">mail</a>
					<a href="#" className="material-symbols-outlined">favorite</a>
				</div>
				<div className="flex gap-4 items-center">
					<a href="#">Orders</a>
					<Avatar size="md">
						<AvatarImage src={imgProfile} />
						<AvatarFallback>
							A
						</AvatarFallback>
					</Avatar>
				</div>
			</Container>
			<Container>
				<ul className="flex gap-6 text-lg">
					<li><a href="#">Graphic & Design</a></li>
					<li><a href="#">Programming & Tech</a></li>
					<li><a href="#">Digital Marketing</a></li>
					<li><a href="#">Video & Animation</a></li>
					<li><a href="#">Writing & Translation</a></li>
					<li><a href="#">Business</a></li>
					<li><a href="#">Finance</a></li>
					<li><a href="#">AI Services</a></li>
				</ul>
			</Container>
		</nav>
  );
}
 
export default Navbar;