import styled from 'styled-components';
import AboutMe from './sections/aboutme/AboutMe';
import Experiences from './sections/experiences/Experiences';
import { Data } from '../models/Data';
import Projects from './sections/projects/Projects';

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
            <AboutMe />
            <Experiences />
            <Projects />
        </Wrapper>
    );
};

export default Container;