import React,{useState} from 'react';
import Icon from "./icon";
import {AiOutlinePlusSquare} from "react-icons/ai";
import Modal from "./modal";

const Item = ({props,modal,el}) => {


	return (
		<div
			className="basis-1/4 shadow-lg border-slate-500 p-5 hover:shadow-2xl cursor-pointer"
			onClick={()=> {
				el(props);
				modal(true)
			}}
		>
			<div className="relative">
				<Icon children={<AiOutlinePlusSquare/>} s="absolute top-0 right-0 p-5 text-gray-500 hover:text-gray-700"/>
				<img src={props.image} alt=""/>
			</div>
			<div className="flex flex-col text-left px-5">
				<span className="text-gray-700">$ {props.price}</span>
				<span className="pt-2 text-gray-500 font-extralight">{props.name}</span>
			</div>
		</div>
	);
};

export default Item;
