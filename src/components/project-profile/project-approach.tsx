import { projectData } from "@/constants/types";
import styles from "@/styles/project.module.css";
import parse from "html-react-parser";
import { Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function ProjectApproach(props: projectData) {
  const matches = useMediaQuery("(min-width: 480px)");

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
  if (props.approach)
    return (
      <div className={styles['profile-spacing']} style={{marginBottom: 24}}>
        <Title className="title">{getTitle()}</Title>
        <div
          className={matches ? "justified-row" : "column"}
          style={{ marginBottom: 0, alignItems: 'flex-start' }}
        >
          {props.approach.map((a, i) => {
            return (
              <div key={i} className="column" style={{ maxWidth: 320 }}>
                <div className={styles[`approach-number-${i + 1}`]}>{i + 1}</div>
                <div className={styles[`approach-text-${i + 1}`]}>{a.title}</div>
                <div style={{marginBottom: matches ? 0 : 48}}>{parse(a.description)}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
}
