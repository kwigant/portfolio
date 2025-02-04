import { project } from "@/constants/types";
import { Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import projectStyles from "@/styles/project.module.css";

export default function ProjectListItem(props: project) {
    return (
        <Link href={`/projects/${props.id}`} className="row" style={{ alignItems: 'center', cursor: 'pointer',marginTop: 48, marginBottom: 48}}>
            <Image width={180} height={180} alt={props.title} src={props.img}/>
            <div className="column" style={{marginLeft: 48, marginRight: 48}}>
                <Title className="title-thin">{props.title}</Title>
                {props.subtitle && <><div>{props.subtitle}</div><br/></>}
                <div style={{maxWidth: 800, marginBottom: 8}}>{props.description}</div>
                <div className="row" >{props.tags.map((t, i) => <div className={projectStyles.tag} key={i}>{t}</div>)}</div>
            </div>
            <Image width={22} height={22} alt={props.title} src={'/chevron.png'}/>

        </Link>
    )
}