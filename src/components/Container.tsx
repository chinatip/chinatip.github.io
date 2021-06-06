import React from 'react';
import Grid from '@material-ui/core/Grid';
import AboutMeSection from './AboutMe/AboutMeSection';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = () => {
    return (
        <Wrapper>
            <Grid
                container
                xs={8}
            >
                <AboutMeSection />
            </Grid>
        </Wrapper>
    );
};

export default Container;