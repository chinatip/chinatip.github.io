import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Desktop } from '../../../utils/BreakpointHelper';
import { getAboutMeProps } from '../../../utils/DataProvider';
import { ColorType, getColor } from '../../../utils/ThemeProvider';
import Contact from '../../common/Contact';

const Greeting = styled(Typography)`
    color: ${getColor(ColorType.subtitle)};
`;

const Content = styled(Typography)`
    color: ${getColor(ColorType.bodyText)};
`;

const IntroAndContact = () => {
    const props = getAboutMeProps();

    return (
        <Grid item xs={12} md={8}>
            <Greeting variant="h6">{props.title}</Greeting>
            <Content variant="body1">{props.subtitle}</Content>
            <Desktop>
                <Contact />
            </Desktop>
        </Grid>
    );
};

export default IntroAndContact;