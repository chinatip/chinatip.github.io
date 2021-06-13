import styled, { css } from 'styled-components';
import AboutMeSection from './sections/aboutme/AboutMeSection';
import ExperiencesSection from './sections/experiences/ExperiencesSection';
import ProjectsSection from './sections/projects/ProjectsSection';
import EducationSection from './sections/educations/EducationSection';
import ActivitySection from './sections/activities/ActivitySection';
import { ColorType, getColor } from '../utils/ThemeProvider';

const gradientBorder = css`
    border: 2px solid transparent;
    border-radius: 4px;
    background: ${getColor(ColorType.wrapperBackground)} border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
`;

const Wrapper = styled.div`
    z-index: 1;
    position: relative;
    max-width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 16px;
    margin: 0 auto;
    border: 4px solid ${getColor(ColorType.wrapperBackground)};
    border-radius: 4px;
`;
    
const Container = () => {
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