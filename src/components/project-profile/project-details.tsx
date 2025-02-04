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
            <Title className="title-thin-small">Deliverables</Title>
            <div>{parse(props.projectDetails.deliverables)}</div>
          </div>
          <div className={projectStyles["date"]}>
            <Title className="title-thin-small">Date</Title>
            <div style={{ marginBottom: 24 }}>{props.projectDetails.date}</div>
            <Title className="title-thin-small">My Role</Title>
            <div>{props.projectDetails.role}</div>
          </div>

          <div className={projectStyles["stack"]}>
            <Title className="title-thin-small">Tech Stack</Title>
            <div style={{ marginBottom: 24 }}>
              {props.projectDetails.techStack.map((t, i) => (
                <div key={i}>{t}</div>
              ))}
            </div>

            {props.projectDetails.designStack && (
              <Title className="title-thin-small">Design Stack</Title>
            )}
            <div>
              {props.projectDetails.designStack &&
                props.projectDetails.designStack.map((t, i) => (
                  <div key={i}>{t}</div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
}
