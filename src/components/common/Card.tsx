import { Card as MaterialUICard, CardContent, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { CardProps } from './../../models/Card.d';

const Container = styled(MaterialUICard)`
    // border: 1px solid red;
`;
const HeaderContainer = styled.div`
`;
const ContentContainer = styled.div`
    margin-top: 8px;
`;

const Card = (props: CardProps) => {
    if (!props) return null;
    const { title, subtitle, description, content, tags } = props;
    
    return (
        <Container>
            <CardContent>
                <HeaderContainer>
                    <Typography variant="body1">{title}</Typography>
                    <Typography variant="caption">{subtitle}</Typography>
                    {description && <Typography variant="body2">{description}</Typography>}
                </HeaderContainer>
                {content && (
                    <ContentContainer>
                        <Typography variant="body2">
                            {props.content}
                        </Typography>
                    </ContentContainer>
                )}
            </CardContent>
        </Container>
    );
};

export default Card;