import { project } from "@/constants/types";
import { Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import projectStyles from "@/styles/project.module.css";

export default function ProjectListItem(props: project) {
    return (
        <Link href={`/projects/${props.id}`} className="row" style={{cursor: 'pointer',marginTop: 48, marginBottom: 48}}>
            <Image width={172} height={172} alt={props.title} src={props.img}/>
            <div className="column" style={{marginLeft: 48}}>
                <Title className="title-thin">{props.title}</Title>
                {props.subtitle && <><div>{props.subtitle}</div><br/></>}
                <div>{props.description}</div>
                <div className="row">{props.tags.map((t, i) => <div className={projectStyles.tag} key={i}>{t}</div>)}</div>
            </div>
        </Link>
    )
}