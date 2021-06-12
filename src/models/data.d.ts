export interface Data {
    aboutMe: AboutMeSectionProps;
    experiences: ExperienceSectionProps;
    projects: ProjectSectionProps;
    educations: EducationSectionProps;
    activities: ActivitySectionProps;
}

interface Section {
    sectionName: string;
}

export interface AboutMeSectionProps extends Section {
    image: string;
    name: string;
    position: string;
    company: string;
    title: string;
    subtitle: string;
}

export interface ExperienceSectionProps extends Section {
    list: Experience[];
}

export interface ExperienceProps {
    company: string;
    position: string;
    duration: string;
    detail?: string;
}

export interface ProjectSectionProps extends Section {
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

export interface ActivitySectionProps extends Section {
    list: Activity[];
}

export interface Activity {
    name: string;
    duration: string;
    description?: string;
}

export interface EducationSectionProps extends Section {
    list: Education[];
}

export interface Education {
    school: string;
    degree: string;
    duration: string;
    description: string;
}

