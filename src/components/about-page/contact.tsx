import { Button, Title } from "@mantine/core";
import Image from "next/image";
import abtstyle from "../../styles/about.module.css";

export default function ContactContentCard() {
  return (
    <div
      className={abtstyle['contact-container']}
    >
      <div className={abtstyle.line}></div>

      <div className={abtstyle.container}>
        <div className="column">
          <Title className="title">
            Lets Get in Touch!
          </Title>
          I am currently looking for new job opportunities! I am in the San Jose
          / San Francisco Bay Area though I am open to relocating / going remote
          if necessary. Connect with me if you’re interested!
          <div className="justified-row" style={{ marginTop: 64 }}>
            <li>
              <Image
                width={44}
                height={44}
                alt="linkedin"
                src="/linkedin.png"
              />
              <div style={{ color: "#4B8085", fontWeight: "bold" }}>
                Linkedin
              </div>
              <div>linkedin.com/in/kirsten-wigant</div>
            </li>
            <li>
              <Image width={44} height={44} alt="email" src="/email.png" />
              <div style={{ color: "#5BD2DC", fontWeight: "bold" }}>Email</div>
              <div>wigantk@gmail.com</div>
            </li>
            <li>
              <Image width={44} height={44} alt="resume" src="/resume.png" />
              <div style={{ color: "#FFA984", fontWeight: "bold" }}>Resume</div>
              <div>Click to Download Resume</div>
            </li>
          </div>
        </div>
      </div>
      <div className={abtstyle.line} style={{ height: 100 }}></div>
      <Button
       className="show-more-btn"
      >
        Scroll Up for Less
      </Button>
    </div>
  );
}
