import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import my_pic from "../images/my-photo.jpeg";
import navIcon1 from "../images/nav-icon1.svg"
import navIcon2 from "../images/nav-icon2.svg"
import navIcon3 from "../images/nav-icon3.svg"


const Home = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = [ "Software Developer", "Backend Developer", "Full-Stack Developer" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
        } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(400);
        }
    }

    return (
        <section className="banner" id="home">
            <Container className="home-container">
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7} className="col-intro">
                        <h1>Hi!  I'm Sairaj Naik</h1>
                        <span className="tagline"> <span className="msc-tag">MSc Information Technology</span>  | {text}</span>
                        <p>A highly motivated software engineer with a Master’s degree in Information Technology and 3.5 years of experience at working in Agile environments to develop high-performance and reliable systems. Proficient in Java, Python and React with a strong foundation in building scalable backend systems using microservices architecture. Skilled in both SQL and NoSQL databases.</p>
                        <p><strong className="tagline tagline-skills">Skills:</strong> Java, Python, Django, React, JavaScript, DSA, AWS, Problem solving, System design, Design patterns, SQL, DBMS, Redis, Git.</p>
                        <p><strong className="tagline tagline-skills">Certifications:</strong> <a href="https://www.credly.com/badges/a432cccd-62fe-4af7-a3e7-a53e41a70cb8/public_url">AWS CCP</a>, <a href="https://coursera.org/share/1df0c9d2c4ba9d93ce5abed9e4e579b4">React Coursera</a></p>
                        <div className="div-btns">
                            <button onClick={() =>  window.location.href = 'https://publuu.com/flip-book/462141/1039952' } className="btn-resume">SEE MY RESUME </button>
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/sairaj-naik-08713723b/"><img src={navIcon1} alt="" /></a>
                                <a href="https://github.com/rajnayak369"><img src={navIcon2} alt="" /></a>
                                <a href="https://www.instagram.com/sairaj_naik/"><img src={navIcon3} alt="" /></a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className="my-img" src={my_pic} alt="Header Img"/>   
                    </Col>
                </Row>
            </Container>
        </section>

    );
}

export default Home;