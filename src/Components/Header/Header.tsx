import React from 'react';
import Logo from "./Logo";
import {logoUrl} from "./constans";
import Button from "../Elements/button";
import {BsBag} from 'react-icons/bs';
import Icon from "../Elements/icon";

const Header = () => {
	return (
		<header className="shadow-lg sticky top-0 z-20 bg-white">
			<div className="container xl:px-20 px-5 mx-auto flex items-center flex-row container justify-between">
				<Logo url={logoUrl}/>
				<div className="flex">
					<Button s="justify-self-end mr-10">Loggin</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
