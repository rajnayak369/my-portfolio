import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState, useEffect } from "react";
import TrackVisibility from 'react-on-screen';

const Projects = () => {

    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    let ticker;
    useEffect(() => {
        ticker = setInterval(() => {
        tick();
        }, delta);
    

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        
        let fullText = "Projects";
        let updatedText = fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (updatedText === fullText) {
            // Clear the interval
            clearInterval(ticker);
        }
    }

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      

    return (
       
        <section className="section-projects" id='projects'>
           <TrackVisibility>
                {({ isVisible }) => 
             <h1 className={isVisible? "animate__animated animate__shakeY animate__slow":""}>Projects</h1>
                } 
            </TrackVisibility>
            <div className="skill">
                <div className="container ">
               
                    <div className="row">
                        <div className="col-12">
                            <div className="skill-bx wow zoomIn">
                                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                    <div className="item">
                                    <h2>Data Extraction for Intebloc Ltd</h2>
                                        <p>• Implemented an automated process to extract information from PDF documents, leveraging both text extraction and OCR techniques, resulting in a 90% reduction in manual data entry time.</p>
                                        <p>• Used AWS Lambda for application execution and Amazon S3 buckets for file uploads, triggering respective Lambda functions upon file upload events. Employed AWS SNS to notify user along with the path for the generated Excel file.</p>
                                        <p>• Achieved a 80% reduction in client on boarding time by optimizing data extraction and workflows, facilitating quicker access to information for new client.</p>
                                        <strong>Skills: Python, AWS Lambda, Amazon S3, AWS SNS, Git</strong>
                                    </div> 
                                    <div className="item">
                                    <h2>Taste of India Web Application</h2>
                                        <p>• Developed and hosted the <a href="https://taste-of-india-uk.herokuapp.com" >Taste of India</a>food ordering web application using the Django web framework. Deployed on Heroku, achieving 99.9% up-time, ensuring robust functionality and security.</p>
                                        <p>• Implemented a user-friendly responsive interface, intuitive navigation and visual elements to enhance the food ordering experience.</p>
                                        <p>• Designed a Schema and SQL database, optimizing database queries to ensure efficient data retrieval and enhancing overall user experience.</p>
                                        <strong>Skills: Django, Python, JavaScript, Bootstrap, Git, Heroku, MySQL</strong>
                                    </div> 
                                    <div className="item">
                                    <h2>Tech Curious Minds Blog and Chat Room</h2>
                                        <p>• Developed a web application featuring tech blogs, using Node.js and Express.js as the back-end framework for routing and middleware management.</p>
                                        <p>• Designed inter active user interface with React and Incorporated user authentication, listviewing, real-time notifications.</p>    
                                        <p>• Implemented a real-time chat room using Socket.IO, enabling simultaneous participation of users in tech discussions.</p>
                                        <strong>Skills: Node.js, Express, JavaScript, Bootstrap, Git, MongoDB</strong>
                                    </div>  
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    )

}

export default Projects;