import React from 'react';
import {BsBag} from "react-icons/bs";
import Icon from "../Elements/icon";

const Checkout = () => {
	return (
		<article className="fixed right-0 z-50 top-60">
			<div className="flex flex-col p-5 rounded-lg shadow-lg bg-green-500 hover:bg-green-600 cursor-pointer">
				<Icon children={<BsBag/>} s={'text-white'}/>
				<div className="d">
					<span className="text-xs text-white">$ 0.00</span>
				</div>
			</div>
		</article>
	);
};

export default Checkout;
