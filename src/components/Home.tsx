import react from 'react';
import ProfileImage from "../assests/ProfileImage.jpg"  
export default function Home(){
    return(
       <>
       <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div style={{ width: "100%", height: "100%" }}>
          <img
            src={ProfileImage}
            alt="Home"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </div>
        </section>
       </>
    )
}