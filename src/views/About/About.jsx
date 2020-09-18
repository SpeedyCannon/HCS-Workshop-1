import React from "react";
import "./About.css";
import ProfPic from "../../assets/Gene Lee Head and Shoulder 1.jpg";

function FactItem(props) {
  const facts = ["Fun Fact","I play the Haegeum", "I say “yeah” a lot without actually knowing what’s going on", "I was born on the same day the Korean War started","I have stayed awake for 48 hours straight"];
  return (
    <div 
      onClick={() => {
        props.setActiveFactNum((props.factNum+1)%facts.length);
        props.setActiveFact(facts[(props.factNum+1)%facts.length]);
      }}
      className="timeline-item"
    >
      <h1>{"Cycle Fun Facts"}</h1>
    </div>
  );
}

export default function AboutScreen() {
  const [activeFactNum, setActiveFactNum] = React.useState(0);
  const [activeFact, setActiveFact] = React.useState('Fun Fact');

  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={ProfPic} className="intro-picture" />
        </div>
        <div className="intro-item">
          My name is Gene Lee and I'm from Reseda, CA.
        </div>
      </div>
      <div className="education-background">
        <div className="timeline-background">
          <FactItem
            factNum={activeFactNum}
            setActiveFactNum={setActiveFactNum}
            setActiveFact={setActiveFact}
          ></FactItem>
        </div>
        <div className="highlight-background">
          <h1>{activeFact}</h1>
        </div>
      </div>
    </div>
  );
}
