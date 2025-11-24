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
        {/* <p>{JSON.stringify(introData)}</p> */}
        {error == null ? "" : <p>Error Code: {error}</p>}
        {
            introData.map((data,index) => 
                <article key={index}>
                    <h3>
                        {data.name.first} {" "}
                        {data.name.middleInitial ? data.name.middleInitial + " " : ""} {" "}
                        {data.name.preferred ? data.name.preferred + " " : ""} {" "}
                        {data.name.last} {" "}
                        {data.divider} {" "}
                        {data.mascot}
                    </h3>
                    <figure>
                        <img src={"https://dvonb.xyz" + data.media.src} alt="#"/>
                    </figure>
                    <hr/>
                    <ul>
                        <li><strong>Personal Background: </strong>{data.backgrounds.personal}</li>
                        <li><strong>Professional Background:</strong>{data.backgrounds.professional}</li>
                        <li><strong>Academic Background: </strong>{data.backgrounds.academic}</li>
                        <li><strong>Background in this subject: </strong>{data.backgrounds.subject}</li>
                        <li><strong>Primary Computer Platform: </strong></li>
                        <li><strong>Courses I am Taking & Why:</strong></li>
                        <li>
                        <ul>
                            <li><strong></strong></li>
                            <li><strong></strong></li>
                            <li><strong></strong></li>
                            <li><strong></strong></li>
                            <li><strong></strong></li>
                        </ul>
                        </li>
                    </ul>
                </article>
            )
        }
        </>
    );

}