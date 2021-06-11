import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import AboutMe from './sections/aboutme/AboutMe';
import Experiences from './sections/experiences/Experiences';
import { Data } from '../models/Data';

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
        </Wrapper>
    );
};

export default Container;