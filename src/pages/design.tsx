import ActionHeader, { actionHeaderProps } from "@/components/action-header";
import ProjectListItem from "@/components/project-list-item";
import { designData } from "@/constants/design-data";
import { Button, Title } from "@mantine/core";
import abtstyle from "@/styles/about.module.css";
import { useMediaQuery } from "@mantine/hooks";
export default function Design() {
  const matches = useMediaQuery("(min-width: 480px)");

  const actionHeader: actionHeaderProps = {
    title: "My Design & Research Process",
    description:
      "<div>Design and research is an integral part of my development process. No matter how small or seemingly simple the concept may be, I believe it’s important to <strong>do the research</strong> and <strong>iterate on any and all ideas</strong>.</div><br/><div>I’m primarily self-taught, though I have strengthened my skills over the years with online classes such as the <strong>Google UX Design Course</strong> and personal projects - check out some of my work below! </div>",
    img: "/design-and-research.png",
    width: 404,
    height: 350,
    alt: "Design Image",
  };

  return (
    <div className="center-container">
      <ActionHeader {...actionHeader} />
      {matches && (
        <Button className="show-more-btn"> <div className="title-small">Scroll Down for More</div></Button>
      )}
      {designData.map((d, i) => (
        <div key={i} style={{ width: "100%" }}>
          <div className={abtstyle["outer-container"]}>
            {matches && <div className={abtstyle.line}></div>}
          </div>
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
          <Button className="show-more-btn" style={{ marginBottom: 96 }}>
            <div className="title-small">Scroll Up for Less</div>
          </Button>
        </>
      )}
    </div>
  );
}
