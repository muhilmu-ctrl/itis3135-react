import { useState,useEffect } from "react"

export default function Introductions(){
    const [introData,setIntroData] = useState([]);
    const [error,setError] = useState(null);
    useEffect (() =>{
        fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
        .then((response) =>{
            if(response.ok){
                return response.json();
            }else{
                throw new Error(response.status);
            }
        })
        .then((data) => setIntroData(data))
        .catch((error) => setError(error.message));
    }, []);
    return(
        <>
        <h2>intros</h2>
        <p>{JSON.stringify(introData)}</p>
        {error == null ? "" : <p>Error Code: {error}</p>}
        {
            introData.map((data,index) => {
                <article key={index}>
                    <h3>{data}</h3>
                </article>
            })
        }
        </>
    )

}