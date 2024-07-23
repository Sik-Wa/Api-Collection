import { useEffect,useState } from "react";



function useCurrencyinfor(){
    const [data,setData] = useState({});
    useEffect(()=>{
fetch(`htt://cdn.jsdelir.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
.then((res) => res.json())
.then((res) => setData(res[currency]))
    },[currency])
    console.log(data);
return data ;
}


export default useCurrencyinfor;