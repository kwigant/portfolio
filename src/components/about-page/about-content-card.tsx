import { Title } from "@mantine/core";
import Image from "next/image";
import parse from "html-react-parser";
import abtstyle from "../../styles/about.module.css";
import { useMediaQuery } from '@mantine/hooks';

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
  const matches = useMediaQuery('(min-width: 480px)');

  
  return (
    <div className={abtstyle['outer-container']}>
    {matches && <div className={abtstyle.line}></div>}
 
    <div className={abtstyle['inner-container']} >
    {!matches && <Image
          alt={props.alt}
          height={props.height/1.8}
          width={props.width/1.8}
          src={props.img}
          style={{marginBottom: matches ? 24 : 0}}
        /> }
      
      {props.imgLeft && matches &&(
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
      {!props.imgLeft && matches && (
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
