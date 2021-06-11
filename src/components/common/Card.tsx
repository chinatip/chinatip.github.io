import React from 'react';
import { Box } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled(Box)`
    backgroundColor: red;
`;
const HeaderContainer = styled.div`
`;
const ContentContainer = styled.div`
`;

const Card = () => {
    return (
        <Container>
            <HeaderContainer></HeaderContainer>
            <ContentContainer></ContentContainer>
        </Container>
    );
};

export default Card;