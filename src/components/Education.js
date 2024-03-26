import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../images/bg-edu-left1.jpeg"; // Import your first image
import image2 from "../images/bg-edu-right.jpeg"; // Import your second image
import TrackVisibility from 'react-on-screen';


const Education = () => {
    

    return (
        <TrackVisibility>
              {({ isVisible }) => 
        <section className="section-education" id="education">
            <div className="background-images">
                <div className="image1" style={{backgroundImage: `url(${image1})`, height: '500px'}}></div>
                <div className="image2" style={{backgroundImage: `url(${image2})`, height: '500px'}}></div>
            </div>
            <div className="edu-title"><h1 className={isVisible ?"text-center animate__animated animate__rubberBand" : ""}>Education</h1></div>

            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className={isVisible?"education-block msc-block animate__animated animate__slideInLeft":"hidden"}>
                            <h2>Master Of Science In Information Technology</h2>
                            <h4>University of Aberdeen, Aberdeen</h4>
                            <div className="courses">
                                <p>Courses:</p>
                                <ul>
                                    <li><span>Software Project Management (Scrum & Agile methodologies)</span></li>
                                    <li><span>Database Management Systems (DBMS, SQL, MySQL)</span></li>
                                    <li><span>Web Development(Javascript, Node.js, Express)</span></li>
                                    <li><span>Enterprise Software Development (Python, Flask, Django, Git)</span></li>
                                </ul>
                            </div>
                            <div className="course-duration">
                                <p>Jan 2023 - Apr 2024</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                    <div className={isVisible?"education-block btech-block animate__animated animate__slideInRight":"hidden"} >
                            <h2>Master Of Science In Information Technology</h2>
                            <h4>University of Aberdeen, Aberdeen</h4>
                            <div className="courses">
                                <p>Courses:</p>
                                <ul>
                                    <li><span>Software Project Management (Scrum & Agile methodologies)</span></li>
                                    <li><span>Database Management Systems (DBMS, SQL, MySQL)</span></li>
                                    <li><span>Web Development(Javascript, Node.js, Express)</span></li>
                                    <li><span>Enterprise Software Development (Python, Flask, Django, Git)</span></li>
                                </ul>
                            </div>
                            <div className="course-duration">
                                <p>Jan 2023 - Apr 2024</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
                    </section>
}
</TrackVisibility>

    );
}

export default Education;