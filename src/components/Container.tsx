import styled from 'styled-components';
import AboutMeSection from './sections/aboutme/AboutMeSection';
import ExperiencesSection from './sections/experiences/ExperiencesSection';
import { Data } from '../models/Data';
import ProjectsSection from './sections/projects/ProjectsSection';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
    padding: 12px;
    justify-content: center;
    align-items: center;
`;

const Container = (data: Data) => {
    return (
        <Wrapper>
            <AboutMeSection />
            <ExperiencesSection />
            <ProjectsSection />
        </Wrapper>
    );
};

export default Container;