import data from '../data.json';
import { Data, AboutMeSectionProps, ExperienceSectionProps, ProjectSectionProps } from './../models/Data.d';

let self: Data;

export const AddData = () => {
    self = data ?? {};
};

export const getAboutMeData = (): AboutMeSectionProps => self.aboutMe;
export const getExperienceData = (): ExperienceSectionProps => self.experiences;
export const getProjectData = (): ProjectSectionProps => self.projects;

