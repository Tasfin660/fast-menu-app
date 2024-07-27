import {
	FaDiscord,
	FaFacebookF,
	FaGithub,
	FaLink,
	FaLinkedinIn
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
	return (
		<footer className="col-span-2 mt-2 flex justify-between rounded-full px-6 py-3 shadow-shadow-app">
			<div className="flex items-center gap-8">
				<a
					href="https://www.facebook.com/Tasfin660"
					target="_blank"
					className="text-primary duration-300 hover:text-secondary">
					<FaFacebookF />
				</a>
				<a
					href="#"
					target="_blank"
					className="text-primary duration-300 hover:text-secondary">
					<FaLinkedinIn />
				</a>
				<a
					href="https://x.com/Tasfin660"
					target="_blank"
					className="text-primary duration-300 hover:text-secondary">
					<FaXTwitter />
				</a>
				<a
					href="https://github.com/Tasfin660"
					target="_blank"
					className="text-primary duration-300 hover:text-secondary">
					<FaGithub />
				</a>
				<a
					href="https://discord.com/users/513693207880663040"
					target="_blank"
					className="text-primary duration-300 hover:text-secondary">
					<FaDiscord />
				</a>
				<a
					href="https://github.com/Tasfin660/cocoa-insights"
					target="_blank"
					className="text-primary duration-300 hover:text-secondary">
					<FaLink />
				</a>
			</div>
			<p className="font-medium">
				Copyright &copy; Tasfin Hasan | Fast Menu App {new Date().getFullYear()}
				. All Rights Reserved.
			</p>
		</footer>
	);
};

export default Footer;
