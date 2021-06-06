import Grid from '@material-ui/core/Grid';
import Profile from './Profile';
import IntroAndContact from './IntroAndContact';
import styled from 'styled-components';
import { AboutMeSection } from '../../models/Data';

const Wrapper = styled(Grid)`
    padding: 60px 0;
    overflow: auto;
`;

const AboutMe = (props: AboutMeSection) => {
    return (
        <Wrapper
            container
            item
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
        >
            <Profile {...props} />
            <IntroAndContact {...props} />
        </Wrapper>
    );
};

export default AboutMe;