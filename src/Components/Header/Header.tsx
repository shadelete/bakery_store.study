import React from 'react';
import Logo from "./Logo";
import {logoUrl} from "./constans";
import Button from "../Elements/button";

const Header = () => {
	return (
		<header>
			<div className="container xl:px-20 px-5 mx-auto flex items-center flex-row container justify-between">
				<Logo url={logoUrl}/>
				<Button s="justify-self-end">Loggin</Button>
			</div>
		</header>
	);
};

export default Header;
