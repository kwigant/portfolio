import { Title } from "@mantine/core";
import Image from "next/image";
import parse from "html-react-parser";
import abtstyle from "../styles/about.module.css";

export type actionHeaderProps = {
  title: string;
  subtitle?: string;
  description: string;
  img: string;
  alt: string;
};

export default function ActionHeader(props: actionHeaderProps) {
  return (
    <div className={abtstyle.container} style={{marginTop: 200, marginBottom: 150}}>
      <Image alt="san jose bay area" height={250} width={480} src={props.img} />
      <div className="column" style={{ marginLeft: 48 }}>
        <Title style={{ color: "#4B8085", fontSize: 64 }}>
          {props.title}
        </Title>
        {props.subtitle && (
          <Title style={{ color: "#4B8085", fontWeight: 200, fontSize: 38 }}>
            {props.subtitle}
          </Title>
        )}
        {parse(props.description)}
      </div>
    </div>
  );
}
