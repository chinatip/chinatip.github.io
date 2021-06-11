import data from '../data.json';
import { Data, AboutMeSectionProps, ExperienceSectionProps, ProjectSectionProps, ActivitySectionProps, EducationSectionProps } from './../models/Data.d';

let self: Data;

export const AddData = () => {
    self = data ?? {};
};

export const getAboutMeProps = (): AboutMeSectionProps => self.aboutMe;
export const getExperienceProps = (): ExperienceSectionProps => self.experiences;
export const getProjectProps = (): ProjectSectionProps => self.projects;
export const getEducationProps = (): EducationSectionProps => self.educations;
export const getActivityProps = (): ActivitySectionProps => self.activities;
