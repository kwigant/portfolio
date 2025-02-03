import ActionHeader, { actionHeaderProps } from "@/components/action-header";
import ProjectListItem from "@/components/project-list-item";
import { designData } from "@/constants/design-data";
import { Button, Title } from "@mantine/core";

export default function Design() {
  const actionHeader: actionHeaderProps = {
    title: "My Design & Research Process",
    description:
      "<div>Design and research is an integral part of my development process. No matter how small or seemingly simple the concept may be, I believe it’s important to <strong>do the research</strong> and <strong>iterate on any and all ideas</strong>.</div><br/><div>I’m primarily self-taught, though I have strengthened my skills over the years with online classes such as the <strong>Google UX Design Course</strong> and personal projects - check out some of my work below! </div>",
    img: "/design-and-research.png",
    width: 404,
    height: 304,
    alt: "Design Image",
  };

  return (
    <div className="center-container">
      <ActionHeader {...actionHeader} />
      <Button
        className="show-more-btn"
      >
        Scroll Down for More
      </Button>
      {designData.map((d,i) => (
        <div style={{margin: 104}} key={i}>
          <Title style={{ color: "#4B8085" }}>{d.title}</Title>
          {d.list.map((d, i) => (
            <ProjectListItem key={i} {...d} />
          ))}
        </div>
      ))}
    </div>
  );
}
