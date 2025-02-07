import { Button, Title } from "@mantine/core";
import Image from "next/image";
import abtstyle from "@/styles/about.module.css";
import { useMediaQuery } from "@mantine/hooks";

export default function ContactContentCard() {
  const matches = useMediaQuery("(min-width: 480px)");

  return (
    <div className={abtstyle["contact-container"]}>
      {matches && <div className={abtstyle.line}></div>}
      <div className="column" style={{ marginRight: matches ? 48 : 0, marginLeft: matches ? 48 : 0 }}>
        <Title className="title">Lets Get in Touch!</Title>I am currently
        looking for new job opportunities! I am in the San Jose / San Francisco
        Bay Area though I am open to relocating / going remote if necessary.
        Connect with me if you’re interested!
        <div className="justified-row" style={{ marginTop: 64, alignItems: 'center', justifyContent: matches ? 'space-between' : 'center'}}>
          <li className={abtstyle['contact-item']}>
            <Image width={44} height={44} alt="linkedin" src="/linkedin.png" />
            {matches && <div style={{ color: "#4B8085", fontWeight: "bold" }}>Linkedin</div>}
            {matches && <div>linkedin.com/in/kirsten-wigant</div>}
          </li>
          <li className={abtstyle['contact-item']}>
            <Image width={44} height={44} alt="email" src="/email.png" />
            {matches && <div style={{ color: "#5BD2DC", fontWeight: "bold" }}>Email</div>}
            {matches && <div>wigantk@gmail.com</div>}
          </li>
          <li className={abtstyle['contact-item']}>
            <Image width={44} height={44} alt="resume" src="/resume.png" />
            {matches && <div style={{ color: "#FFA984", fontWeight: "bold" }}>Resume</div>}
            {matches && <div>Click to Download Resume</div>}
          </li>
        </div>
      </div>
      {matches && (
        <>
          <div
            className={abtstyle.line}
            style={{ marginTop: 48, height: 100 }}
          ></div>
          <Button className="show-more-btn">Scroll Up for Less</Button>
        </>
      )}
    </div>
  );
}
