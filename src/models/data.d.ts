export interface Data {
    aboutMe: AboutMeSection;
    experiences: ExperienceSection;
    projects: ProjectSection;
}

interface Section {
    sectionName: string;
}

export interface AboutMeSection extends Section {
    image: string;
    name: string;
    position: string;
    company: string;
    title: string;
    subtitle: string;
}

export interface ExperienceSection extends Section {
    list: Experience[];
}

export interface Experience {
    company: string;
    position: string;
    duration: string;
    detail?: string;
}

export interface ProjectSection extends Section {
    list: Project[];
}

export interface Project {
    name: string;
    description: string;
    tags: string[];
    detail: ProjectDetail;
}

export interface ProjectDetail {
    description: string,
    location: string,
    time: string,
    imgList?: string[],
    tags: string[],
    links: string[]
}
