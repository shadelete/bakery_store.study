import React from 'react';

const Modal = ({props,modal}) => {
	return (
		<div
			className="flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 z-100 bg-modal"
			onClick={()=>{modal(false)}}
		>
				<div className="fixed flex bg-white rounded-lg justify-items-center items-center p-10 z-100">

					<div className="w-3/6">
						<img className="w-5/6" src={props.image} alt={props.name}/>
					</div>

					<div className="flex flex-col w-3/6 self-start items-start">
						<p>{props.name}</p>
						<p>{props.desc}</p>
						<span>{props.price}</span>
					</div>

				</div>
		</div>
	);
};

export default Modal;
