import Header from "./Header";
import Footer from "./Footer";

export default function Introduction(){
    return (
        <>
        <Header/>
        <h2 class="mobile-heading">Introduction</h2>
        <h2 class="mobile-heading">Muhilan Muruganandam|Magnificent Meercat</h2>
        <figure>
            <img src="images/muhilan_photo.jpeg" alt="Muhilan_Muruganandam"/>
            <figcaption><i>Muhilan Muruganandam</i></figcaption>
        </figure>
        <ul>
            <li><b>Personal Background: </b>Born in Texas, became interested in computer science after joining a coding club in middle school.</li>
            <li>Professional Background: <b>n/a</b></li>
            <li><b>Academic Background: </b>Junior at UNCC majoring in Computer Science with a concentration in Software Engineering. </li>
            <li><b>Background in this subject: </b>n/a</li>
            <li><b>Primary Computer Platform: </b> Windows Thinkpad.</li>
            <li><b>Courses I am Taking & Why:</b></li>
            <li>
            <ul>
            <li><b>ITCS 3112-001 </b>Design and Implementation of Object Oriented Systems: Concentration Elective</li>
            <li><b>ITIS 3135-053 </b>Front End Development: Major Requirement</li>
            <li><b>STAT 2122-005 </b>Intro to Probability and Statistics: Major Requirement</li>
            <li><b>ITCS 2181-004 </b>Intro to Computer Systems: Major Requirement</li>
            <li><b>ITIS 3130-001 </b>Intro to Human Centered Computing: Concentration Elective</li>
            </ul>
            </li>
            <li><b>Graduating in 2027</b></li>
            <li><b>From Texas</b></li>
        </ul>
        <Footer/>
        </>
    )
}