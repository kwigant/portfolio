import { projectData } from "@/constants/types";
import { Title } from "@mantine/core";
import Image from "next/image";
import projectStyles from "@/styles/project.module.css";
import { useMediaQuery } from "@mantine/hooks";

export default function ProjectHeader(props: projectData) {
  const matches = useMediaQuery('(min-width: 480px)');
  
if (props.id)
  return (
    <div className={matches ? "row" : "column"} style={{ alignItems: 'center', marginTop: matches ? 48 : 24, marginBottom: matches ?0 : 24, }}>
      <Image width={172} height={172} alt={props.title} src={props.img} />
      <div className="column" style={{ marginLeft: matches ? 48 : 0 }}>
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
