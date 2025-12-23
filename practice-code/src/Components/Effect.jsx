import { useEffect, useState } from "react";

export default function Effect() {

    const [data, setdata] = useState({});
    const [count ,setCount]=useState(0)
    useEffect(() => {
        
     fetchData();
        

    }, []);
       

    async function fetchData() {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
            const json = await data.json()
              console.log("useEffect")
            setdata(json)
            console.log(json)
        }
        catch (error) {
            error.massage;
        }

    }
console.log("just before render")

    return (<><div>{JSON.stringify(data)}
    <button onClick={()=>setCount(count+1)}>{count}</button></div></>)

}