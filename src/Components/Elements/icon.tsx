import React from 'react';

const Icon = ({children,s}) => {
	return (
		<span className={`self-center text-2xl cursor-pointer ${s}`}>
			{children}
		</span>
	);
};

export default Icon;
