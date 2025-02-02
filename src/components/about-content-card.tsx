import { Title } from "@mantine/core";
import Image from "next/image";
import parse from "html-react-parser";
import abtstyle from "../styles/about.module.css";

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
    <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
    <div style={{ width: 5, height: 250, background: '#5BD2DC40'}}></div>
 
    <div className={abtstyle.container} >
      {props.imgLeft && (
        <Image
          alt={props.alt}
          height={props.height}
          width={props.width}
          src={props.img}
        />
      )}
      <div className="column" style={{ marginLeft: 48, marginRight: 48 }}>
        <Title style={{ color: "#4B8085", marginBottom: 12 }}>
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
