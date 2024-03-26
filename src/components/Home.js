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
    const toRotate = [ "Software Developer", "Backend Engineer", "UI/UX Designer" ];
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
                        <span className="tagline"> MSc Information Technology | {text}</span>
                        <p>Experienced software engineer with a Master’s degree in Information Technology and over 3.5 years of hands-on experience at working in Agile and Scrum environments to develop high-performance, reliable, and scalable systems. Proficient in Java, Python and JavaScript, with a strong foundation in building scalable backend systems using microservices architecture. Skilled in both SQL (MySQL) and NoSQL databases, including Redis and DynamoDB.</p>
                        <div className="div-btns">
                            <button onClick={() => console.log('connect')} className="btn-resume">SEE MY RESUME </button>
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