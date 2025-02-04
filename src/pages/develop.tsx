import ActionHeader, { actionHeaderProps } from "@/components/action-header";
import ProjectListItem from "@/components/project-list-item";
import { devData } from "@/constants/dev-data";
import { Button, Title } from "@mantine/core";
import abtstyle from "@/styles/about.module.css";

export default function Develop() {
  const actionHeader: actionHeaderProps = {
    title: "My Development Process",
    description:
      "<div>As a UX Engineer with 5 years of industry experience, I’m very adept at turning designs into <strong>seamless, user-friendly web prototypes</strong> - even under tight deadlines.</div><br/><div>I’m used to jumping on to unfamiliar tech stacks and learning on the spot. My specialties include but are not limited to React, React Native, and Angular. Check out some of my work below!</div>",
    img: "/dev-action.png",
    width: 404,
    height: 350,
    alt: "Development Image",
  };

  return (
    <div className="center-container">
      <ActionHeader {...actionHeader} />
      <Button className="show-more-btn">Scroll Down for More</Button>
      {devData.map((d, i) => (
        <div style={{ marginLeft: 104, marginRight: 104 }} key={i}>
          <div className={abtstyle["outer-container"]}>
            <div className={abtstyle.line}></div>
          </div>
          <Title style={{ color: "#4B8085" }}>{d.title}</Title>
          {d.list.map((d, i) => (
            <ProjectListItem key={i} {...d} />
          ))}
        </div>
      ))}
      <div className={abtstyle["outer-container"]}>
        <div className={abtstyle.line} style={{ height: 100 }}></div>
      </div>
      <Button className="show-more-btn" style={{ marginBottom: 96 }}>
        Scroll Up for Less
      </Button>
    </div>
  );
}
