import { projectData } from "@/constants/types";
import styles from "../../styles/project.module.css";
import { Title } from "@mantine/core";
import Image from "next/image";

export default function ProjectMore(props: projectData) {
  if (props.more)
    return (
      <div>
         <Title>Still Want More?</Title>
         <div>{props.more.description}</div>
          <div
            className="justified-row"
            style={{ marginTop: 48, marginBottom: 48 }}
          >
            {props.more.links.map((a, i) => {
              return (
                <div key={i} className="column" style={{ maxWidth: 320 }}>
                  <Image alt={a.title} width={42} height={42} src={a.img}></Image>
                  <div className={styles[`approach-text-${i + 1}`]}>{a.title}</div>
                  <div>{a.link}</div>
                </div>
              );
            })}
          </div>
      </div>
    );
}
