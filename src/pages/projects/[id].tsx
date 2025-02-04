import ProjectApproach from "@/components/project-profile/project-approach";
import ProjectDetails from "@/components/project-profile/project-details";
import ProjectHeader from "@/components/project-profile/project-header";
import ProjectMore from "@/components/project-profile/project-more";
import { allProjectData } from "@/constants/project-data";
import { projectData } from "@/constants/types";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/router";

export default function Profile() {
  const matches = useMediaQuery('(min-width: 480px)');
  const router = useRouter();
  const id = router.query.id;
  const profile = allProjectData.filter((pd) => {
    return pd.id === id;
  });

  return (
    <div style={{marginRight: matches ? 96 : 0, marginLeft: matches ? 96 : 0}}>
      <ProjectHeader {...(profile[0] as projectData)} />
      <ProjectDetails {...(profile[0] as projectData)} />
      <ProjectApproach {...(profile[0] as projectData)} />
      <ProjectMore {...(profile[0] as projectData)}/>
    </div>
  );
}
