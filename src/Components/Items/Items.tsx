import React, {useState,useEffect} from "react";
import {itemsAPI} from "../../api/commands";
import Icon from "../Elements/icon";
import { AiOutlinePlusSquare } from 'react-icons/ai';
import Item from "../Elements/Item";

interface itemsList {
	name: string,
	price: number,
	description: string,
	category: string,
	image: string
}

export default function Items() {

	const [item, itemsPost] = useState<itemsList[]>([]);

	useEffect(()=>{
		itemsAPI.getItems().then(res => {
			itemsPost(res)
		}).catch(res=> console.error('items not loaded', res))
	})

	return (
		<section>
			<div className="grid grid-cols-4 flex-wrap container mx-auto px-20 gap-3">
				{item.map((el:any) => (
					<Item key={el.id} props={el}/>
				))}
			</div>
		</section>
	)
}
