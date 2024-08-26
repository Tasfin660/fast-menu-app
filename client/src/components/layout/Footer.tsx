import { IconType } from 'react-icons';
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
		<footer className="col-span-2 mt-2 flex justify-between rounded-full bg-theme-component-bg px-6 py-3 shadow-shadow-app duration-300 dark:bg-cl-gray-neutral dark:text-text-light">
			<div className="flex items-center gap-8">
				<SocialLink link="https://facebook.com/Tasfin660" Icon={FaFacebookF} />
				<SocialLink link="#" Icon={FaLinkedinIn} />
				<SocialLink link="https://x.com/Tasfin660" Icon={FaXTwitter} />
				<SocialLink link="https://github.com/Tasfin660" Icon={FaGithub} />
				<SocialLink
					link="https://discord.com/users/513693207880663040"
					Icon={FaDiscord}
				/>
				<SocialLink link="https://fast-menu-app-two.vercel.app" Icon={FaLink} />
			</div>
			<p className="font-medium">
				Copyright &copy; Tasfin Hasan | Fast Menu App {new Date().getFullYear()}
				. All Rights Reserved.
			</p>
		</footer>
	);
};

const SocialLink = ({ link, Icon }: { link: string; Icon: IconType }) => {
	return (
		<a
			href={link}
			target="_blank"
			className="text-primary duration-300 hover:text-secondary">
			<Icon />
		</a>
	);
};

export default Footer;
