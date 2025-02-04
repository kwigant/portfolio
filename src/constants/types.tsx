// project list types
export type project = {
    title: string,
    img: string,
    subtitle?: string,
    description: string,
    tags: string[],
    id: string,
    path: string,
}

export type projectList = {
    title: string,
    list: project[]
}

// project data types
export type projectDetails = {
    deliverables: string;
    date: string;
    role: string;
    techStack: string[];
    designStack?: string[];
};

type approach = {
    title: string;
    description: string;
}
type projectLink = {
    title: string;
    img: string;
    link: string;
}

type more = {
    description: string;
    links?: projectLink[]
}

export type projectData = {
    id: string;
    title: string;
    tags: string[];
    img: string;
    description: string;
    projectDetails: projectDetails;
    approach: approach[];
    more: more;
}