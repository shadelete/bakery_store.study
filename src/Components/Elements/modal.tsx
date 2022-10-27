import React from 'react';

const Modal = ({children,props}) => {
	return (
		<div className="absolute top-0 bottom-0 right-0 left-0">
			{children}
		</div>
	);
};

export default Modal;
