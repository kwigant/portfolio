import { projectData } from "@/constants/types";
import styles from "@/styles/project.module.css";
import { Title } from "@mantine/core";
import Image from "next/image";

export default function ProjectMore(props: projectData) {
if (props.more)
    return (
      <div className={styles["profile-spacing"]} style={{marginTop: 24}}>
        <Title className="title">Still Want More?</Title>
{ props.more.links &&  <div>{props.more.description}</div>}        
<div
          className={styles['links-row']}
        >
          {props.more.links &&
            props.more.links.map((a, i) => {
              return (
                <a
                  key={i}
                  href={a.link}
                  className={styles['link-item']}
                >
                  {a && a.img !== "" && (
                    <Image
                      alt={a.title}
                      width={42}
                      height={42}
                      src={a.img}
                    ></Image>
                  )}
                  <div className={styles[`approach-text-${i + 1}`]}>
                    {a.title}
                  </div>
                </a>
              );
            })}
          {!props.more.links && (
            <div className={styles.disclaimer}>
              <strong className={styles["disclaimer-bold"]}>
                Disclaimer:
              </strong>
              {props.more.description}
            </div>
          )}
        </div>
      </div>
    );
}
