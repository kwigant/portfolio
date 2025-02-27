import { projectData } from "@/constants/types";
import { Title } from "@mantine/core";
import parse from "html-react-parser";
import projectStyles from "@/styles/project.module.css";
export default function ProjectDetails(props: projectData) {
  if (props.projectDetails)
    return (
      <div className={projectStyles["profile-spacing"]}>
        <Title className="title">Project Details</Title>
        <div className={projectStyles["details-grid"]}>
          <div className={projectStyles["deliverables"]}>
            <Title className={projectStyles["approach-text-1"]}>Deliverables</Title>
            <div className={projectStyles["parse-container"]}>{parse(props.projectDetails.deliverables)}</div>
          </div>
          <div className={projectStyles["date"]}>
            <Title className={projectStyles["approach-text-2"]}>Date</Title>
            <p className={projectStyles["parse-container"]} style={{ marginBottom: 24 }}>{props.projectDetails.date}</p>
            <Title className={projectStyles["approach-text-2"]}>My Role</Title>
            <p className={projectStyles["parse-container"]}>{props.projectDetails.role}</p>
          </div>

          <div className={projectStyles["stack"]}>
            <Title className={projectStyles["approach-text-3"]}>Tech Stack</Title>
            <div className={projectStyles["parse-container"]} style={{ marginBottom: 24 }}>
              {props.projectDetails.techStack.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>

            {props.projectDetails.designStack && (
              <Title className={projectStyles["approach-text-3"]}>Design Tools</Title>
            )}
            <div className={projectStyles["parse-container"]}>
              {props.projectDetails.designStack &&
                props.projectDetails.designStack.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
}
