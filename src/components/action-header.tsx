import { Title } from "@mantine/core";
import Image from "next/image";
import parse from "html-react-parser";
import abtstyle from "../styles/about.module.css";
import { useMediaQuery } from "@mantine/hooks";

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
  const matches = useMediaQuery("(min-width: 480px)");

  return (
    <div className={abtstyle['inner-container']} style={{marginTop: matches ? 140 : 24, marginBottom: 100}}>
      <Image alt="san jose bay area" height={props.height} width={props.width} src={props.img} />
      <div className="column" style={{ marginLeft: matches ? 48 : 0, maxWidth: 600 }}>
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
