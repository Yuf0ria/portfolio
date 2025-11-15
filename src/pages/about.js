import"./css/about.css";
import Test from "./img/TestIMG.jpg"

console.log(Test);
function About (){
    return (
        <body>
            <div className="header-container">
                <h1 className="about-h1">
                    welcome to the <span className="h1-span"> Workshop!</span>
                    <p className="about-h1-p">
                        My 2D Game artist portfolio for the year 2025
                    </p>
                </h1>
            </div>
            <div className="about-container">
                <div className="about-me">
                    <h4 className="about-me-h4">
                        FAQs
                    </h4>
                    <p className="about-p">
                        Lorem ipsum
                    </p>
                </div>
                <div className="about-me">
                    <h4 className="about-me-h4">
                       Socials
                    </h4>
                    <p className="about-p">
                        Lorem ipsum
                    </p>
                </div>
                <div className="about-me">
                    <h4 className="about-me-h4">
                        Support
                    </h4>
                    <p className="about-p">
                        Lorem ipsum
                    </p>
                </div>
            </div>
            
        </body>
    );
};

export default About;