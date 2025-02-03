import { projectData } from "@/constants/types";
import { Title } from "@mantine/core";
import parse from "html-react-parser";
import projectStyles from "@/styles/project.module.css";
export default function ProjectDetails(props: projectData) {
  if (props.projectDetails)
    return (
      <div >
        <Title className="title">Project Details</Title>
        <div className={projectStyles['details-grid']}>
          <div className={projectStyles["deliverables"]}>
            <Title order={4}>Deliverables</Title>
            <div>{parse(props.projectDetails.deliverables)}</div>
          </div>
          <div className={projectStyles["date"]}>
            <Title order={4}>Date</Title>
            <div>{props.projectDetails.date}</div>
            <Title order={4}>My Role</Title>
            <div>{props.projectDetails.role}</div>
          </div>

          <div className={projectStyles["stack"]}>
            <Title order={4}>Tech Stack</Title>
            <div>
              {props.projectDetails.techStack.map((t, i) => (
                <div key={i}>{t}</div>
              ))}
            </div>

            <Title order={4}>Design Stack</Title>
            <div>
              {props.projectDetails.designStack.map((t, i) => (
                <div key={i}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}
