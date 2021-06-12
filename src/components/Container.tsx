import styled from 'styled-components';
import AboutMeSection from './sections/aboutme/AboutMeSection';
import ExperiencesSection from './sections/experiences/ExperiencesSection';
import { Data } from '../models/Data';
import ProjectsSection from './sections/projects/ProjectsSection';
import EducationSection from './sections/educations/EducationSection';
import ActivitySection from './sections/activities/ActivitySection';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
    padding: 16px;
    justify-content: center;
    align-items: center;
`;

const Container = (data: Data) => {
    return (
        <Wrapper>
            <AboutMeSection />
            <ExperiencesSection />
            <ProjectsSection />
            <EducationSection />
            <ActivitySection />
        </Wrapper>
    );
};

export default Container;