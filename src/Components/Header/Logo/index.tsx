import React from 'react';

const Logo = ({url}) => {
	return (
		<>
			<img src={url} className="h-20" alt={url && 'logo'}/>
		</>
	);
};

export default Logo;
