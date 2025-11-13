import"./css/about.css";
import Test from "./img/TestIMG.jpg"

console.log(Test);
function About (){
    return (
        <body>
            <div>
                <h1 className="about-h1">
                    Hi, <span className="h1-span">I'm Dani!</span>
                </h1>
            </div>
            <div className="about-Img">
                <img src={Test}/>
            </div>
        </body>
    );
};

export default About;