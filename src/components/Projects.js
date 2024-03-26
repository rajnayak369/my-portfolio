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
        <TrackVisibility>
        {({ isVisible }) => 
        <section className="section-projects" id='projects'>
          
             <h1 className={isVisible? "animate__animated animate__shakeY":""}>Projects</h1>
            <div className="skill">
                <div className="container ">
               
                    <div className="row">
                        <div className="col-12">
                            <div className="skill-bx wow zoomIn">
                                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                    <div className="item">
                                    <h2>Data Extraction for Intebloc Ltd</h2>
                                        <p>• Implemented an automated process to extract information from PDF documents, using both text and OCR techniques.</p>
                                        <p>• Standardised descriptions across all customers and extracted dimensions from the descriptions. Processed equipment
                                            numbers and generated multiple entries based on whether items were single or multiple.</p>
                                        <p>• Utilised AWS Lambda for executing the application, with Amazon S3 buckets utilised for file uploads triggering respec- tive Lambda functions upon file upload events. Following file processing, an Excel formatted table was generated, and
                                            users were notified upon completion of the process.</p>
                                        <strong>Skills: Python, AWS Lambda, Amazon S3, AWS SNS, Git</strong>
                                    </div> 
                                    <div className="item">
                                    <h2>Taste of India Web Application</h2>
                                        <p>• Developed and hosted the Taste of India food ordering web application using the Django web framework, ensuring robust functionality and security on Heroku <a href="https://taste-of-india-uk.herokuapp.com" >Taste of India</a>.</p>
                                        <p>• Designed a responsive and user-friendly interface, where food ordering experience made fun and easy.</p>
                                        <p>• Implemented a SQL database for seamless data storage and retrieval, enhancing the performance of the platform.</p>
                                        <strong>Skills: Django, Python, JavaScript, Bootstrap, Git, Heroku, MySQL</strong>
                                    </div> 
                                    <div className="item">
                                    <h2>Tech Curious Minds Blog and Chat Room</h2>
                                        <p>• Developed a personal blog website which features regular blogs related to tech using Node.js, Express, and Sockets.</p>
                                        <p>• Implemented a real-time chat room feature allowing multiple users to engage in tech discussions.</p>    
                                        <p>• Features include user authentication, userlist viewing, real-time user entry and exit notifications and an interactive user interface.</p>
                                        <strong>Skills: Node.js, Express, JavaScript, Bootstrap, Git, MongoDB</strong>
                                    </div>  
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        } 
        </TrackVisibility>
    )

}

export default Projects;