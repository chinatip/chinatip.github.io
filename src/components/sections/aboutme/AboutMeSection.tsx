import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { ColorType, getColor } from '../../../utils/ThemeProvider';
import { getAboutMeProps } from '../../../utils/DataProvider';
import Contact from './../../common/Contact';

const Wrapper = styled(Grid)`
    overflow: auto;
    text-align: center;
`;

const Name = styled(Typography)`
    color: ${getColor(ColorType.title)};
`;

const Position = styled(Typography)`
    color: ${getColor(ColorType.subtitle)};
`;


const AboutMeSection = () => {
    const props = getAboutMeProps();

    return (
        <Wrapper
            item
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
        >
            <Name variant="h4"> {props.name} </Name>
            <Position variant="subtitle1">{props.position}</Position>
            <Contact />
        </Wrapper>
    );
};

AboutMeSection.displayName = 'AboutMeSection';
export default AboutMeSection;