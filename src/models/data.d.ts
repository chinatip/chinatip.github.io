export interface Data {
    aboutMe: AboutMe;
    experiences: Experience[]
}

export interface AboutMe {
    image: string;
    name: string;
    position: string;
    company: string;
    title: string;
    subtitle: string;
}

export interface Experience {
    company: string;
    position: string;
    duration: string;
    detail?: string;
}

