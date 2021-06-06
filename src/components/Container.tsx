import React from 'react';
import Grid from '@material-ui/core/Grid';
import AboutMe from './AboutMe/AboutMe';
import styled from 'styled-components';
import { Data } from '../models/Data';
import Experiences from './Experiences/Experiences';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = (data: Data) => {
    console.log(data.projects)
    return (
        <Wrapper>
            <Grid
                container
                xs={8}
            >
                <AboutMe {...data.aboutMe} />
                <Experiences {...data.experiences}/>
            </Grid>
        </Wrapper>
    );
};

export default Container;