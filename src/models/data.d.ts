export interface Data {
    aboutMe: AboutMeSectionProps;
    experiences: ExperienceSectionProps;
    projects: ProjectSectionProps;
}

interface SectionProps {
    sectionName: string;
}

export interface AboutMeSectionProps extends SectionProps {
    image: string;
    name: string;
    position: string;
    company: string;
    title: string;
    subtitle: string;
}

export interface ExperienceSectionProps extends SectionProps {
    list: Experience[];
}

export interface ExperienceProps {
    company: string;
    position: string;
    duration: string;
    detail?: string;
}

export interface ProjectSectionProps extends SectionProps {
    list: Project[];
}

export interface Project {
    name: string;
    description: string;
    tags: string[];
    detail: ProjectDetailProps;
}

export interface ProjectDetailProps {
    description: string,
    location: string,
    time: string,
    imgList?: string[],
    tags: string[],
    links: string[]
}
