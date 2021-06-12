import { Card as MaterialUICard, CardContent, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { CardProps } from './../../models/Card.d';
import { ColorType, getColor } from './../../utils/ThemeProvider';

const Container = styled(MaterialUICard)`
    background: ${getColor(ColorType.cardBackground)} !important;
`;

const TitleText = styled(Typography)`
    color: ${getColor(ColorType.cardTitle)};
`;

const SubtitleText = styled(Typography)`
    color: ${getColor(ColorType.cardSubtitle)};
`;

const DescriptionText = styled(Typography)`
    color: ${getColor(ColorType.cardCaption)};
`;

const ContentTextWrapper = styled.div`
    margin-bottom: 8px;

    &:last-child {
        margin: 0;
    }
`;

const ContentText = styled(Typography)`
    color: ${getColor(ColorType.cardContent)};
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
                <TitleText variant="body1">{title}</TitleText>
                <SubtitleText variant="caption">{subtitle}</SubtitleText>
                {description && <DescriptionText variant="body2">{description}</DescriptionText>}
                {content && (
                    <ContentContainer>
                        {content.map(c => (
                            <ContentTextWrapper>
                                <ContentText variant="body2">{`- ${c}`}</ContentText>
                            </ContentTextWrapper>
                        ))}
                    </ContentContainer>
                )}
            </CardContent>
        </Container>
    );
};

export default Card;