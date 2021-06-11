import { Card as MaterialUICard, CardContent, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { CardProps } from './../../models/Card.d';

const Container = styled(MaterialUICard)`
    border: 1px solid red;
`;
const HeaderContainer = styled.div`
`;
const ContentContainer = styled.div`
`;

const Card = (props: CardProps) => {
    if (!props) return null;

    const header = props.header && (
        <HeaderContainer>
            <Typography variant="h6">{props.header.title}</Typography>
            <Typography variant="body1">{props.header.subtitle}</Typography>
        </HeaderContainer>
    );

    return (
        <Container>
            <CardContent>
                {header}
                <ContentContainer>
                    {props.content}
                </ContentContainer>
            </CardContent>
        </Container>
    );
};

export default Card;