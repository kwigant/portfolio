import { projectData } from "@/constants/types";
import styles from "@/styles/project.module.css";
import { Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";

export default function ProjectMore(props: projectData) {
  const matches = useMediaQuery("(min-width: 480px)");

    return (
      <div className={styles["profile-spacing"]}>
        <Title className="title">Still Want More?</Title>
        <div>{props.more.description}</div>
        <div
          className={matches ? "justified-row" : "column"}
          style={{ marginTop: 48, marginBottom: 48, alignItems: "flex-start" }}
        >
          {props.more.links &&
            props.more.links.map((a, i) => {
              return (
                <div
                  key={i}
                  className="column"
                  style={{ maxWidth: 300, width: "100%" }}
                >
                  {props.more.links && props.more.links[i].img !== "" && (
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
                  <div>{a.link}</div>
                </div>
              );
            })}
          {!props.more.links && (
            <div className={styles.disclaimer}>
              <strong className={styles["disclaimer-bold"]}>
                Disclaimer:{" "}
              </strong>{" "}
              {props.more.description}
            </div>
          )}
        </div>
      </div>
    );
}
