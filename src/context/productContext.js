import { createContext, useEffect, useState } from "react";
import axios from "axios";

export let product = createContext();

function ProductProvider(props) {
    let [data, setData] = useState([]);
    let [bookMark,setBookMark]=useState([])
let [x,setx]= useState(true)
    async function getData() {
        let res = await axios.get("http://3.65.32.166/api/v2/storefront/products?filter[product_type]=digital&filter[sub_product_type]=book");
        setData( res.data)      
    }

useEffect(() =>{

    getData()
},[]);




    return    <product.Provider value={{data,x,setx,setBookMark,bookMark}}>
        {props.children }
    </product.Provider>
}

export default ProductProvider;