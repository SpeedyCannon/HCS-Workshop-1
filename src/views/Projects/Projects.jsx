import React from "react";
import Project from "../../components/Project/Project";
import Webscraper from "../../assets/webscraper.png";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      All your amazing projects will go here!
      <Project
      title="HCS-Workshop-1"
      link="https://github.com/SpeedyCannon/HCS-Workshop-1"
      source={Webscraper}
      ></Project>
      <Project
        title="HCS-Workshop-1"
        link="https://github.com/SpeedyCannon/HCS-Workshop-1"
      ></Project>
      <Project
        title="HCS-Workshop-1"
        link="https://github.com/SpeedyCannon/HCS-Workshop-1"
      ></Project>
      <Project
        title="HCS-Workshop-1"
        link="https://github.com/SpeedyCannon/HCS-Workshop-1"
      ></Project>
    </div>
  );
}
