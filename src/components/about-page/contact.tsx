import { Title } from "@mantine/core";
import Image from "next/image";
import abtstyle from "@/styles/about.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { projectLink } from "@/constants/types";
import projectStyles from "@/styles/project.module.css";
import { handleEmailClick } from "../email-button";

export default function ContactContentCard() {
  const matches = useMediaQuery("(min-width: 480px)");
  const links: projectLink[] = [
    {
      title: "Linkedin",
      img: "/visuals/linkedin.png",
      link: "https://linkedin.com/in/kirsten-wigant",
    },
    {
      title: "Email",
      img: "/visuals/email.png",
      link: "link",
    },
    {
      title: "Resume",
      img: "/visuals/resume.png",
      link: "documents/Kirsten-Wigant-Resume.pdf",
    },
  ];

  function handleClick(link: projectLink) {
    switch(link.title) {
      case "Email": handleEmailClick()
      case "Resume": window.open(link.link, "_blank")
      case "Linkedin": window.open(link.link)
    }
  }
 
  return (
    <div className={abtstyle["contact-container"]}>
      {matches && <div className={abtstyle.line}></div>}
      <div
        className="column"
        style={{ marginRight: matches ? 48 : 0, marginLeft: matches ? 48 : 0 }}
      >
        <Title className="title">Lets Get in Touch!</Title>

        <p>
          I am currently looking for new job opportunities! I am in the{" "}
          <strong>San Jose / San Francisco Bay Area</strong> though I am open to
          relocating / going remote if necessary. Connect with me if you’re
          interested!
        </p>
        <div className={projectStyles["links-row"]}>
          {links.map((a, i) => {
            return (
              <div key={i}  className={projectStyles["link-item"]} style={{justifyContent: matches ? 'center' : 'flex-start'}}>
                {links[i].img !== "" && (
                  <Image
                    alt={a.title}
                    width={42}
                    height={42}
                    src={a.img}
                  ></Image>
                )}
                <div onClick={()=>handleClick(a)} className={projectStyles[`approach-text-${i + 1}`]}>
                  {a.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {matches && (
        <>
          <div
            className={abtstyle.line}
            style={{ marginTop: 48, height: 100 }}
          ></div>
          <div className="show-more-btn" style={{ marginBottom: 64 }}>
            {" "}
            <div className="title-small">Scroll Up for Less</div>
          </div>
        </>
      )}
    </div>
  );
}
