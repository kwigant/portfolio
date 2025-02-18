import ActionHeader, { actionHeaderProps } from "@/components/action-header";
import ProjectListItem from "@/components/project-list-item";
import { devData } from "@/constants/dev-data";
import { Title } from "@mantine/core";
import abtstyle from "@/styles/about.module.css";
import { useMediaQuery } from "@mantine/hooks";

export default function Develop() {
  const matches = useMediaQuery("(min-width: 480px)");

  const actionHeader: actionHeaderProps = {
    title: "My Development Process",
    description:
      "<div>As a UX Engineer with 5 years of industry experience, I’m very adept at turning designs into <strong>seamless, user-friendly web prototypes</strong> - even under tight deadlines.</div><br/><div>I’m used to jumping on to unfamiliar tech stacks and learning on the spot. My specialties include but are not limited to <strong>React</strong>, <strong>React Native</strong>, and <strong>Angular</strong>. Check out some of my work below!</div>",
    img: "/dev-action.png",
    width: 404,
    height: 350,
    alt: "Development Image",
  };

  return (
    <div className="center-container">
      <ActionHeader {...actionHeader} />
      {matches && (
        <div className="show-more-btn">
          <div className="title-small">Scroll Down for More</div>
        </div>
      )}
      {devData.map((d, i) => (
        <div
          style={{
            width: "100%",
            marginLeft: matches ? 108 : 24,
            marginRight: matches ? 108 : 24,
          }}
          key={i}
        >
          {matches && (
            <div className={abtstyle["outer-container"]}>
              <div className={abtstyle.line}></div>
            </div>
          )}
          <Title
            className="title"
            style={{
              marginLeft: matches ? 108 : 0,
              textAlign: matches ? undefined : "center",
            }}
          >
            {d.title}
          </Title>
          {d.list.map((d, i) => (
            <ProjectListItem key={i} {...d} />
          ))}
        </div>
      ))}
      {matches && (
        <>
          <div className={abtstyle["outer-container"]}>
            <div className={abtstyle.line} style={{ height: 100 }}></div>
          </div>
          <div className="show-more-btn" style={{ marginBottom: 96 }}>
            <div className="title-small">Scroll Up for Less</div>
          </div>
        </>
      )}
    </div>
  );
}
