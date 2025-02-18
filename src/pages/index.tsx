import AboutContentCard from "@/components/about-page/about-content-card";
import ActionHeader, { actionHeaderProps } from "@/components/action-header";
import ContactContentCard from "@/components/about-page/contact";
import { abtData } from "@/constants/about-data";
import { useMediaQuery } from "@mantine/hooks";

export default function Home() {
  const matches = useMediaQuery("(min-width: 480px)");

  const actionHeader: actionHeaderProps = {
    title: "Hi I'm Kirsten!",
    subtitle: "Let's Build Something Together",
    description:
      "<div>From <strong>Engineering</strong> to <strong>Research</strong> and <strong>Design</strong>, I'm an All-in-One Expert",
    img: "/profile.svg",
    width: 400,
    height: 400,
    alt: "Kirsten Image",
  };
  return (
    <div className="center-container"
    >
      <ActionHeader {...actionHeader} />
   {matches &&  <div
        className="show-more-btn"
      >
        <div className="title-small">Scroll Down for More</div>
      </div>}
      {abtData.map((ad, i) => {
        return <AboutContentCard key={i} {...ad} />;
      })}
      <ContactContentCard />
    </div>
  );
}
