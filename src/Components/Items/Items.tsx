import React, {useState,useEffect} from "react";
import {itemsAPI} from "../../api/commands";
import Icon from "../Elements/icon";
import { AiOutlinePlusSquare } from 'react-icons/ai';
import Item from "../Elements/Item";
import Modal from "../Elements/modal";

interface itemsList {
	name: string,
	price: number,
	description: string,
	category: string,
	image: string
}

export default function Items() {


	const [modalState, setModalState] = useState(false);
	const [item, itemsPost] = useState<itemsList[]>([]);
	const [current, setCurrent] = useState<itemsList[]>([]);

	const setModalBoolean = (boolean) => {
		setModalState(boolean)
	}



	useEffect(()=>{
		itemsAPI.getItems().then(res => {
			itemsPost(res)
		}).catch(res=> console.error('items not loaded', res))
	})
	return (
		<section>
			<div className="grid grid-cols-4 flex-wrap container mx-auto px-20 gap-3">
				{item.map((el:any) => (
					<Item
						key={el.id}
						props={el}
						modal={setModalBoolean}
						el={setCurrent}
					/>

				))}
			</div>
			{ modalState && <Modal modal={setModalBoolean} props={current}/>}
		</section>
	)
}
