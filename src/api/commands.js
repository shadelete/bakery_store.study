import axios from "axios";

const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/shadelete/bakery_store.study/',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})

export const itemsAPI = {
    getItems() {
        return instance.get(`db`)
            .then((res)=> res.data.items )
            .catch((res) => console.error(res))
    }
}