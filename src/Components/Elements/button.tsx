import React from 'react';

const Button = ({children,s}) => {
	return (
		<>
			<button className={`${s} bg-green-500 hover:bg-green-600 active:bg-green-700 py-2 px-5 rounded-lg text-white`}>{children}</button>
		</>
	);
};

export default Button;
