import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { getColor } from '../../../utils/ThemeProvider';
import { getAboutMeProps } from '../../../utils/DataProvider';
import Contact from './../../common/Contact';
import { ColorType } from '../../../utils/Constant';

const Wrapper = styled.div`
    margin: 40px 0;
    text-align: center;
`;

const NameWrapper = styled.div`
    color: ${getColor(ColorType.name)};
    margin-top: 8px;
`;

const Position = styled(Typography)`
    color: ${getColor(ColorType.position)};
`;


const AboutMeSection = () => {
    const props = getAboutMeProps();

    return (
        <Wrapper>
            <NameWrapper>
                <Typography variant="h2"> {props.name} </Typography>
            </NameWrapper>
            <Position variant="h5">{props.position}</Position>
            <Contact />
        </Wrapper>
    );
};

AboutMeSection.displayName = 'AboutMeSection';
export default AboutMeSection;