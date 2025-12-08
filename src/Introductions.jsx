import { useState,useEffect } from "react"

export default function Introductions(){
    const [introData,setIntroData] = useState([]);
    const [error,setError] = useState(null);
    const [nameSearch, setNameSearch] = useState("");
    const [displayName, setDisplayName] = useState(true);
    const [displayMascot, setDisplayMascot] = useState(true);
    const [displayImage, setDisplayImage] = useState(true);
    const [displayPersonalStatement, setDisplayPersonalStatement] = useState(true);
    const [displayBackgrounds, setDisplayBackgrounds] = useState(true);
    const [displayCourses, setDisplayCourses] = useState(true);
    const [displayExtra, setDisplayExtra] = useState(true);
    const [displayQuote, setDisplayQuote] = useState(true);
    const [displayLinks, setDisplayLinks] = useState(true);
    const [showSlideshow, setShowSlideshow] = useState(false);
    const [indexOfSlideshow, setIndexOfSlideshow] = useState(0);

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

    const filteredIntroductionData = introData.filter((data) => {
        if (nameSearch === "") return true;
        const fullStudentName = `${data.name.first} ${data.name.middleInitial}. "${data.name.preferred}" ${data.name.last}`;
        return fullStudentName.toLowerCase().includes(nameSearch.toLowerCase());
    });

    function renderedData(data,key){
        return (
        <article key={key}>
            <h3>
            {
            displayName && 
            `${data.name.first} ${" "}
            ${data.name.middleInitial ? data.name.middleInitial + " " : ""} ${" "}
            ${data.name.preferred ? data.name.preferred + " " : ""} ${" "}
            ${data.name.last} ${" "}`
            }
            {displayName && displayMascot && data.divider} {" "}
            {displayMascot && data.mascot}
            </h3>
            {displayImage &&(
            <figure>
                <img src={"https://dvonb.xyz" + data.media.src} alt="#"/>
            </figure>
            )}

            {displayPersonalStatement &&(
                <p>{data.personalStatement}</p>
            )}
            {displayBackgrounds && (<ul>
                <li><strong>Personal Background: </strong>{data.backgrounds.personal}</li>
                <li><strong>Professional Background:</strong>{data.backgrounds.professional}</li>
                <li><strong>Academic Background: </strong>{data.backgrounds.academic}</li>
                <li><strong>Background in this subject: </strong>{data.backgrounds.subject}</li>
                <li><strong>Primary Computer Platform: </strong></li>
            </ul>)}

            {displayCourses &&(<ul>
                <li><strong>Courses I am Taking & Why:</strong></li>
                <li>
                    <ul>
                        {
                            data.courses.map((course,index) =>
                            <li key={index}><strong>{course.dept} {course.num} - {course.name}</strong>: {course.reason}</li>)
                        }
                    </ul>
                </li>
            </ul>)}

            {displayExtra &&(<li><strong>Fun Fact: </strong>{data.funFact}</li>)}

            {displayQuote &&(<p><em>{data.quote.text}</em>
            <br/>
            - {data.quote.author}
            </p>)}
            {displayLinks &&(
            <>
            <a href={data.links.charlotte}>CLT Web</a> {data.divider} 
            <a href={data.links.github}>GitHub</a> {data.divider} 
            <a href={data.links.githubio}>GitHub.io</a> {data.divider} 
            <a href={data.links.linkedin}>LinkedIn</a>
            </>
            )}
            <br/>
            <br/>
        </article>
        )
    }

    return(
        <>
        <h2>Introductions</h2>
        {/* <p>{JSON.stringify(introData)}</p> */}

        <label>
            Search for Student:&nbsp;&nbsp;
            <input type="text" onChange={(event) => setNameSearch(event.target.value)}></input>
        </label>
        <section>
            <h3>Selected Filters</h3>
            <label htmlFor="">
                Name:
                <input type="checkbox" checked={displayName} onClick={() => setDisplayName(!displayName)}></input>
            </label>
            <label htmlFor="">
                &nbsp;&nbsp;&nbsp;&nbsp;Mascot:
                <input type="checkbox" checked={displayMascot} onClick={() => setDisplayMascot(!displayMascot)}></input>
            </label>
            <label>
                &nbsp;&nbsp;&nbsp;&nbsp;Image:
                <input type="checkbox" checked={displayImage} onClick={() => setDisplayImage(!displayImage)}></input>
            </label>
            <label>
                &nbsp;&nbsp;&nbsp;&nbsp;Personal Statement:
                <input type="checkbox" checked={displayPersonalStatement} onClick={() => setDisplayPersonalStatement(!displayPersonalStatement)}></input>
            </label>
            <label>
                &nbsp;&nbsp;&nbsp;&nbsp;Backgrounds:
                <input type="checkbox" checked={displayBackgrounds} onClick={() => setDisplayBackgrounds(!displayBackgrounds)}></input>
            </label>
            <label>
                &nbsp;&nbsp;&nbsp;&nbsp;Courses:
                <input type="checkbox" checked={displayCourses} onClick={() => setDisplayCourses(!displayCourses)}></input>
            </label>
            <label>
                &nbsp;&nbsp;&nbsp;&nbsp;Extra:
                <input type="checkbox" checked={displayExtra} onClick={() => setDisplayExtra(!displayExtra)}></input>
            </label>
            <label>
                &nbsp;&nbsp;&nbsp;&nbsp;Quote:
                <input type="checkbox" checked={displayQuote} onClick={() => setDisplayQuote(!displayQuote)}></input>
            </label>
            <label>
                &nbsp;&nbsp;&nbsp;&nbsp;Links:
                <input type="checkbox" checked={displayLinks} onClick={() => setDisplayLinks(!displayLinks)}></input>
            </label>
            <br></br>
            <button onClick={() => setShowSlideshow(!showSlideshow)}>
                {showSlideshow ? "View All" : "View Slideshow"}
            </button>
        </section>

        {error == null ? "" : <p>Error Code: {error}</p>}
        {
            showSlideshow
            ?
            (<>
            <button onClick={() => indexOfSlideshow - 1 < 0 ? setIndexOfSlideshow(filteredIntroductionData.length - 1) : setIndexOfSlideshow(indexOfSlideshow - 1)}>
                        Previous
                    </button>
                    <button onClick={() => indexOfSlideshow + 1 >= filteredIntroductionData.length ? setIndexOfSlideshow(0) : setIndexOfSlideshow(indexOfSlideshow + 1)}>
                        Next
                    </button>
                    <input
                        id={"slider"}
                        type="range"
                        max={filteredIntroductionData.length - 1}
                        min={0}
                        step={1}
                        onChange={(event) =>
                            setIndexOfSlideshow(event.target.value)
                        }
                        value={indexOfSlideshow}
                    />
                    {renderedData(filteredIntroductionData[indexOfSlideshow],indexOfSlideshow)}
            </>)
            :  (filteredIntroductionData.map((data,i) => renderedData(data,i)))
              
        }
        </>
    );

}