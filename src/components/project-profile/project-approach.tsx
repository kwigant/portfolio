import { projectData } from "@/constants/types";
import styles from "../../styles/project.module.css";
import parse from "html-react-parser";
import { Title } from "@mantine/core";

export default function ProjectApproach(props: projectData) {
  function getTitle() {
    switch (props.id ) {
      case 'cx-platform':
      case 'cx-px-cloud':
      case 'xdstudio':
      case 'houseme':
        return "The Team's Approach"
    }
    return "My Approach"
  }
    return (
      <div>
        <Title className="title">{getTitle()}</Title>
        <div
          className="justified-row"
          style={{ marginBottom: 48 }}
        >
          {props.approach.map((a, i) => {
            return (
              <div key={i} className="column" style={{ maxWidth: 320 }}>
                <div className={styles[`approach-number-${i + 1}`]}>{i + 1}</div>
                <div className={styles[`approach-text-${i + 1}`]}>{a.title}</div>
                <div>{parse(a.description)}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
}
