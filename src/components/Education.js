import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';


const Education = () => {
    

    return (
        
                <section className="banner sec-education" id="education">
                <Container className="home-container">
                    <Row className="aligh-items-center">
                        <Col xs={12} md={5} >
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className="title-edu" >
                                <h1 className={isVisible?"animate__animated animate__swing animate__slow":""}>Education</h1>
                            </div>
                                        }
                        </TrackVisibility>
                        </Col>
                        <Col xs={12} md={7} className="col-edu" >
                            <div className="block-edu msc-div">
                            <h2>Master Of Science In Information Technology</h2>
                                <span className="tagline edu-tag"> University of Aberdeen, Aberdeen </span>
                                <div className="courses">
                                    <p>Courses:</p>
                                    <ul>
                                        <li><span>Software Project Management (Scrum & Agile methodologies)</span></li>
                                        <li><span>Database Management Systems (DBMS, SQL, MySQL)</span></li>
                                        <li><span>Web Development(Javascript, Node.js, Express)</span></li>
                                        <li><span>Enterprise Software Development (Python, Flask, Django, Git)</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="block-edu bt-div">
                            <h2>B.Tech in Computer Science Engineering</h2>
                                <span className="tagline edu-tag"> Indian Institute of Technology, Roorkee </span>
                                <div className="courses">
                                    <p>Courses:</p>
                                    <ul>
                                        <li><span>Introduction to programming (Java, OOPS Concepts)</span></li>
                                        <li><span>Advanced Programming (DSA, Dynamic programming)</span></li>
                                        <li><span>Web Development(Javascript, Node.js, Express)</span></li>
                                    </ul>
                                </div>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </section>

    );
}

export default Education;