import { Card as MaterialUICard, CardContent, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { ColorType, Sizing } from '../../utils/Constant';
import { CardProps } from './../../models/Card.d';
import { getColor } from './../../utils/ThemeProvider';
import LinkIcon from '@material-ui/icons/Link';

const Container = styled(MaterialUICard)`
    background: ${getColor(ColorType.cardBackground)} !important;
    height: 100%;
`;

const TitleText = styled(Typography)`
    color: ${getColor(ColorType.cardTitle)};

    .MuiSvgIcon-root {
        cursor: pointer;
    }
`;

const SubtitleText = styled(Typography)`
    color: ${getColor(ColorType.cardSubtitle)};
`;

const DescriptionText = styled(Typography)`
    color: ${getColor(ColorType.cardCaption)};
`;

const ContentTextWrapper = styled.div`
    margin-bottom: ${Sizing.S};

    &:last-child {
        margin: 0;
    }
`;

const ContentText = styled(Typography)`
    color: ${getColor(ColorType.cardContent)};
`;

const ContentContainer = styled.div`
    margin-top: ${Sizing.S};
`;

const Card = (props: CardProps) => {
    if (!props) return null;
    const { title, subtitle, description, content, links, tags } = props;

    const renderIcon = () => {
        const link = links && links[0] ? links[0] : null;
        if (!link) return null;
        return <LinkIcon fontSize="inherit" onClick={() => window.open(link, "_blank")}/>;
    };

    return (
        <Container>
            <CardContent>
                <TitleText variant="h5">
                    {title}
                    {renderIcon()}
                </TitleText>
                <SubtitleText variant="body2">{subtitle}</SubtitleText>
                {description && <DescriptionText variant="caption">{description}</DescriptionText>}
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