import AboutContentCard, {
} from "@/components/about-content-card";
import ActionHeader, { actionHeaderProps } from "@/components/action-header";
import { abtData } from "@/constants/about-data";


export default function Home() {
  const actionHeader: actionHeaderProps = {
    title: "Hi I'm Kirsten!",
    subtitle: "Let's Build Something Together",
    description: "<div>From <strong>Engineering</strong> to <strong>Research</strong> and <strong>Design</strong>, I'm an All-in-One Expert",
    img: "/san-jose.png", 
    alt: "Kirsten Image"
  }
  return (
   
    <div >
      <ActionHeader {...actionHeader}/>
      {abtData.map((ad, i) => {
        return <AboutContentCard key={i} {...ad} />;
      })}
    </div>
  );
}
