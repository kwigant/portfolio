import { projectData } from "@/constants/types";
import { Title } from "@mantine/core";
import Image from "next/image";
import projectStyles from "@/styles/project.module.css";

export default function ProjectHeader(props: projectData) {
  return (
    <div className="row" style={{ marginTop: 48, marginBottom: 48, }}>
      <Image width={172} height={172} alt={props.title} src={props.img} />
      <div className="column" style={{ marginLeft: 48 }}>
        <div className="row">
          <Title className="title-large">
            {props.title}
          </Title>
          {props.tags && props.tags.map((t, i) => (
            <div className={projectStyles['tag-orange']} key={i}>
              {t}
            </div>
          ))}
        </div>
        <div>{props.description}</div>
      </div>
    </div>
  );
}
