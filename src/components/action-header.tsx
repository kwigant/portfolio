import { Title } from "@mantine/core";
import Image from "next/image";
import parse from "html-react-parser";
import abtstyle from "../styles/about.module.css";

export type actionHeaderProps = {
  title: string;
  subtitle?: string;
  description: string;
  img: string;
  width: number;
  height: number;
  alt: string;
};

export default function ActionHeader(props: actionHeaderProps) {
  return (
    <div className={abtstyle['inner-container']} style={{marginTop: 140, marginBottom: 100}}>
      <Image alt="san jose bay area" height={props.height} width={props.width} src={props.img} />
      <div className="column" style={{ marginLeft: 48, maxWidth: 660 }}>
        <Title className="title-large">
          {props.title}
        </Title>
        {props.subtitle && (
          <Title className="title-thin">
            {props.subtitle}
          </Title>
        )}
        {parse(props.description)}
      </div>
    </div>
  );
}
