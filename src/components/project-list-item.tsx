import { project } from "@/constants/types";
import { Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import projectStyles from "@/styles/project.module.css";
import { useMediaQuery } from "@mantine/hooks";

export default function ProjectListItem(props: project) {
  const matches = useMediaQuery("(min-width: 480px)");

  return (
    <Link
      href={`/projects/${props.id}`}
      className={projectStyles["project-list-item"]}
    >
      <Image
        width={matches ? 180 : 130}
        height={matches ? 180 : 130}
        alt={props.title}
        src={props.img}
      />
      <div className="column" style={{ marginLeft: matches ? 48 : 0, marginRight: matches ? 48 : 0 }}>
        {matches && <Title className="title-thin">{props.title}</Title>}
        {!matches && (
          <div className="justified-row">
            <Title className="title-thin">{props.title}</Title>
            <Image
              width={18}
              height={18}
              alt={props.title}
              src={"/chevron.png"}
            />
          </div>
        )}

        {props.subtitle && (
          <>
            <div>{props.subtitle}</div>
            <br />
          </>
        )}
        <div style={{  marginBottom: 8 }}>
          {props.description}
        </div>
        <div className="row">
          {props.tags.map((t, i) => (
            <div className={projectStyles.tag} key={i}>
              {t}
            </div>
          ))}
        </div>
      </div>
      {matches && (
        <Image width={22} height={22} alt={props.title} src={"/chevron.png"} />
      )}
    </Link>
  );
}
