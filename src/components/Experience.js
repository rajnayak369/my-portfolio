import { ReactComponent as WorkIcon } from "../images/work.svg";
import { ReactComponent as SchoolIcon } from "../images/school.svg";
import timelineElements from "../data/ExperienceElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import TrackVisibility from 'react-on-screen';
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  let workIconStyles = { background: "#f9c74f" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <section className="sec-exp" id="experience">
      <TrackVisibility>{({ isVisible }) => <h1 className={isVisible?"title animate__animated animate__headShake animate__slow":"title"}>Experience</h1>}</TrackVisibility>
       <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          const descriptionPoints = element.description.split('\n');
         

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              {/* Map over descriptionPoints to render each point */}
              {descriptionPoints.map((point, index) => (
                <p className="description" id="description" key={index}>{point}</p>
              ))}
              <strong className="tech-exp">Tech: {element.skills}</strong>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;