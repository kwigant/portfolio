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
    <div className={abtstyle['inner-container']} style={{marginTop: matches ? 140 : 0, marginBottom: 48}}>
      <Image alt="san jose bay area" height={matches ? props.height : props.height / 1.5} width={matches ? props.width : props.width / 1.5} src={props.img} />
      <div className="column" style={{ marginLeft: matches ? 48 : 0, maxWidth: 800, padding: matches ? 24 : 0 }}>
        <Title className="title-large">
          {props.title}
        </Title>
        {props.subtitle && (
          <Title className="title-thin" style={{marginTop: 12, marginBottom: 12}}>
            {props.subtitle}
          </Title>
        )}
        <div style={{fontSize: matches ? 16 : 14}}>{parse(props.description)}</div>
      </div>
    </div>
  );
}
