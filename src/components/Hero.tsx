import Container from "./utils/Container";
import imgHero from "@/assets/img/hero.jpg";
import { Button } from "./utils/Button";

const RecommendationCard = () => {
	return (
		<div className="bg-white rounded-xl w-full p-4 shadow-lg">
			<p className="capitalize text-sm text-gray-400 font-semibold">Recommended for you</p>
			<div className="flex items-center gap-4 mt-2">
				<div className="rounded-full bg-slate-100 flex justify-center items-center w-12 h-12">
					<span className="material-symbols-outlined text-2xl">description</span>
				</div>
				<div>
					<p className="text-lg font-semibold">Post a project brief</p>
					<p>Get tailored offers for your needs.</p>
				</div>
				<Button
					radius="lg"
					size="lg"
					variant="outline"
					className="ml-auto text-md"
				>
					Get Started
				</Button>
			</div>
		</div>
	);
}

const Hero = () => {
	return (
		<div className="my-2 relative">
			<img src={imgHero} alt="hero-image" className="w-full h-48 object-cover absolute top-0 left-0 -z-10" />
			<div className="w-11/12 mx-auto text-white flex justify-between pt-8 pb-12">
				<h2 className="text-3xl font-semibold">Welcome to Freelancers, tony</h2>
				<p className="text-lg font-semibold">Made on Freelancers by Katarzyna</p>
			</div>
			<Container className="flex gap-6">
				<RecommendationCard />
				<RecommendationCard />
			</Container>
			
		</div>
	);
}
 
export default Hero;