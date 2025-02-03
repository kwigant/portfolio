import AboutContentCard from "@/components/about-page/about-content-card";
import ActionHeader, { actionHeaderProps } from "@/components/action-header";
import ContactContentCard from "@/components/about-page/contact";
import { abtData } from "@/constants/about-data";
import { Button } from "@mantine/core";

export default function Home() {
  const actionHeader: actionHeaderProps = {
    title: "Hi I'm Kirsten!",
    subtitle: "Let's Build Something Together",
    description:
      "<div>From <strong>Engineering</strong> to <strong>Research</strong> and <strong>Design</strong>, I'm an All-in-One Expert",
    img: "/placeholder.png",
    width: 300,
    height: 300,
    alt: "Kirsten Image",
  };
  return (
    <div className="center-container"
    >
      <ActionHeader {...actionHeader} />
      <Button
        className="show-more-btn"
      >
        Scroll Down for More
      </Button>
      {abtData.map((ad, i) => {
        return <AboutContentCard key={i} {...ad} />;
      })}
      <ContactContentCard />
    </div>
  );
}
