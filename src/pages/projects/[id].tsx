import ProjectApproach from "@/components/project-profile/project-approach";
import ProjectDetails from "@/components/project-profile/project-details";
import ProjectHeader from "@/components/project-profile/project-header";
import ProjectMore from "@/components/project-profile/project-more";
import { allProjectData } from "@/constants/project-data";
import { projectData } from "@/constants/types";
import projectStyles from "@/styles/project.module.css";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Profile() {
  const matches = useMediaQuery("(min-width: 480px)");
  const router = useRouter();

  const id = router.query.id;
  const profile = allProjectData.filter((pd) => {
    return pd.id === id || undefined;
  });

  function getImage(index: number) {
    if (matches) return profile[0].imgs[index]
    else {
      const name = profile[0].imgs[index].split('.')[0]
      return `${name}-mobile-view.svg`
    }
  }
  if (profile !== undefined && profile[0])
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: matches ? undefined : "center",
          alignItems: matches ? undefined : "center",
          marginRight: matches ? 96 : 24,
          marginLeft: matches ? 96 : 24,
        }}
      >
        <ProjectHeader {...(profile[0] as projectData)} />
        <ProjectDetails {...(profile[0] as projectData)} />
        { profile[0].imgs[0] && <Image
          alt="placeholder"
          src={getImage(0)}
          className={projectStyles['project-image']}
           sizes="100vw"
          height={0}
          width={0}
        />}
        <ProjectApproach {...(profile[0] as projectData)} />
        { profile[0].imgs[1] && <Image
          alt="placeholder"
          src={getImage(1)}
          className={projectStyles['project-image']}
           sizes="100vw"
          height={0}
          width={0}
        />}
        <ProjectMore {...(profile[0] as projectData)} />
      </div>
    );
}
