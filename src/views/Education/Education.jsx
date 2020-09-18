import React from "react";
import "./Education.css";

function TimeLineItem(props) {
  return (
    <div 
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveTime(props.time);
      }}
      className="timeline-item"
    >
      <h1>{props.title}</h1>
    </div>
  );
}

export default function EducationScreen() {
  const [activeTitle, setActiveTitle] = React.useState('School');
  const [activeTime, setActiveTime] = React.useState('Year');

  return (
    <div className="screen-background">
      <div className="education-background">
        <div className="timeline-background">
          <TimeLineItem
            title="Harvard University"
            time="Class of 2024"
            setActiveTitle={setActiveTitle}
            setActiveTime={setActiveTime}
          ></TimeLineItem>
          <TimeLineItem
            title="Cleveland Charter High School" 
            time="Class of 2020"
            setActiveTitle={setActiveTitle}
            setActiveTime={setActiveTime}
          ></TimeLineItem>
          <TimeLineItem
            title="Nobel Middle School"
            time="Class of 2016"
            setActiveTitle={setActiveTitle}
            setActiveTime={setActiveTime}
          ></TimeLineItem>
          <TimeLineItem
            title="Porter Ranch Community School"
            time="Class of 2013"
            setActiveTitle={setActiveTitle}
            setActiveTime={setActiveTime}
          ></TimeLineItem>
          <TimeLineItem
            title="Topeka Drive Elementary School"
            time="Class of 2013"
            setActiveTitle={setActiveTitle}
            setActiveTime={setActiveTime}
          ></TimeLineItem>
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <h3>{activeTime}</h3>
        </div>
      </div>
    </div>
  );
}
