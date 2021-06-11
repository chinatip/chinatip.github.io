import data from '../data.json';
import { Data, AboutMeSection, ExperienceSection, ProjectSection } from './../models/Data.d';

let self: Data;

export const AddData = () => {
    self = data ?? {};
};

export const getAboutMeData = (): AboutMeSection => self.aboutMe;
export const getExperienceData = (): ExperienceSection => self.experiences;
export const getProjectMeData = (): ProjectSection => self.projects;

