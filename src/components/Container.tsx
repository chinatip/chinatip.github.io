import styled, { css } from 'styled-components';
import AboutMeSection from './sections/aboutme/AboutMeSection';
import ExperiencesSection from './sections/experiences/ExperiencesSection';
import ProjectsSection from './sections/projects/ProjectsSection';
import EducationSection from './sections/educations/EducationSection';
import ActivitySection from './sections/activities/ActivitySection';
import { getColor } from '../utils/ThemeProvider';
import { ColorType } from '../utils/Constant';
import { Desktop, Mobile } from './../utils/BreakpointHelper';

const gradientBorder = css`
    border: 2px solid transparent;
    border-radius: 4px;
    background: ${getColor(ColorType.wrapperBorder)} border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
`;

const wrapperStyle = css`
    z-index: 1;
    position: relative;
    max-width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 16px;
`;
const DesktopContainer = styled.div`
    z-index: 1;
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 0;
`;
const DesktopWrapper = styled.div`
    ${wrapperStyle}
    border: 4px solid ${getColor(ColorType.wrapperBorder)};
    border-radius: 4px;
`;

const MobileContainer = styled.div`
    ${wrapperStyle}
`;

const Container = () => {
    const sections = (
        <>
            <AboutMeSection />
            <ExperiencesSection />
            <ProjectsSection />
            <EducationSection />
            <ActivitySection />
        </>
    );
    
    return (
        <>
            <Desktop>
                <DesktopContainer>
                    <DesktopWrapper>
                        {sections}
                    </DesktopWrapper>
                </DesktopContainer>
            </Desktop>
            <Mobile>
                <MobileContainer>
                    {sections}
                </MobileContainer>
            </Mobile>
        </>
    );
};

export default Container;