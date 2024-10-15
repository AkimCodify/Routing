import React from "react";
import './Section.css'
import img3 from '../../assets/img3.png'
import img2 from '../../assets/img2.png'
import img1 from '../../assets/img3.png'

const Section = () => {
    return (
       <div className="Section">
            <h1 className="title">About the event</h1>
            <div className="box">
                <div className="wrap">
                    <h2 className="suptitle">Rebuilding the society</h2>
                    <p className="text">Burning Man is a network of people inspired by the values reflected in the <br /> Ten Principles and united in the pursuit of a more creative and connected <br /> existence in the world. Throughout the year we work to build Black Rock <br /> City, home of the largest annual Burning Man gathering, and nurture the <br /> distinctive culture emerging from that experience. </p>
                </div>
                <div className="wrap">
                    <h2 className="suptitle">This drives us</h2>
                    <p className="text">Burning Man Project will bring experiences to people in grand, <br /> awe-inspiring and joyful ways that lift the human spirit, address social <br /> problems, and inspire a sense of culture, community, and civic <br /> engagement. Burning Man provides infrastructural tools and frameworks <br /> to support local communities in applying the Ten Principles through six <br /> interconnected program areas, including Arts, Civic Involvement, Culture, <br /> Education, Philosophical Center, and Social Enterprise.</p>
                </div>
            </div>
            <div className="img_wrap">
                <img src={img1} alt="img1" />
                <img src={img2} alt="img2" />
                <img src={img3} alt="img3" />
            </div>
       </div>
    )
}

export default Section