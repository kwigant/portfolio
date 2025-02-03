import { Title } from "@mantine/core";
import Image from "next/image";
import parse from "html-react-parser";
import abtstyle from "../../styles/about.module.css";

export type abtCardProps = {
  title: string;
  description: string;
  img: string;
  alt: string;
  width: number;
  height: number;
  imgLeft: boolean;
};

export default function AboutContentCard(props: abtCardProps) {
  return (
    <div className={abtstyle['outer-container']}>
    <div className={abtstyle.line}></div>
 
    <div className={abtstyle['inner-container']} >
      {props.imgLeft && (
        <Image
          alt={props.alt}
          height={props.height}
          width={props.width}
          src={props.img}
        />
      )}
      <div className={abtstyle['text-container']} >
        <Title className="title">
          {props.title}
        </Title>
        {parse(props.description)}
      </div>
      {!props.imgLeft && (
        <Image
          alt={props.alt}
          height={props.height}
          width={props.width}
          src={props.img}
        />
      )}
    </div>
    </div>
  );
}
