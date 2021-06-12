import { Card as MaterialUICard, CardContent, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { CardProps } from './../../models/Card.d';

const Container = styled(MaterialUICard)`
    width: 100%;
    border: 1px solid red;
`;
const HeaderContainer = styled.div`
`;
const ContentContainer = styled.div`
`;

const Card = (props: CardProps) => {
    if (!props) return null;

    const { title, subtitle, description, content, tags } = props;
    return (
        <Container>
            <CardContent>
                <HeaderContainer>
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="body1">{subtitle}</Typography>
                    {description && <Typography variant="body1">{description}</Typography>}
                </HeaderContainer>
                {content && (
                    <ContentContainer>
                        {props.content}
                    </ContentContainer>
                )}
            </CardContent>
        </Container>
    );
};

export default Card;